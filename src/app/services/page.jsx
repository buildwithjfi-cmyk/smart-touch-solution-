import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import RepairCostEstimator from '@/components/RepairCostEstimator';

export const metadata = {
  title: 'Doorstep Appliance Repair Services Bangalore | Washing Machine, Fridge & AC Care',
  description: 'Complete range of doorstep home appliance repair services in Bangalore. Same-day repair for Washing Machines, Refrigerators, Inverter ACs, and Microwaves. Call +91 99862 07964.',
};

export default function ServicesPage() {
  const servicesList = [
    {
      title: 'LG Specialized Appliance Service',
      icon: '🏆',
      models: 'LG Direct Drive • Smart Inverter • Dual Inverter AC • NeoChef',
      desc: 'Specialized diagnostic hub for all LG home appliances. Fix OE, UE, dE, PE error codes, Direct Drive motor noise, and Inverter gas refills using 100% genuine LG parts.',
      price: 'Starting ₹299',
      warranty: 'Up to 180 Days Warranty',
      href: '/lg-service-bangalore',
      highlights: ['LG OEM Genuine Parts', 'Digital Error Code Fixes', 'Smart Inverter Gas Refilling', '60-Minute ETA Dispatch']
    },
    {
      title: 'Washing Machine Repair Service',
      icon: '🧺',
      models: 'Front Load • Top Load • Semi-Automatic',
      desc: 'Fix spinning motor failures, water leaks, drum noise, PCB electronics, and door latch locks across LG, Samsung, Whirlpool, Bosch, and IFB machines.',
      price: 'Starting ₹349',
      warranty: 'Up to 180 Days Warranty',
      href: '/services/washing-machine',
      highlights: ['Motor & Bearing Replacement', 'Water Leakage & Gasket Seal', 'PCB Circuit Board Repairs', 'Deep Drum Descaling']
    },
    {
      title: 'Fridge & Refrigerator Repair',
      icon: '🧊',
      models: 'Single Door • Frost Free • Side-by-Side Inverter',
      desc: 'Same-day repair for cooling loss, continuous running, compressor clicking, thermostat defects, and eco-friendly gas refilling.',
      price: 'Starting ₹399',
      warranty: 'Up to 1 Year Compressor Warranty',
      href: '/services/refrigerator',
      highlights: ['Inverter Compressor Overhaul', 'R600a / R134a Gas Recharge', 'Defrost Timer & Thermostat Fix', 'Door Rubber Seal Replacement']
    },
    {
      title: 'AC Service & Foam Jet Wash',
      icon: '❄️',
      models: 'Split AC • Window AC • Inverter PCB',
      desc: 'High-pressure foam jet wash, Freon gas leak soldering, inverter motherboard repair, and water dripping fixes for peak summer cooling.',
      price: 'Starting ₹599',
      warranty: '60 - 180 Days Warranty',
      href: '/services/ac-service',
      highlights: ['High-Pressure Jet Wash', 'Gas Leak Testing & Refill', 'Inverter PCB Module Repairs', 'Copper Pipe Brazing & Insulation']
    },
    {
      title: 'Microwave Oven Service',
      icon: '🍲',
      models: 'Solo • Grill • Convection Ovens',
      desc: 'Fix magnetron heating failures, touch panel button issues, internal sparks, and turntable motor problems.',
      price: 'Starting ₹299',
      warranty: '90 Days Warranty',
      href: '/services/microwave',
      highlights: ['Magnetron Heating Replacement', 'Touchpad Membrane Fix', 'Sparking Mica Sheet Replacement', 'Turntable Motor Fix']
    }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-200 bg-gradient-to-b from-sky-50 via-blue-50/30 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-900 shadow-xs">
              <Award className="w-4 h-4 text-sky-700" />
              <span>Bangalore's Premier Appliance Repair Network</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-tight">
              Doorstep Appliance <span className="text-gradient-blue">Services</span>
            </h1>

            <p className="text-stone-600 text-base sm:text-xl leading-relaxed">
              Same-day repair and servicing for Washing Machines, Refrigerators, ACs, and Microwaves across 287+ Bangalore localities with 100% genuine spare parts.
            </p>

            <div className="pt-2 flex justify-center gap-4">
              <a href="tel:+919986207964" className="btn-blue-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Hotline: +91 99862 07964</span>
              </a>
              <a href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20appliance%20service" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((item, idx) => (
            <div key={idx} className="glass-card glass-card-hover rounded-3xl p-8 border border-stone-200 bg-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="bg-sky-100 text-sky-900 border border-sky-300 font-extrabold text-xs px-3 py-1 rounded-full">
                    {item.price}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-stone-900">{item.title}</h3>
                  <span className="text-xs font-bold text-sky-700">{item.models}</span>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">Key Services Included:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {item.highlights.map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> {item.warranty}
                </span>

                <Link
                  href={item.href}
                  className="btn-blue-primary w-full sm:w-auto px-6 py-2.5 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Explore Service</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locality Coverage Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AreaCheckerWidget />
      </section>

      {/* Interactive Cost Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <RepairCostEstimator />
      </section>
    </div>
  );
}
