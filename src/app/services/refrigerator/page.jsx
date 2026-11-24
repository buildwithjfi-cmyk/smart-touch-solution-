import Link from 'next/link';
import { Phone, ShieldCheck, CheckCircle2, Wrench, Clock } from 'lucide-react';
import ServicePromise from '@/components/ServicePromise';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ApplianceIcon from '@/components/ApplianceIcon';

export const metadata = {
  alternates: { canonical: '/services/refrigerator' },
  title: 'Refrigerator & Fridge Repair Bangalore | Single & Double Door Service',
  description: 'Expert doorstep fridge repair in Bangalore. Cooling loss, gas refill, compressor replacement, thermostat fixes for LG, Samsung, Panasonic & Hitachi. Call +91 99162 07964.',
};

export default function RefrigeratorRepairPage() {
  const issues = [
    { title: 'Cooling Loss / Gas Leak Charging', warranty: '365 Days Warranty', desc: 'Fridge running continuously but no cooling in freezer or lower section.' },
    { title: 'Compressor Repair & Overhaul', warranty: '365 Days Warranty', desc: 'Compressor clicking sound, tripping main breaker, or complete motor burnout.' },
    { title: 'Defrost Timer & Sensor Fix', warranty: '365 Days Warranty', desc: 'Excessive ice block formation in freezer blocking cold airflow.' },
    { title: 'Water Leakage Inside Tray', warranty: '365 Days Warranty', desc: 'Drain line clogged causing water pool under vegetable tray.' },
    { title: 'Door Gasket Rubber Replacement', warranty: '365 Days Warranty', desc: 'Worn out magnetic door seal letting cold air escape.' }
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <ApplianceIcon name="fridge" className="w-5 h-5 shrink-0" />
              Refrigerator Service Hub
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              Fridge & Refrigerator Repair In <span className="text-sky-700">Bangalore</span>
            </h1>
            <p className="text-stone-700 text-base sm:text-lg">
              Doorstep repairs for Single Door, Double Door, and Side-by-Side Inverter Refrigerators. Our technician comes to your home with genuine spare parts and gas refilling kits.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20refrigerator%20repair" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 text-center">Refrigerator Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-3">
              <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
              <p className="text-stone-700 text-sm leading-relaxed">{item.desc}</p>
              <div className="pt-2 flex items-center text-xs">
                <span className="font-semibold text-emerald-700 flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" />{item.warranty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ServicePromise />
      </section>
    </div>
  );
}
