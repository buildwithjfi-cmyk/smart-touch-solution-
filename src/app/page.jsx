import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Wrench, Clock, Award, Star, Zap, ChevronRight, HelpCircle, Truck, Sparkles, MapPin } from 'lucide-react';
import HeroAnimation from '@/components/HeroAnimation';
import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import RepairCostEstimator from '@/components/RepairCostEstimator';
import ApplianceCatalog from '@/components/ApplianceCatalog';

export const metadata = {
  title: 'Smart Touch Appliances | Doorstep Appliance Repair & Refurbished Store Bangalore',
  description: 'Bangalore\'s #1 Doorstep Appliance Repair & Certified Refurbished Appliance Store. 60-min arrival for Washing Machines, Fridges & ACs. Call +91 99162 07964.',
};

export default function HomePage() {
  const mainServices = [
    {
      title: 'Washing Machine Repair',
      icon: '🧺',
      sub: 'Front Load • Top Load • Semi-Automatic',
      desc: 'Expert doorstep diagnosis for motor failure, drum noise, water leaks, and PCB circuit faults across all major brands with genuine OEM parts.',
      price: 'Starting ₹349',
      warranty: 'Up to 180 Days Warranty',
      href: '/services/washing-machine',
      highlights: ['Motor & Spinning Failure Fix', 'PCB Electronic Board Repair', 'Drum Descaling & Leak Seal']
    },
    {
      title: 'Refrigerator & Fridge Service',
      icon: '🧊',
      sub: 'Single Door • Frost Free • Side-by-Side',
      desc: 'Same-day repair for cooling loss, compressor clicking sound, thermostat defects, and Freon gas refilling with 1-year compressor warranty.',
      price: 'Starting ₹399',
      warranty: 'Up to 1 Year Warranty',
      href: '/services/refrigerator',
      highlights: ['Compressor Repair & Overhaul', 'Freon R600a Gas Charging', 'Defrost Timer & Sensor Fix']
    },
    {
      title: 'AC Service & Jet Wash',
      icon: '❄️',
      sub: 'Split AC • Window AC • Inverter PCB',
      desc: 'High-pressure foam jet cleaning, indoor water dripping fix, copper pipe leak soldering, and eco-friendly gas recharge for peak cooling.',
      price: 'Starting ₹599',
      warranty: '60 - 180 Days Warranty',
      href: '/services/ac-service',
      highlights: ['Foam Jet Pressure Service', 'Gas Leakage Testing & Refill', 'Inverter PCB Board Repair']
    },
    {
      title: 'Microwave Oven Repair',
      icon: '🍲',
      sub: 'Solo • Grill • Convection Ovens',
      desc: 'Quick repair for magnetron heating issues, unresponsive touchpads, internal sparks, and turntable motor failures.',
      price: 'Starting ₹299',
      warranty: '90 Days Warranty',
      href: '/services/microwave',
      highlights: ['Magnetron Heating Fix', 'NeoChef Touchpad Panels', 'Sparking Mica Sheet Replacement']
    }
  ];

  const whyChooseUs = [
    { title: '60-Minute ETA', desc: 'Local technician hubs stationed in 287+ Bangalore localities for rapid response.' },
    { title: '100% OEM Parts', desc: 'Directly sourced original manufacturer parts with written replacement warranty.' },
    { title: 'Fixed Transparent Rates', desc: 'Upfront quotes provided before work starts with zero hidden diagnostic charges.' },
    { title: 'Certified Engineers', desc: 'Background-verified technicians with 10+ years experience in multi-brand repairs.' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Hero Section matching LG Service Page UI/UX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-200 bg-gradient-to-b from-sky-50 via-blue-50/30 to-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-900 shadow-xs">
                <Award className="w-4 h-4 text-sky-700" />
                <span>Bangalore's #1 Doorstep Appliance Service & Refurbished Store</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-tight">
                Smart Touch <span className="text-gradient-blue">Appliances</span>
              </h1>

              <p className="text-stone-600 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Expert doorstep repair for Washing Machines, Refrigerators, ACs, and Microwaves across 287+ Bangalore localities with 100% genuine parts & 180 days warranty.
              </p>

              {/* 4 Quick Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 pt-1 text-xs font-bold text-stone-800">
                <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs text-center">
                  <span className="block text-sky-700 text-base">⚡ 60 Mins</span>
                  <span>Doorstep ETA</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs text-center">
                  <span className="block text-amber-600 text-base">🛡️ 180 Days</span>
                  <span>Written Warranty</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs text-center">
                  <span className="block text-emerald-700 text-base">🔧 100% OEM</span>
                  <span>Genuine Parts</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs text-center">
                  <span className="block text-sky-700 text-base">⭐ 4.9 / 5</span>
                  <span>25k+ Happy Clients</span>
                </div>
              </div>

              {/* Primary Call to Actions */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="tel:+919916207964"
                  className="btn-blue-primary w-full sm:w-auto px-8 py-4 text-base font-extrabold flex items-center justify-center gap-3 shadow-md"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>Call Hotline: +91 99162 07964</span>
                </a>

                <a
                  href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20doorstep%20appliance%20repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 py-4 rounded-full flex items-center justify-center gap-3 text-base shadow-md transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Animation */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Expert Doorstep Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900">Appliance Repair Services</h2>
          <p className="text-stone-600 text-sm">Certified engineers dispatched to your doorstep within 60 minutes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((item, idx) => (
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
                  <span className="text-xs font-bold text-sky-700">{item.sub}</span>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">Key Repairs Included:</h4>
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
                  <span>Book Service</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certified Refurbished Appliance Store Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ApplianceCatalog />
      </section>

      {/* Locality Coverage Checker Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AreaCheckerWidget />
      </section>

      {/* Interactive Repair Cost Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <RepairCostEstimator />
      </section>

      {/* Why Choose Smart Touch Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-stone-900">Why Customers Trust Smart Touch Appliances</h2>
          <p className="text-stone-600 text-sm">Professionalism, speed, and transparent pricing guaranteed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 text-sky-800 flex items-center justify-center font-bold text-lg">
                {idx + 1}
              </div>
              <h3 className="text-base font-bold text-stone-900">{item.title}</h3>
              <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Call to Action Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-sky-200 bg-gradient-to-b from-sky-50 to-white space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">Need Same-Day Doorstep Appliance Repair?</h3>
          <p className="text-stone-600 text-sm">Our certified technicians are ready to visit your home in Bangalore within 60 minutes.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a
              href="tel:+919916207964"
              className="btn-blue-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call +91 99162 07964</span>
            </a>
            <a
              href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20a%20technician"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 py-3.5 rounded-full flex items-center gap-2 text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
