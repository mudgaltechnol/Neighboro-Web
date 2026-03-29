
"use client";

import Image from 'next/image';
import { Smartphone, Store, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6 border border-secondary/20 animate-in fade-in slide-in-from-bottom-4">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              Now Serving Panipat & Delhi NCR
            </div>
            
            <h1 className="font-headline font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-foreground tracking-tight">
              Aapka Apna <br />
              <span className="text-primary italic">Neighborhood Hub</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover local deals or grow your shop visibility. 
              <span className="text-primary font-medium"> Neighboro</span> connects smart shoppers with local heroes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-xl hover:shadow-2xl transition-all group w-full sm:w-auto">
                Discover Offers
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-primary/20 hover:bg-primary/5 transition-all w-full sm:w-auto">
                Partner with Us
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Local Shop Search</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Daily New Deals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Free for Shops</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-square max-w-[600px] mx-auto">
              {/* Background Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-3xl"></div>
              
              {/* Mockups */}
              <div className="relative z-10 flex items-center justify-center gap-4">
                <div className="w-1/2 -rotate-12 translate-y-12 animate-in slide-in-from-left-20 duration-1000">
                  <div className="bg-white rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-900 overflow-hidden aspect-[9/19]">
                    <Image 
                      src={PlaceHolderImages.find(i => i.id === 'customer-app-preview')?.imageUrl || ''} 
                      alt="Customer App"
                      fill
                      className="object-cover rounded-[1.8rem]"
                      data-ai-hint="mobile app"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Customer App</span>
                  </div>
                </div>
                
                <div className="w-1/2 rotate-12 -translate-y-12 animate-in slide-in-from-right-20 duration-1000">
                  <div className="bg-white rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-900 overflow-hidden aspect-[9/19]">
                    <Image 
                      src={PlaceHolderImages.find(i => i.id === 'partner-app-preview')?.imageUrl || ''} 
                      alt="Partner App"
                      fill
                      className="object-cover rounded-[1.8rem]"
                      data-ai-hint="business app"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Partner App</span>
                  </div>
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute top-0 right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms] z-20">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Store className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold">New Offer Added!</div>
                  <div className="text-[10px] text-muted-foreground">500m from you</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
