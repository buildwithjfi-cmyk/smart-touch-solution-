import ApplianceCatalog from '@/components/ApplianceCatalog';
import { Sparkles, ShieldCheck, Truck, Phone, MessageSquare, Tag, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Certified Refurbished & New Appliance Store Bangalore | Smart Touch',
  description: 'Buy certified used & brand new washing machines, fridges & ACs in Bangalore. Save up to 80% with 25-point inspection certificate, 6 months warranty + free doorstep delivery. Call +91 99162 07964.',
};

export default function ShopPage() {
  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-200 bg-gradient-to-b from-amber-50/50 via-amber-50/20 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-amber-900 shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Certified Pre-Owned & Brand New Appliance Hub</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-tight">
              Appliance Store In <span className="text-gradient-warm">Bangalore</span>
            </h1>

            <p className="text-stone-600 text-base sm:text-xl leading-relaxed">
              Save up to 80% on certified pre-owned LG, Samsung, Whirlpool & Bosch appliances. Tested with our 25-point gold quality standard & backed by 6 months warranty!
            </p>

            {/* Quick Store Category Quick-Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2 text-xs font-bold text-stone-800">
              <Link href="/shop/refurbished-washing-machines" className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs hover:border-amber-400 transition-colors">
                <span className="block text-amber-700 text-base">🧺 Used Washers</span>
                <span>Up to 80% Off</span>
              </Link>
              <Link href="/shop/refurbished-refrigerators" className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs hover:border-amber-400 transition-colors">
                <span className="block text-amber-700 text-base">🧊 Used Fridges</span>
                <span>25-Point Tested</span>
              </Link>
              <Link href="/shop/new-appliances" className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs hover:border-sky-400 transition-colors">
                <span className="block text-sky-700 text-base">🏷️ New 2026</span>
                <span>Factory Sealed</span>
              </Link>
              <Link href="/shop/exchange" className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs hover:border-emerald-400 transition-colors">
                <span className="block text-emerald-700 text-base">♻️ Exchange</span>
                <span>Save Up to ₹6,000</span>
              </Link>
            </div>

            <div className="pt-2 flex justify-center gap-4">
              <a href="tel:+919916207964" className="btn-warm-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Hotline: +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20buy%20an%20appliance" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Catalog</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ApplianceCatalog />
      </section>
    </div>
  );
}
