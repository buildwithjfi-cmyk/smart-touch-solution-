import ApplianceCatalog from '@/components/ApplianceCatalog';
import { ShoppingBag, RefreshCw, ShieldCheck, Truck, Sparkles, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Certified Refurbished & New Appliances Store Bangalore | Smart Touch Appliances',
  description: 'Buy certified used & refurbished washing machines, refrigerators, and split ACs in Bangalore with up to 80% savings and written warranty. Call +91 99862 07964.',
};

export default function ShopPage() {
  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-stone-200 bg-gradient-to-b from-amber-50/50 to-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Certified Refurbished & Brand New Appliance Hub</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900">
              Save Up To <span className="text-gradient-warm">80%</span> On Quality Appliances
            </h1>

            <p className="text-stone-600 text-base sm:text-lg">
              Explore Bangalore's finest selection of certified pre-owned refrigerators, washing machines, and split ACs. Every refurbished unit passes our 25-point inspection and includes up to 6 months warranty + free doorstep delivery!
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-stone-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span>25-Point Quality Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-emerald-600" />
                <span>Free Bangalore Delivery & Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-orange-600" />
                <span>Old Appliance Buyback Trade-In</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filterable Appliance Store Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ApplianceCatalog />
      </section>

      {/* Exchange / Buyback Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-amber-200 flex flex-col lg:flex-row items-center justify-between gap-8 bg-amber-500 text-white">
          <div className="space-y-3 text-center lg:text-left">
            <span className="bg-stone-900 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              Trade-In Exchange Offer
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Have An Old Broken Appliance? Exchange It For Cash Discount!
            </h3>
            <p className="text-amber-100 text-sm max-w-xl">
              We evaluate your old washing machine, fridge, or AC on the spot and give you up to ₹6,000 instant trade-in discount on any new or refurbished purchase.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <a
              href="tel:+919986207964"
              className="bg-stone-900 hover:bg-stone-800 text-white font-extrabold px-8 py-4 rounded-full flex items-center justify-center gap-2 text-sm transition-colors w-full sm:w-auto shadow-md"
            >
              <Phone className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span>Call +91 99862 07964</span>
            </a>
            <a
              href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20exchange%20my%20old%20appliance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 py-4 rounded-full flex items-center justify-center gap-2 text-sm transition-colors w-full sm:w-auto shadow-md"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Get Exchange Quote</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
