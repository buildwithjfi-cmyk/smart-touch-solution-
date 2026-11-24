import { Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata = {
  title: 'Brand New Home Appliances Bangalore',
  description: 'Buy brand new LG, Samsung, Bosch & Daikin appliances in Bangalore with manufacturer warranty. Call +91 99162 07964.',
};

export default function NewAppliancesPage() {
  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              🏷️ Brand New Appliances
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              New Home Appliances In <span className="text-sky-700">Bangalore</span>
            </h1>
            <p className="text-stone-700 text-base sm:text-lg">
              Brand new LG, Samsung, Bosch, and Daikin appliances with manufacturer warranty. Call or WhatsApp us for models and availability.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20buy%20a%20brand%20new%20appliance" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors">
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
