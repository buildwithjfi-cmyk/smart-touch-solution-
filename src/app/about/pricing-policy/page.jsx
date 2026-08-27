import { HeartHandshake, ShieldCheck, Phone } from 'lucide-react';

export const metadata = {
  title: 'Transparent Upfront Pricing & Warranty Policy | Smart Touch Appliances',
  description: 'Learn about our transparent fixed pricing policy, zero hidden diagnostic fees, and official written service warranty in Bangalore. Call +91 99162 07964.',
};

export default function PricingPolicyPage() {
  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-100 bg-gradient-to-b from-sky-50/50 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              🤝 Zero Hidden Fees Guarantee
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-stone-900">
              Pricing & Warranty Policy
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              We provide fixed upfront quotes before work begins. If repair work is performed, diagnostic inspection fees are completely waived!
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="glass-card p-8 rounded-3xl border border-stone-200 bg-white space-y-4">
          <h2 className="text-2xl font-bold text-stone-900">Official Service Warranty Terms</h2>
          <ul className="space-y-3 text-xs text-stone-700 font-semibold">
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>90 to 180 Days written warranty on all replaced spare parts.</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Free re-inspection if the same issue reoccurs during the warranty period.</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>100% Factory original OEM parts sourced directly from brand distributors.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
