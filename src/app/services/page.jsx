import Link from 'next/link';
import { Phone, ShieldCheck, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import ServicePromise from '@/components/ServicePromise';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata = {
  title: 'Doorstep Appliance Repair Services Bangalore | Washing Machine, Fridge & AC Care',
  description: 'Complete range of doorstep home appliance repair services in Bangalore. Doorstep repair for Washing Machines, Refrigerators, Inverter ACs, Microwaves, and Dryers. Call +91 99162 07964.',
};

export default function ServicesPage() {
  const servicesList = [
    {
      title: 'LG Specialized Appliance Service',
      icon: '🏆',
      models: 'LG Direct Drive • Smart Inverter • Dual Inverter AC • NeoChef',
      desc: 'Specialized diagnostic hub for all LG home appliances. Fix OE, UE, dE, PE error codes, Direct Drive motor noise, and Inverter gas refills using genuine LG parts.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/lg-service-bangalore',
      highlights: ['LG OEM Genuine Parts', 'Digital Error Code Fixes', 'Smart Inverter Gas Refilling', 'Doorstep Service']
    },
    {
      title: 'Washing Machine Repair Service',
      icon: '🧺',
      models: 'Front Load • Top Load • Semi-Automatic',
      desc: 'Fix spinning motor failures, water leaks, drum noise, PCB electronics, and door latch locks across LG, Samsung, Whirlpool, Bosch, and IFB machines.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/services/washing-machine',
      highlights: ['Motor & Bearing Replacement', 'Water Leakage & Gasket Seal', 'PCB Circuit Board Repairs', 'Deep Drum Descaling']
    },
    {
      title: 'Fridge & Refrigerator Repair',
      icon: '🧊',
      models: 'Single Door • Frost Free • Side-by-Side Inverter',
      desc: 'Doorstep repair for cooling loss, continuous running, compressor clicking, thermostat defects, and gas refilling.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/services/refrigerator',
      highlights: ['Inverter Compressor Overhaul', 'R600a / R134a Gas Recharge', 'Defrost Timer & Thermostat Fix', 'Door Rubber Seal Replacement']
    },
    {
      title: 'AC Service & Foam Jet Wash',
      icon: '❄️',
      models: 'Split AC • Window AC • Inverter PCB',
      desc: 'High-pressure foam jet wash, Freon gas leak soldering, inverter motherboard repair, and water dripping fixes for better cooling.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/services/ac-service',
      highlights: ['High-Pressure Jet Wash', 'Gas Leak Testing & Refill', 'Inverter PCB Module Repairs', 'Copper Pipe Brazing & Insulation']
    },
    {
      title: 'Microwave Oven Service',
      icon: '🍲',
      models: 'Solo • Grill • Convection Ovens',
      desc: 'Fix magnetron heating failures, touch panel button issues, internal sparks, and turntable motor problems.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/services/microwave',
      highlights: ['Magnetron Heating Replacement', 'Touchpad Membrane Fix', 'Sparking Mica Sheet Replacement', 'Turntable Motor Fix']
    },
    {
      title: 'Dryer Repair Service',
      icon: '♨️',
      models: 'Clothes Dryers • Washer Dryers',
      desc: 'Fix dryers that do not heat, drums that do not turn, loud noise, long drying times, and error codes.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/services/dryer',
      highlights: ['Heating Element & Sensor Fix', 'Drum Belt & Roller Replacement', 'Motor & Noise Repair', 'Washer Dryer Combo Repair']
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-200 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-900 shadow-xs">
              <Award className="w-4 h-4 text-sky-700" />
              <span>Doorstep Appliance Repair in Bangalore</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight">
              Doorstep Appliance <span className="text-sky-700">Services</span>
            </h1>

            <p className="text-stone-700 text-base sm:text-xl leading-relaxed">
              Doorstep repair and servicing for Washing Machines, Refrigerators, ACs, Microwaves, and Dryers across Bangalore with genuine spare parts.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Hotline: +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20appliance%20service" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
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
            <div key={idx} className="glass-card glass-card-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-200 bg-white flex flex-col justify-between space-y-6">
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

                <p className="text-stone-700 text-sm leading-relaxed">{item.desc}</p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">Key Services Included:</h4>
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

      {/* Inspection, Estimate & Warranty */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ServicePromise />
      </section>
    </div>
  );
}
