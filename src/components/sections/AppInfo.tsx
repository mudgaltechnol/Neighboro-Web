
"use client";

import Image from 'next/image';
import { Smartphone, Store, ShieldCheck, MapPin, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AppInfo() {
  return (
    <section className="py-24 container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-headline font-bold text-3xl md:text-5xl mb-6 tracking-tight">One Platform, Two Worlds</h2>
        <p className="text-muted-foreground text-lg">Whether you're looking for the best local deal or looking to grow your shop, we've built the perfect tool for you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Customer App */}
        <div id="customer" className="scroll-mt-24 group">
          <Card className="overflow-hidden border-none shadow-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-500 h-full">
            <CardContent className="p-8 md:p-12">
              <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-headline font-bold text-3xl mb-4">Neighboro <span className="text-primary">(Customer)</span></h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tired of searching for good local shops and missing out on the best deals around you? Meet Neighboro – your personal hyperlocal discovery app. 
                Discover kirana stores, salons, repair shops, and eateries in your area within a 5-10 km radius.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  { icon: Zap, text: "Today's Best Offers right on your feed" },
                  { icon: MapPin, text: "Discover shops in Panipat, Haryana & Delhi NCR" },
                  { icon: ShieldCheck, text: "Save your favorite shops for quick access" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Image src="https://placehold.co/180x60/black/white?text=Google+Play" alt="Google Play" width={160} height={53} className="h-12 w-auto" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partner App */}
        <div id="partner" className="scroll-mt-24 group">
          <Card className="overflow-hidden border-none shadow-xl bg-secondary/5 hover:bg-secondary/10 transition-colors duration-500 h-full">
            <CardContent className="p-8 md:p-12">
              <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Store className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-headline font-bold text-3xl mb-4">Neighboro <span className="text-secondary">Partner</span></h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Want more customers coming to your shop every day? Neighboro Partner is a simple and powerful app made specially for local shop owners. 
                List your business for free, add attractive offers, and watch your footfall grow.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  { icon: TrendingUp, text: "Free shop listing in under 2 minutes" },
                  { icon: Zap, text: "Create eye-catching offers instantly" },
                  { icon: ShieldCheck, text: "Real-time analytics for views & saves" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <item.icon className="w-4 h-4 text-secondary" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Image src="https://placehold.co/180x60/black/white?text=Google+Play" alt="Google Play" width={160} height={53} className="h-12 w-auto" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
