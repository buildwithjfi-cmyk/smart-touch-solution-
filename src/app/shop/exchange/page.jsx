import { RefreshCw, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata = {
  title: 'Old Appliance Exchange & Buyback Calculator Bangalore | Smart Touch Appliances',
  description: 'Exchange your old washing machine, fridge, or AC for an instant trade-in discount in Bangalore. Call +91 99162 07964 for on-the-spot valuation.',
};

export default function ExchangePage() {
  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-amber-200 bg-amber-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              ♻️ Old Appliance Trade-In & Buyback
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              Instant Old Appliance <span className="text-amber-700">Exchange</span>
            </h1>
            <p className="text-stone-700 text-base sm:text-lg">
              Get an instant trade-in discount on your old washing machine, fridge, or AC when upgrading to a brand new appliance.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-warm-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20exchange%20my%20old%20appliance" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                <span>Get Instant Valuation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 text-center">How Trade-In Valuation Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
            <span className="text-3xl font-black text-amber-700">01</span>
            <h3 className="text-lg font-bold text-stone-900">Send Photo & Details</h3>
            <p className="text-stone-700 text-xs">WhatsApp a photo of your old appliance to +91 99162 07964 with brand & age.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
            <span className="text-3xl font-black text-amber-700">02</span>
            <h3 className="text-lg font-bold text-stone-900">Instant Estimate Quote</h3>
            <p className="text-stone-700 text-xs">Our team evaluates working condition and provides instant trade-in credit valuation.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
            <span className="text-3xl font-black text-amber-700">03</span>
            <h3 className="text-lg font-bold text-stone-900">Doorstep Pickup & Deduct</h3>
            <p className="text-stone-700 text-xs">We pick up your old unit free of cost when delivering your replacement appliance!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
