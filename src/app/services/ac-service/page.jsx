import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Wrench, Clock } from 'lucide-react';
import RepairCostEstimator from '@/components/RepairCostEstimator';

export const metadata = {
  title: 'AC Servicing & Gas Leak Refill Bangalore | Split & Window AC Repair',
  description: 'High pressure jet wash AC cleaning and Freon gas leak repair in Bangalore across 287+ areas. Certified Daikin, LG, Voltas & Samsung AC service. Call +91 99162 07964.',
};

export default function ACServicePage() {
  const issues = [
    { title: 'High-Pressure Foam Jet Service', price: '₹599 Fixed', warranty: '60 Days Warranty', desc: 'Deep indoor coil and outdoor condenser wash to restore 100% cooling.' },
    { title: 'Freon Gas Leak Testing & Refill', price: '₹1,299 - ₹1,899', warranty: '180 Days Warranty', desc: 'Nitrogen pressure testing, copper pipe brazing, and pure R32/R410 gas recharge.' },
    { title: 'Inverter PCB Board Repair', price: '₹999 - ₹1,799', warranty: '180 Days Warranty', desc: 'Outdoor communication error, sensor fault, and digital motherboard fix.' },
    { title: 'Indoor Unit Water Dripping', price: '₹399 - ₹699', warranty: '60 Days Warranty', desc: 'Drain pipe unclogging, tray cleaning, and wall insulation sealing.' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-100 bg-gradient-to-b from-sky-50/50 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              ❄️ Air Conditioner Care
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-stone-900">
              AC Repair & Jet Wash In <span className="text-gradient-blue">Bangalore</span>
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              Doorstep Split & Window AC servicing, high-pressure foam jet wash, and gas leak refilling across Bangalore within 60 minutes.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <a href="tel:+919916207964" className="btn-blue-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20AC%20servicing" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <h2 className="text-3xl font-extrabold text-stone-900 text-center">AC Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-3">
              <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
              <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-extrabold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">{item.price}</span>
                <span className="font-semibold text-emerald-700 flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" />{item.warranty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <RepairCostEstimator />
      </section>
    </div>
  );
}
