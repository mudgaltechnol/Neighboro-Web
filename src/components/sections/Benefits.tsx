
"use client";

import { CheckCircle2, ShoppingBag, TrendingUp, Handshake } from 'lucide-react';

const benefits = [
  { icon: ShoppingBag, title: "Smart Local Shopping", desc: "No more roaming aimlessly. Know what's available and where." },
  { icon: TrendingUp, title: "Business Growth", desc: "Take your physical shop online and reach 1000s of nearby users." },
  { icon: Handshake, title: "Community Driven", desc: "We focus on real local relationships, not just e-commerce transactions." },
  { icon: CheckCircle2, title: "100% Verified", desc: "Real shops, real offers, real people in your neighborhood." }
];

export function Benefits() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-headline font-bold text-4xl md:text-5xl mb-8 leading-tight">Why Choose <br /><span className="text-primary italic underline underline-offset-8">Neighboro?</span></h2>
            <p className="text-lg text-muted-foreground mb-12">
              We're bridging the gap between local retail and modern digital discovery. Our mission is to make local shops the first choice for every Indian household.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">{b.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/market-vibe/800/600" 
                alt="Support Local" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-3xl font-bold mb-1">Several</div>
                  <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Active Shops across Haryana</div>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-0 blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full -z-0 blur-2xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
