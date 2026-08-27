import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Wrench, Clock } from 'lucide-react';
import RepairCostEstimator from '@/components/RepairCostEstimator';

export const metadata = {
  title: 'Refrigerator & Fridge Repair Bangalore | Single & Double Door Service',
  description: 'Expert doorstep fridge repair in Bangalore. Cooling loss, gas refill, compressor replacement, thermostat fixes for LG, Samsung, Whirlpool & Godrej. Call +91 99162 07964.',
};

export default function RefrigeratorRepairPage() {
  const issues = [
    { title: 'Cooling Loss / Gas Leak Charging', price: '₹899 - ₹1,499', warranty: '180 Days Warranty', desc: 'Fridge running continuously but no cooling in freezer or lower section.' },
    { title: 'Compressor Repair & Overhaul', price: '₹1,499 - ₹2,999', warranty: '1 Year Warranty', desc: 'Compressor clicking sound, tripping main breaker, or complete motor burnout.' },
    { title: 'Defrost Timer & Sensor Fix', price: '₹599 - ₹999', warranty: '90 Days Warranty', desc: 'Excessive ice block formation in freezer blocking cold airflow.' },
    { title: 'Water Leakage Inside Tray', price: '₹399 - ₹699', warranty: '90 Days Warranty', desc: 'Drain line clogged causing water pool under vegetable tray.' },
    { title: 'Door Gasket Rubber Replacement', price: '₹499 - ₹799', warranty: '90 Days Warranty', desc: 'Worn out magnetic door seal letting cold air escape.' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-100 bg-gradient-to-b from-sky-50/50 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              🧊 Refrigerator Service Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-stone-900">
              Fridge & Refrigerator Repair In <span className="text-gradient-blue">Bangalore</span>
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              Doorstep repairs for Single Door, Double Door, and Side-by-Side Inverter Refrigerators. Certified technicians arrive in 60 minutes with genuine OEM compressors and gas refilling kits.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <a href="tel:+919916207964" className="btn-blue-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20refrigerator%20repair" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <h2 className="text-3xl font-extrabold text-stone-900 text-center">Refrigerator Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
