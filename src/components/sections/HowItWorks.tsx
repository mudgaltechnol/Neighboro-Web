
"use client";

import { Download, Search, CheckCircle, Store, Send, Eye } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="font-headline font-bold text-3xl md:text-5xl mb-4">Start Your Journey</h2>
          <p className="text-muted-foreground">Ab shopping hogi smart aur business hoga bada.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Customers */}
          <div>
            <h3 className="font-headline font-bold text-2xl mb-12 flex items-center gap-3">
              <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">01</span>
              For Customers
            </h3>
            <div className="space-y-12 relative">
              <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-primary/20 -z-0"></div>
              
              <div className="flex gap-6 relative z-10">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-primary/10">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Download Neighboro</h4>
                  <p className="text-muted-foreground text-sm">Install the app from Play Store and select your area.</p>
                </div>
              </div>

              <div className="flex gap-6 relative z-10">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-primary/10">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Explore & Discover</h4>
                  <p className="text-muted-foreground text-sm">Browse through categories or search for shops near you.</p>
                </div>
              </div>

              <div className="flex gap-6 relative z-10">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-primary/10">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Visit & Save</h4>
                  <p className="text-muted-foreground text-sm">Visit the shop and avail the offer. Support local business!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-headline font-bold text-2xl mb-12 flex items-center gap-3">
              <span className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">02</span>
              For Shop Owners
            </h3>
            <div className="space-y-12 relative">
              <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-secondary/20 -z-0"></div>
              
              <div className="flex gap-6 relative z-10">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-secondary/10">
                  <Store className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Create Profile</h4>
                  <p className="text-muted-foreground text-sm">Add shop photos, location, and basic details for free.</p>
                </div>
              </div>

              <div className="flex gap-6 relative z-10">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-secondary/10">
                  <Send className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Post an Offer</h4>
                  <p className="text-muted-foreground text-sm">Add a limited-time deal to attract nearby customers.</p>
                </div>
              </div>

              <div className="flex gap-6 relative z-10">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-secondary/10">
                  <Eye className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Grow Visibility</h4>
                  <p className="text-muted-foreground text-sm">Watch your views grow and more customers visit your shop.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
