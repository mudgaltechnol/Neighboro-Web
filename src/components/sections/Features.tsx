
"use client";

import { Bell, Search, Heart, Smartphone, LineChart, PlusCircle, LayoutDashboard, MapPinned } from 'lucide-react';

const customerFeatures = [
  { icon: Search, title: "Smart Search", desc: "Find exactly what you need by categories like Food, Beauty, Repair, and more." },
  { icon: Bell, title: "Push Notifications", desc: "Get notified instantly when new offers are added near your area." },
  { icon: MapPinned, title: "Hyperlocal Accuracy", desc: "See only shops and offers from your selected area or nearby sectors." },
  { icon: Heart, title: "Save Favorites", desc: "Bookmark offers and shops to check them anytime, anywhere." }
];

const partnerFeatures = [
  { icon: PlusCircle, title: "Easy Listing", desc: "Add your shop name, photos, and phone number in minutes." },
  { icon: LayoutDashboard, title: "Simple Dashboard", desc: "Update offers, change prices, or extend deals anytime from your phone." },
  { icon: LineChart, title: "Business Insights", desc: "See how many people viewed your shop and engaged with your listing." },
  { icon: Smartphone, title: "Reach 5-10km", desc: "Your offers are automatically shown to all users in your nearby radius." }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="font-headline font-bold text-3xl md:text-5xl mb-6">Features Built For You</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="mb-24">
          <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-10 text-center lg:text-left">For the Smart Shopper</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerFeatures.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-primary/5 hover:bg-white border border-transparent hover:border-primary/10 hover:shadow-xl transition-all duration-300">
                <f.icon className="w-10 h-10 text-primary mb-6" />
                <h4 className="font-headline font-bold text-xl mb-3">{f.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold uppercase tracking-widest text-secondary mb-10 text-center lg:text-left">For the Shop Hero</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerFeatures.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-secondary/5 hover:bg-white border border-transparent hover:border-secondary/10 hover:shadow-xl transition-all duration-300">
                <f.icon className="w-10 h-10 text-secondary mb-6" />
                <h4 className="font-headline font-bold text-xl mb-3">{f.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
