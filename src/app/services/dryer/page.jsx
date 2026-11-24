import { Phone, ShieldCheck } from 'lucide-react';
import ServicePromise from '@/components/ServicePromise';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata = {
  alternates: { canonical: '/services/dryer' },
  title: 'Dryer Repair Bangalore | Clothes Dryer & Washer Dryer Service',
  description: 'Doorstep clothes dryer and washer dryer repair in Bangalore. Fix no heat, drum not turning, long drying times and error codes. ₹200 inspection, estimate before work, 365 days warranty. Call +91 99162 07964.',
};

export default function DryerRepairPage() {
  const issues = [
    { title: 'Not Heating / Clothes Still Damp', warranty: '365 Days Warranty', desc: 'Dryer runs but clothes come out wet or take far too long to dry.' },
    { title: 'Drum Not Turning', warranty: '365 Days Warranty', desc: 'Motor hums or the drum stays still because of a worn belt, roller or motor fault.' },
    { title: 'Loud Noise & Vibration', warranty: '365 Days Warranty', desc: 'Squeaking, thumping or grinding sounds while the dryer is running.' },
    { title: 'Not Starting / Error Codes', warranty: '365 Days Warranty', desc: 'Dryer will not power on, stops mid-cycle, or shows an error code on the display.' },
    { title: 'Washer Dryer Combo Faults', warranty: '365 Days Warranty', desc: 'Washing works but the drying cycle fails on a 2-in-1 washer dryer.' }
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              ♨️ Dryer Repair
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              Dryer Repair In <span className="text-sky-700">Bangalore</span>
            </h1>
            <p className="text-stone-700 text-base sm:text-lg">
              Doorstep repair for clothes dryers and washer dryers. Our technician comes to your home and fixes it there.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20dryer%20repair" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 text-center">Dryer Repairs Covered</h2>
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
