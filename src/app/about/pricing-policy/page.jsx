import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Pricing & Warranty Policy | Smart Touch Appliances',
  description: '₹200 inspection charge, a clear estimate before any work begins, and 365 days warranty after repair. Doorstep appliance repair in Bangalore. Call +91 99162 07964.',
};

export default function PricingPolicyPage() {
  const terms = [
    'A flat inspection charge of ₹200 applies for the technician visit and fault diagnosis.',
    'Before taking up any work, we give you an estimate. Repair begins only after you approve it.',
    '365 days warranty on every repair we complete.',
    'Free re-inspection if the same issue reoccurs during the warranty period.',
    'Genuine spare parts used for repairs.',
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              🤝 Simple & Honest Pricing
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              Pricing & Warranty Policy
            </h1>
            <p className="text-stone-700 text-base sm:text-lg">
              ₹200 inspection charge. An estimate before we take up any work. 365 days warranty after repair.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 bg-white space-y-4">
          <h2 className="text-2xl font-bold text-stone-900">Service Terms</h2>
          <ul className="space-y-3 text-xs text-stone-700 font-semibold">
            {terms.map((term) => (
              <li key={term} className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
