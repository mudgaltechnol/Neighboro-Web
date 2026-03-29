
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, ShieldAlert, Loader2, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { submitDeletionRequest } from './actions';

export default function DeleteAccount() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    
    try {
      const result = await submitDeletionRequest(formData);
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Request Submitted",
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsPending(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-32 max-w-2xl text-center">
        <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h1 className="font-headline font-bold text-4xl mb-4">Request Received</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          We've received your account deletion request for <span className="text-foreground font-semibold">lakshay01mudgal@gmail.com</span> notification. Our support team will process this shortly.
        </p>
        <Button asChild variant="outline">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    );
  }

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="app-type">Which app are you using?</Label>
              <select 
                id="app-type" 
                name="app-type"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                required
              >
                <option value="customer">Neighboro (Customer App)</option>
                <option value="partner">Neighboro Partner (Shop Owner App)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Registered Email ID</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="example@email.com" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Reason for deletion (Optional)</Label>
              <Textarea 
                id="reason" 
                name="reason"
                placeholder="Please let us know how we can improve..." 
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit"
                variant="destructive" 
                className="w-full h-12 text-base font-bold"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Confirm Account Deletion Request'
                )}
              </Button>
            </div>
            
            <p className="text-xs text-center text-muted-foreground">
              Once submitted, our team will process your request within 48-72 hours. A notification has been queued for our admin team.
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
