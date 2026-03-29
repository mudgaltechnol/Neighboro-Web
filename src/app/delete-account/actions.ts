
'use server';

/**
 * Server Action to handle account deletion requests.
 * In a production environment, this would use a service like Resend or SendGrid
 * to send a real email.
 */
export async function submitDeletionRequest(formData: FormData) {
  const email = formData.get('email');
  const appType = formData.get('app-type');
  const reason = formData.get('reason');

  // Log the request for the developer (simulating the email send)
  console.log(`
    --- NEW DELETION REQUEST ---
    To: lakshay01mudgal@gmail.com
    From: ${email}
    App Type: ${appType}
    Reason: ${reason || 'Not provided'}
    Timestamp: ${new Date().toISOString()}
    ----------------------------
  `);

  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Your request has been sent. Our team will review it within 48-72 hours."
  };
}
