import { ShieldCheck, CheckCircle2, Award, Phone, HeartHandshake, Wrench, Users, History } from 'lucide-react';
import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata = {
  title: 'About Smart Touch Appliances | Doorstep Appliance Repair in Bangalore',
  description: 'Learn about Smart Touch Appliances - doorstep home appliance repair in Bangalore. ₹200 inspection, estimate before work, 365 days warranty after repair. Call +91 99162 07964.',
};

export default function AboutPage() {
  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-200 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-900 shadow-xs">
              <Award className="w-4 h-4 text-sky-700" />
              <span>Doorstep Appliance Repair</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight">
              About Smart Touch <span className="text-sky-700">Appliances</span>
            </h1>

            <p className="text-stone-700 text-base sm:text-xl leading-relaxed">
              We repair home appliances at your doorstep across Bangalore, with honest advice and a clear estimate before any work.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Hotline: +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20know%20more" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Contact</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Warranty Summary */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 bg-white space-y-3">
          <ShieldCheck className="w-8 h-8 text-sky-600" />
          <h3 className="text-xl font-bold text-stone-900">365 Days Warranty</h3>
          <p className="text-stone-700 text-sm leading-relaxed">
            Every repair we complete is covered by a 365-day warranty, with free re-inspection if the same issue comes back.
          </p>
        </div>

        <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 bg-white space-y-3">
          <HeartHandshake className="w-8 h-8 text-sky-600" />
          <h3 className="text-xl font-bold text-stone-900">Pricing Policy</h3>
          <p className="text-stone-700 text-sm leading-relaxed">
            A flat ₹200 inspection charge, and we give you an estimate before taking up any work.
          </p>
          <Link href="/about/pricing-policy" className="inline-block text-xs font-bold text-sky-700 hover:underline pt-2">
            Read Pricing Policy →
          </Link>
        </div>
      </section>
    </div>
  );
}
