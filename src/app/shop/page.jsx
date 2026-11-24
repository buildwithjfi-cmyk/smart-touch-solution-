import { Phone } from 'lucide-react';
import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata = {
  title: 'New Appliances & Old Appliance Exchange Bangalore | Smart Touch',
  description: 'Buy brand new washing machines, fridges & ACs in Bangalore with full manufacturer warranty, or exchange your old appliance. Call +91 99162 07964.',
};

export default function ShopPage() {
  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-200 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight">
              Appliance Store In <span className="text-sky-700">Bangalore</span>
            </h1>

            <p className="text-stone-700 text-base sm:text-xl leading-relaxed">
              Brand new LG, Samsung, Bosch & Daikin appliances with full manufacturer warranty, plus easy exchange for your old appliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto pt-2 text-xs font-bold text-stone-800">
              <Link href="/shop/new-appliances" className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs hover:border-sky-400 transition-colors">
                <span className="block text-sky-700 text-base">🏷️ New Appliances</span>
                <span>Factory Sealed • Full Warranty</span>
              </Link>
              <Link href="/shop/exchange" className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs hover:border-emerald-400 transition-colors">
                <span className="block text-emerald-700 text-base">♻️ Exchange</span>
                <span>Trade In Your Old Appliance</span>
              </Link>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Hotline: +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20buy%20an%20appliance" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
