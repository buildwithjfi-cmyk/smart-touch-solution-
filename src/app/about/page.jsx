import { ShieldCheck, CheckCircle2, Award, Phone, MessageSquare, HeartHandshake, Wrench, Users, History } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Smart Touch Appliances | 10+ Years of Appliance Care in Bangalore',
  description: 'Learn about Smart Touch Appliances - Bangalore\'s trusted home appliance repair & certified refurbished store with 25-point gold quality standard. Call +91 99162 07964.',
};

export default function AboutPage() {
  const milestones = [
    { year: '2014', title: 'Founded in Bangalore', desc: 'Started as a single technician hub serving Koramangala & Indiranagar.' },
    { year: '2018', title: 'Expanded 100+ Localities', desc: 'Grew into South & East Bangalore with a dedicated team of 15 engineers.' },
    { year: '2022', title: 'Refurbished Store Launch', desc: 'Introduced 25-point gold standard certified pre-owned appliance sales.' },
    { year: '2026', title: '287+ Bangalore Localities', desc: 'Servicing over 25,000 satisfied households with 60-minute doorstep ETA.' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-200 bg-gradient-to-b from-sky-50 via-blue-50/30 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-900 shadow-xs">
              <Award className="w-4 h-4 text-sky-700" />
              <span>Over 10+ Years Of Engineering Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-tight">
              About Smart Touch <span className="text-gradient-blue">Appliances</span>
            </h1>

            <p className="text-stone-600 text-base sm:text-xl leading-relaxed">
              We are Bangalore's leading home appliance care provider, dedicated to delivering honest, fast, and transparent doorstep repairs and certified pre-owned appliance sales.
            </p>

            <div className="pt-2 flex justify-center gap-4">
              <a href="tel:+919916207964" className="btn-blue-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Hotline: +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20know%20more" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Contact</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* History Milestones */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-stone-900">Our 10-Year Journey</h2>
          <p className="text-stone-600 text-sm">Building trust household by household across Bangalore.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
              <span className="text-2xl font-black text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200 inline-block">{item.year}</span>
              <h3 className="text-base font-bold text-stone-900 pt-1">{item.title}</h3>
              <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Links to Inspection & Pricing Sub-Pages */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-8 rounded-3xl border border-stone-200 bg-white space-y-3">
          <ShieldCheck className="w-8 h-8 text-sky-600" />
          <h3 className="text-xl font-bold text-stone-900">25-Point Inspection Protocol</h3>
          <p className="text-stone-600 text-xs leading-relaxed">
            Every certified pre-owned appliance is stress tested for electrical safety, motor load, and ultrasonic sanitization.
          </p>
          <Link href="/about/quality-inspection" className="inline-block text-xs font-bold text-sky-700 hover:underline pt-2">
            Read Quality Standard →
          </Link>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-stone-200 bg-white space-y-3">
          <HeartHandshake className="w-8 h-8 text-sky-600" />
          <h3 className="text-xl font-bold text-stone-900">Transparent Pricing Policy</h3>
          <p className="text-stone-600 text-xs leading-relaxed">
            We provide fixed upfront quotes before work starts with zero hidden fees and up to 180 days written part warranty.
          </p>
          <Link href="/about/pricing-policy" className="inline-block text-xs font-bold text-sky-700 hover:underline pt-2">
            Read Pricing Policy →
          </Link>
        </div>
      </section>
    </div>
  );
}
