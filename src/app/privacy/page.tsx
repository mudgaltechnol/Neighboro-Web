
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="font-headline font-bold text-4xl md:text-5xl mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Effective Date: June 1, 2024. Last Updated: May 2026.</p>
      </div>

      <div className="space-y-8 prose prose-slate lg:prose-lg max-w-none">
        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">1. Introduction</h2>
          <p>Welcome to Neighboro Connect. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share information when you use our mobile applications (Neighboro and Neighboro Partner) and our website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">2. Information We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-lg">For Customers</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Phone number for authentication</li>
                  <li>Approximate location (for showing nearby shops)</li>
                  <li>Usage data (saved offers, shops visited)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">For Partners</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Shop name and owner details</li>
                  <li>Shop location and contact info</li>
                  <li>Business images and offer details</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">3. How We Use Information</h2>
          <p>We use the collected data to provide the core services of our platform:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Hyperlocal Discovery:</strong> Connecting users with nearby shops.</li>
            <li><strong>Analytics:</strong> Helping shop owners understand their business visibility.</li>
            <li><strong>Push Notifications:</strong> Keeping you updated on new deals near you.</li>
            <li><strong>Security:</strong> Preventing fraud and unauthorized access.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">4. Data Sharing</h2>
          <p>We do not sell your personal data. We only share information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Shop Owners:</strong> Aggregated, non-identifiable view/save counts.</li>
            <li><strong>Service Providers:</strong> Cloud hosting and authentication services (like Firebase).</li>
            <li><strong>Legal Authorities:</strong> When required by Indian law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">5. Your Rights</h2>
          <p>Under Indian Data Protection laws, you have the right to access, update, or delete your data. You can request account deletion at any time through our dedicated portal.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="font-medium">Email: privacy@neighboro.com</p>
          <p className="font-medium">Address: Panipat, Haryana, India</p>
        </section>
      </div>
    </div>
  );
}
