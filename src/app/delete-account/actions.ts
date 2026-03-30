
'use server';

import nodemailer from 'nodemailer';

/**
 * Server Action to handle account deletion requests.
 * Sends an email notification to both admin and user if SMTP is configured.
 */
export async function submitDeletionRequest(formData: FormData) {
  const email = String(formData.get('email') || '');
  const appType = String(formData.get('app-type') || 'customer');
  const reason = String(formData.get('reason') || 'Not provided');

  const adminEmail = process.env.NOTIFICATION_EMAIL || 'lakshay01mudgal@gmail.com';
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@neighboro.com';
  const sendToUser = Boolean(process.env.SEND_USER_NOTIFICATION ?? true);

  const subject = `Neighboro deletion request: ${appType}`;
  const text = `A request to delete an account has been submitted.

From: ${email}
App Type: ${appType}
Reason: ${reason}
Timestamp: ${new Date().toISOString()}
`;

  // Try sending email only if SMTP is configured.
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      subject,
      text,
      replyTo: email,
    });

    if (sendToUser && email) {
      await transporter.sendMail({
        from: fromEmail,
        to: email,
        subject: 'Neighboro account deletion request received',
        text: `Hello,\n\nWe have received your deletion request for ${appType}. Our support team will process it within 48-72 hours.\n\nThank you,\nNeighboro Team`,
      });
    }
  } else {
    console.warn('SMTP config is missing; deletion request email not sent.');
  }

  console.log(`\n--- NEW DELETION REQUEST ---\nTo: ${adminEmail}\nFrom: ${email}\nApp Type: ${appType}\nReason: ${reason}\nTimestamp: ${new Date().toISOString()}\n----------------------------\n`);

  return {
    success: true,
    message: 'Your request has been submitted. Our team will review it within 48-72 hours.',
    email,
  };
}
