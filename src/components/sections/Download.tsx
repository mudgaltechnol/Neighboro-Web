
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function DownloadSection() {
  const { toast } = useToast();
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline font-bold text-3xl md:text-5xl text-white mb-8">Ready to grow your shopping <br />or your shop?</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of users in Bahadurgarh who are already rediscovering their neighborhood with Neighboro Connect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            {/* App 1 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Download Neighboro (Customer)</h3>
              <div className="flex flex-col items-center gap-4">
                 <a
                   href="https://play.google.com/store/apps/details?id=com.edutainx.neighboro"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="cursor-pointer"
                 >
                   <Image src="/play-store.png" alt="Google Play" width={180} height={60} className="h-14 w-auto cursor-pointer hover:scale-105 transition-transform" />
                 </a>
              </div>
               <div className="flex flex-col items-center gap-10 mt-6">
                 <button
                   type="button"
                   onClick={() => toast({
                     title: "Coming Soon!",
                     description: "iOS app is coming soon to the Apple App Store.",
                     variant: "info",
                   })}
                   className="cursor-pointer"
                 >
                   <Image src="/apple-store.png" alt="App Store" width={180} height={60} className="h-14 w-auto cursor-pointer hover:scale-105 transition-transform" />
                 </button>
              </div>
            </div>

            {/* App 2 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Download Neighboro Partner (Shop)</h3>
              <div className="flex flex-col items-center gap-4">
                 <a
                   href="https://play.google.com/store/apps/details?id=com.edutainx.neighboropartner"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="cursor-pointer"
                 >
                   <Image src="/play-store.png" alt="App Store" width={180} height={60} className="h-14 w-auto cursor-pointer hover:scale-105 transition-transform" />
                 </a>
              </div>
               <div className="flex flex-col items-center gap-10 mt-6">
                 <button
                   type="button"
                   onClick={() => toast({
                     title: "Coming Soon!",
                     description: "iOS Partner app is coming soon to the Apple App Store.",
                     variant: "info",
                   })}
                   className="cursor-pointer"
                 >
                   <Image src="/apple-store.png" alt="App Store" width={180} height={60} className="h-14 w-auto cursor-pointer hover:scale-105 transition-transform" />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
