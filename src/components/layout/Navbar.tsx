
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'For Customers', href: '/#customer' },
    { name: 'For Shops', href: '/#partner' },
    { name: 'Privacy', href: '/privacy' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => {
              if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                router.push('/');
              }
            }}
            className="flex items-center gap-2 group"
          >
            <div className="p-1.5 rounded-lg group-hover:scale-105 transition-transform overflow-hidden">
              <Image
                src="/logo.png"
                alt="Neighboro Logo"
                width={50}
                height={50}
                className="w-14 h-14 object-contain rounded-[20px]"
              />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-primary">
              Neighboro
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="rounded-full px-6 shadow-md hover:shadow-lg transition-all"
              onClick={() => window.open('https://play.google.com/store/apps/developer?id=EdutainX', '_blank')}
            >
              Download App
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="w-full rounded-full shadow-md"
              onClick={() => window.open('https://play.google.com/store/apps/developer?id=EdutainX', '_blank')}
            >
              Download Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
