import { RefreshCw, Phone, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Old Appliance Exchange & Buyback Calculator Bangalore | Smart Touch Appliances',
  description: 'Exchange your old washing machine, fridge, or AC for instant cash discounts up to ₹6,000 in Bangalore. Call +91 99862 07964 for on-the-spot valuation.',
};

export default function ExchangePage() {
  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-200 bg-gradient-to-b from-amber-50/50 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              ♻️ Old Appliance Trade-In & Buyback
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-stone-900">
              Instant Old Appliance <span className="text-gradient-warm">Exchange</span>
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              Get up to ₹6,000 instant trade-in discount on your old broken washing machine, fridge, or AC when upgrading to any new or certified refurbished appliance.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <a href="tel:+919986207964" className="btn-warm-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99862 07964</span>
              </a>
              <a href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20exchange%20my%20old%20appliance" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Get Instant Valuation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-3xl font-extrabold text-stone-900 text-center">How Trade-In Valuation Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
            <span className="text-3xl font-black text-amber-600">01</span>
            <h3 className="text-lg font-bold text-stone-900">Send Photo & Details</h3>
            <p className="text-stone-600 text-xs">WhatsApp a photo of your old appliance to +91 99862 07964 with brand & age.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
            <span className="text-3xl font-black text-amber-600">02</span>
            <h3 className="text-lg font-bold text-stone-900">Instant Estimate Quote</h3>
            <p className="text-stone-600 text-xs">Our team evaluates working condition and provides instant trade-in credit valuation.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
            <span className="text-3xl font-black text-amber-600">03</span>
            <h3 className="text-lg font-bold text-stone-900">Doorstep Pickup & Deduct</h3>
            <p className="text-stone-600 text-xs">We pick up your old unit free of cost when delivering your replacement appliance!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
