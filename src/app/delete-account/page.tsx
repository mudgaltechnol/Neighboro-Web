
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, ShieldAlert } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function DeleteAccount() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="font-headline font-bold text-4xl mb-4">Account Deletion</h1>
        <p className="text-muted-foreground">We are sorry to see you go. Please follow the steps below to request account deletion.</p>
      </div>

      <Alert variant="destructive" className="mb-8">
        <ShieldAlert className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Deleting your account is permanent. All your saved offers, shop listings, and business analytics will be permanently erased and cannot be recovered.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Deletion Request Form</CardTitle>
          <CardDescription>All fields are required to verify your identity.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="app-type">Which app are you using?</Label>
              <select id="app-type" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                <option value="customer">Neighboro (Customer App)</option>
                <option value="partner">Neighboro Partner (Shop Owner App)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Registered Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Reason for deletion (Optional)</Label>
              <Textarea id="reason" placeholder="Please let us know how we can improve..." />
            </div>

            <div className="pt-4">
              <Button variant="destructive" className="w-full h-12 text-base font-bold">
                Confirm Account Deletion Request
              </Button>
            </div>
            
            <p className="text-xs text-center text-muted-foreground">
              Once submitted, our team will process your request within 48-72 hours. You will receive a confirmation SMS once the deletion is complete.
            </p>
          </form>
        </CardContent>
      </Card>

      <div className="mt-12 bg-muted p-6 rounded-xl space-y-4">
        <h3 className="font-bold flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-primary" />
          Data Retention Policy
        </h3>
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li><strong>Personal Identifiable Information (PII):</strong> Deleted instantly upon request.</li>
          <li><strong>Transactional Records:</strong> Retained for 180 days if required by Indian financial regulations.</li>
          <li><strong>Analytics Data:</strong> Anonymized and stripped of any user ID.</li>
        </ul>
      </div>
    </div>
  );
}
