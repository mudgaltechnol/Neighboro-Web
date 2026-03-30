
'use client';

import Link from 'next/link';
import { 
  ShieldCheck, 
  Info, 
  Database, 
  Settings, 
  Users, 
  Lock, 
  MapPin, 
  Bell, 
  Link as LinkIcon, 
  Baby, 
  Scale, 
  History, 
  Mail,
  ChevronRight,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const sections = [
  { id: 's1', title: 'Who We Are', icon: Users },
  { id: 's2', title: 'Information We Collect', icon: Database },
  { id: 's3', title: 'How We Use Your Information', icon: Settings },
  { id: 's4', title: 'Information Sharing & Disclosure', icon: LinkIcon },
  { id: 's5', title: 'Data Storage & Security', icon: Lock },
  { id: 's6', title: 'Location Data', icon: MapPin },
  { id: 's7', title: 'Push Notifications', icon: Bell },
  { id: 's8', title: 'Third-Party Services', icon: LinkIcon },
  { id: 's9', title: 'Children\'s Privacy', icon: Baby },
  { id: 's10', title: 'Your Rights & Choices', icon: Scale },
  { id: 's11', title: 'Data Retention', icon: History },
  { id: 's12', title: 'Changes to This Policy', icon: History },
  { id: 's13', title: 'Contact Us', icon: Mail },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#fefdf8] min-h-screen pb-20">
      {/* Custom Hero Section */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(22,163,74,0.15)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h1 className="font-headline font-bold text-4xl md:text-6xl mb-6">Privacy Policy</h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
            Your privacy matters to us. This policy explains clearly how Neighboro collects, uses, and protects your information.
          </p>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
            Last Updated: January 1, 2026
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl mt-16">
        {/* Table of Contents */}
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-100 shadow-sm mb-12">
          <h3 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
            <span className="text-xl">📋</span> Table of Contents
          </h3>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
            {sections.map((section, index) => (
              <li key={section.id} className="flex items-center gap-2 group">
                <span className="text-xs font-bold text-slate-300 w-5">{index + 1}.</span>
                <a 
                  href={`#${section.id}`} 
                  className="text-primary font-medium hover:underline text-sm transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6 mb-12">
          <p className="text-green-800 font-medium text-sm md:text-base leading-relaxed">
            📌 <strong>Summary:</strong> We collect only the data needed to provide our services. We do not sell your personal information to third parties. You can request account deletion at any time.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Section 1 */}
          <section id="s1" className="scroll-mt-24">
            <h2 className="font-headline font-bold text-2xl mb-6 pb-4 border-b-2 border-slate-100 flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-lg"><Users className="w-5 h-5 text-green-600" /></div>
              1. Who We Are
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Neighboro is a hyperlocal discovery platform operated by <strong>Neighboro Technologies</strong> (referred to as "Neighboro", "we", "us", or "our"). We operate two Android applications:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Neighboro</strong> – A customer-facing app that helps users discover local shops, offers, and deals near them.</li>
                <li><strong>Neighboro Partner</strong> – A business app that helps local shop owners list their shops and post offers to nearby customers.</li>
              </ul>
              <p>This Privacy Policy applies to both applications and our website. By downloading, installing, or using our apps, you agree to the practices described in this policy.</p>
              <p>If you have questions about this policy, contact us at: <strong>lakshay01mudgal@gmail.com</strong></p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="s2" className="scroll-mt-24">
            <h2 className="font-headline font-bold text-2xl mb-6 pb-4 border-b-2 border-slate-100 flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-lg"><Database className="w-5 h-5 text-green-600" /></div>
              2. Information We Collect
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>We collect different types of information depending on whether you use the Customer App or the Partner App.</p>
              
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900">2.1 Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Registration:</strong> Name, mobile number, and/or email address when you create an account.</li>
                  <li><strong>Profile Information (Partner App):</strong> Shop name, shop address, shop category, business description, contact number, and photos of your shop and products/offers.</li>
                  <li><strong>Offer Details (Partner App):</strong> Offer title, description, discount amount, validity period, and offer images.</li>
                  <li><strong>Preferences:</strong> Saved shops, bookmarked offers, and selected area/sector preferences.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-slate-900">2.2 Information We Collect Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Device Information:</strong> Device model, operating system version, unique device identifiers, and app version.</li>
                  <li><strong>Location Data:</strong> Approximate or precise GPS location (with your permission).</li>
                  <li><strong>Usage Data:</strong> Screens viewed, features used, offers clicked, and time spent in the app.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="s3" className="scroll-mt-24">
            <h2 className="font-headline font-bold text-2xl mb-6 pb-4 border-b-2 border-slate-100 flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-lg"><Settings className="w-5 h-5 text-green-600" /></div>
              3. How We Use Your Information
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>To Provide the Service:</strong> Show nearby shops and offers based on your location.</li>
                <li><strong>To Personalize Your Experience:</strong> Show you relevant deals in your area.</li>
                <li><strong>Push Notifications:</strong> Notify you about new offers added near you.</li>
                <li><strong>Analytics for Shop Owners:</strong> Provide data on listing engagement.</li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-4 mt-6">
                <p className="text-green-800 font-medium text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> 
                  We do not use your data for targeted advertising by third parties. We do not sell your personal data.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="s4" className="scroll-mt-24">
            <h2 className="font-headline font-bold text-2xl mb-6 pb-4 border-b-2 border-slate-100 flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-lg"><LinkIcon className="w-5 h-5 text-green-600" /></div>
              4. Information Sharing & Disclosure
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>We do not sell, rent, or trade your personal information. We share data only in limited circumstances:</p>
              <h3 className="font-bold text-slate-900 mt-6">4.1 Within the Neighboro Platform</h3>
              <p>Shop profiles created by shop owners on the Partner App are visible to customers using the Customer App.</p>
              
              <div className="bg-orange-50 border-l-4 border-orange-600 rounded-r-xl p-4 mt-6">
                <p className="text-orange-800 font-medium text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> 
                  We never sell your personal data to third-party advertisers or data brokers. Ever.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 (Location) */}
          <section id="s6" className="scroll-mt-24">
            <h2 className="font-headline font-bold text-2xl mb-6 pb-4 border-b-2 border-slate-100 flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-lg"><MapPin className="w-5 h-5 text-green-600" /></div>
              6. Location Data
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>Location is core to our service. We access it only when the app is open and in use. We do <em>not</em> track your location in the background.</p>
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-4 mt-6">
                <p className="text-blue-800 font-medium text-sm flex items-center gap-2">
                  <Info className="w-4 h-4" /> 
                  We never share your precise location with shop owners. They only see general analytics.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 (Rights) */}
          <section id="s10" className="scroll-mt-24">
            <h2 className="font-headline font-bold text-2xl mb-6 pb-4 border-b-2 border-slate-100 flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-lg"><Scale className="w-5 h-5 text-green-600" /></div>
              10. Your Rights & Choices
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>You have the right to access, correct, or delete your personal data.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link 
                  href="/delete-account" 
                  className="inline-flex items-center justify-center bg-red-50 text-red-700 font-bold px-6 py-3 rounded-xl border border-red-100 hover:bg-red-100 transition-colors gap-2"
                >
                  <History className="w-4 h-4" /> Account Deletion Portal
                </Link>
                {/* <a 
                  href="mailto:privacy@neighboro.in" 
                  className="inline-flex items-center justify-center bg-slate-100 text-slate-700 font-bold px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-200 transition-colors gap-2"
                >
                  <Mail className="w-4 h-4" /> Contact Privacy Officer
                </a> */}
              </div>
            </div>
          </section>

          {/* Contact Us Final */}
          <section id="s13" className="mt-20">
            <div className="bg-slate-950 text-white rounded-[2rem] p-10 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h3 className="font-headline font-bold text-2xl md:text-3xl mb-4">Still Have Questions?</h3>
                <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
                  We're happy to clarify anything about how we handle your data. Write to us anytime — we respond within 7 business days.
                </p>
                <button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=lakshay01mudgal@gmail.com&su=Privacy%20Policy%20Inquiry', '_blank')}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
                >
                  <Mail className="w-5 h-5" /> Contact Us
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
