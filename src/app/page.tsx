
import { Hero } from '@/components/sections/Hero';
import { AppInfo } from '@/components/sections/AppInfo';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { DownloadSection } from '@/components/sections/Download';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <AppInfo />
      <div id="features">
        <Features />
      </div>
      <HowItWorks />
      <Benefits />
      <DownloadSection />
    </div>
  );
}
