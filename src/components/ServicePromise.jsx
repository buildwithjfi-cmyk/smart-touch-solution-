import { ShieldCheck, ClipboardCheck, Search, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const promises = [
  {
    icon: Search,
    label: 'Step 1',
    title: '₹200 Inspection Charge',
    desc: 'Our technician visits your home and inspects the appliance to find the exact fault. A flat inspection charge of ₹200 applies.',
  },
  {
    icon: ClipboardCheck,
    label: 'Step 2',
    title: 'Estimate Before Work',
    desc: 'Before taking up any work, we give you a clear estimate for the repair. Work begins only after you approve it.',
  },
  {
    icon: ShieldCheck,
    label: 'Step 3',
    title: '365 Days Warranty',
    desc: 'Every repair we complete is covered by a 365-day warranty, so you can rely on it for a full year.',
  },
];

export default function ServicePromise() {
  return (
    <div className="w-full max-w-5xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm bg-white">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span>Simple & Honest Pricing</span>
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">How Our Pricing Works</h3>
        <p className="text-stone-700 text-sm">
          No surprises: you know the cost before any repair begins.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {promises.map(({ icon: Icon, label, title, desc }) => (
          <div key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
                <Icon className="w-5 h-5 text-amber-700" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600">{label}</span>
            </div>
            <h4 className="text-lg font-bold text-stone-900">{title}</h4>
            <p className="text-stone-700 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">
        <a
          href="tel:+919916207964"
          className="btn-warm-primary w-full sm:w-auto px-8 py-3.5 text-sm flex items-center justify-center gap-2 font-bold"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call +91 99162 07964</span>
        </a>
        <a
          href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20would%20like%20to%20book%20an%20inspection"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-3.5 text-sm rounded-full flex items-center justify-center gap-2 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Book Inspection on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
