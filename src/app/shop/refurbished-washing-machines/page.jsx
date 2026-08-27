import ApplianceCatalog from '@/components/ApplianceCatalog';
import { Sparkles, ShieldCheck, Truck, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Certified Refurbished Washing Machines Bangalore | Up to 80% Off',
  description: 'Buy certified used & pre-owned washing machines in Bangalore. 25-point tested, deep sanitized, with 6 months warranty + free doorstep delivery. Call +91 99162 07964.',
};

export default function RefurbishedWashingMachinesPage() {
  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-200 bg-gradient-to-b from-amber-50/50 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              ✨ Certified Pre-Owned Store
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-stone-900">
              Refurbished Washing Machines In <span className="text-gradient-warm">Bangalore</span>
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              Save up to 80% on certified pre-owned LG, Samsung, Whirlpool, and Bosch washing machines. Every unit includes a 25-Point quality test certificate & 6 months warranty!
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <a href="tel:+919916207964" className="btn-warm-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20buy%20a%20refurbished%20washing%20machine" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Catalog</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ApplianceCatalog />
      </section>
    </div>
  );
}
