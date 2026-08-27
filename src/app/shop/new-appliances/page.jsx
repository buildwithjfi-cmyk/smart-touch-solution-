import ApplianceCatalog from '@/components/ApplianceCatalog';
import { Tag, ShieldCheck, Truck, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Brand New 2026 Home Appliances Bangalore | Factory Sealed Deals',
  description: 'Buy brand new 2026 LG, Samsung, Bosch & Daikin appliances in Bangalore with full manufacturer warranty and instant doorstep installation. Call +91 99162 07964.',
};

export default function NewAppliancesPage() {
  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-100 bg-gradient-to-b from-sky-50/50 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              🏷️ Brand New Factory Sealed 2026 Models
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-stone-900">
              New Home Appliances In <span className="text-gradient-blue">Bangalore</span>
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              Authorized brand new sales for LG, Samsung, Whirlpool, Bosch, and Daikin with full factory warranties, free doorstep setup, and old appliance trade-in discounts.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <a href="tel:+919916207964" className="btn-blue-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20buy%20a%20brand%20new%20appliance" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
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
