
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Footer() {
  const { toast } = useToast();

  const toastAction = (message: string) => {
    toast({
      title: 'Coming Soon',
      description: message,
      variant: 'info',
    });
  };

  return (
    <footer className="bg-white border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
                 <div className="p-1.5 rounded-lg group-hover:scale-105 transition-transform overflow-hidden">
                            <Image
                              src="/logo.png"
                              alt="NeighboroConnect Logo"
                              width={50}
                              height={50}
                              className="w-14 h-14 object-contain"
                            />
                          </div>
              <span className="font-headline font-bold text-xl tracking-tight text-primary">
                Neighboro
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering local businesses and simplifying smart shopping for the community. Discover your neighborhood like never before.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider mb-6 text-foreground">For Users</h4>
            <ul className="space-y-4">
              <li>
                <button type="button" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => toastAction('Find local shops is coming soon.')}>Find Local Shops</button>
              </li>
              <li>
                <button type="button" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => toastAction("Today's Best Offers is coming soon.")}>Today's Best Offers</button>
              </li>
              <li>
                <button type="button" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => toastAction('Trending deals is coming soon.')}>Trending Deals</button>
              </li>
              <li><Link href="/delete-account" className="text-sm text-muted-foreground hover:text-primary transition-colors">Account Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider mb-6 text-foreground">For Partners</h4>
            <ul className="space-y-4">
              <li>
                <button type="button" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => toastAction('Listing your shop is coming soon.')}>List Your Shop</button>
              </li>
              <li>
                <button type="button" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => toastAction('Business growth info is coming soon.')}>Business Growth</button>
              </li>
              <li>
                <button type="button" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => toastAction('Manage offers feature is coming soon.')}>Manage Offers</button>
              </li>
              <li><button type="button" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => toastAction('Partner terms is coming soon.')}>Partner Terms</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider mb-6 text-foreground">Legal & Help</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/delete-account" className="text-sm text-muted-foreground hover:text-primary transition-colors">Delete Account</Link></li>
              {/* <li>
                <a href="mailto:lakshay01mudgal@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> lakshay01mudgal@gmail.com
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center md:text-left md:flex md:justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Neighboro Connect. All rights reserved. Supporting local shops in Panipat, Haryana, and Delhi NCR.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:underline">Terms</Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
