import Link from 'next/link';
import { Phone, ShieldCheck, CheckCircle2, Wrench, Clock, Award, Star, Zap, ChevronRight, HelpCircle, Truck, Sparkles, MapPin } from 'lucide-react';
import HeroImage from '@/components/HeroImage';
import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import HowWeWork from '@/components/HowWeWork';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata = {
  title: 'Smart Touch Appliances | Doorstep Appliance Repair Bangalore',
  description: 'Doorstep repair for Washing Machines, Fridges, ACs, Microwaves & Dryers in Bangalore. ₹200 inspection, estimate before work & 365 days warranty after repair. Call +91 99162 07964.',
};

export default function HomePage() {
  const mainServices = [
    {
      title: 'Washing Machine Repair',
      icon: '🧺',
      sub: 'Front Load • Top Load • Semi-Automatic',
      desc: 'Expert doorstep diagnosis for motor failure, drum noise, water leaks, and PCB circuit faults across all major brands with genuine OEM parts.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/services/washing-machine',
      highlights: ['Motor & Spinning Failure Fix', 'PCB Electronic Board Repair', 'Drum Descaling & Leak Seal']
    },
    {
      title: 'Refrigerator & Fridge Service',
      icon: '🧊',
      sub: 'Single Door • Frost Free • Side-by-Side',
      desc: 'Doorstep repair for cooling loss, compressor clicking sound, thermostat defects, and Freon gas refilling.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/services/refrigerator',
      highlights: ['Compressor Repair & Overhaul', 'Freon R600a Gas Charging', 'Defrost Timer & Sensor Fix']
    },
    {
      title: 'AC Service & Jet Wash',
      icon: '❄️',
      sub: 'Split AC • Window AC • Inverter PCB',
      desc: 'High-pressure foam jet cleaning, indoor water dripping fix, copper pipe leak soldering, and eco-friendly gas recharge for peak cooling.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/services/ac-service',
      highlights: ['Foam Jet Pressure Service', 'Gas Leakage Testing & Refill', 'Inverter PCB Board Repair']
    },
    {
      title: 'Microwave Oven Repair',
      icon: '🍲',
      sub: 'Solo • Grill • Convection Ovens',
      desc: 'Quick repair for magnetron heating issues, unresponsive touchpads, internal sparks, and turntable motor failures.',
      price: 'Inspection ₹200',
      warranty: '365 Days Warranty After Repair',
      href: '/services/microwave',
      highlights: ['Magnetron Heating Fix', 'NeoChef Touchpad Panels', 'Sparking Mica Sheet Replacement']
    }
  ];

  const applianceTiles = [
    { label: 'Washing Machine', icon: '🧺', href: '/services/washing-machine' },
    { label: 'Refrigerator', icon: '🧊', href: '/services/refrigerator' },
    { label: 'AC', icon: '❄️', href: '/services/ac-service' },
    { label: 'Microwave', icon: '🍲', href: '/services/microwave' },
    { label: 'Dryer', icon: '♨️', href: '/services/dryer' },
  ];

  const whyChooseUs = [
    { title: 'Doorstep Service', desc: 'We come to your home anywhere in Bangalore. No need to carry your appliance anywhere.' },
    { title: '365 Days Warranty', desc: 'Every repair is backed by a 365-day warranty, using original manufacturer parts.' },
    { title: 'Estimate Before Work', desc: 'Flat ₹200 inspection charge, and a clear estimate is given before we take up any work.' },
    { title: 'All Major Brands', desc: 'We repair LG, Samsung, Whirlpool, Bosch, IFB and other major brands.' }
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      {/* Hero Section matching LG Service Page UI/UX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-200 bg-sky-50 relative overflow-hidden lg:min-h-[640px] lg:flex lg:items-center">
          {/* Full-bleed background photo on desktop: public/hero.webp */}
          <HeroImage />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
            {/* Left Content: sits on a white panel over the photo on desktop */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-center lg:text-left lg:bg-white/95 lg:backdrop-blur-sm lg:rounded-2xl lg:p-8 lg:shadow-[0_12px_40px_-12px_rgba(16,34,58,0.35)]">
              <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-900 shadow-xs">
                <Award className="w-4 h-4 text-sky-700" />
                <span>Doorstep Appliance Repair in Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight">
                Appliance Repair <span className="text-amber-700">At Your Doorstep</span>
              </h1>

              <p className="text-stone-700 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Our technician comes to your home and repairs it on the spot. No need to carry it anywhere.
              </p>

              {/* Appliance tiles: 3 + 2 on phones, one row of 5 from sm */}
              <div className="max-w-2xl mx-auto lg:mx-0 space-y-2.5">
                <h2 className="text-sm font-bold text-stone-700">What needs fixing?</h2>
                <ul className="grid grid-cols-6 sm:grid-cols-5 gap-2.5">
                  {applianceTiles.map((tile, idx) => (
                    <li key={tile.href} className={idx < 3 ? 'col-span-2 sm:col-span-1' : 'col-span-3 sm:col-span-1'}>
                      <Link
                        href={tile.href}
                        className="flex flex-col items-center justify-center gap-1.5 h-full min-h-[88px] p-3 rounded-2xl bg-white border border-stone-200 shadow-xs text-stone-900 hover:border-sky-500 hover:bg-sky-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 transition-all"
                      >
                        <span className="text-3xl leading-none" aria-hidden="true">{tile.icon}</span>
                        <span className="text-sm font-bold text-center leading-tight">{tile.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing promise, one compact line */}
              <ul className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1.5 text-sm font-semibold text-stone-700">
                <li className="flex items-center gap-1.5"><span aria-hidden="true">🔍</span>₹200 inspection</li>
                <li className="flex items-center gap-1.5"><span aria-hidden="true">📝</span>Estimate before work</li>
                <li className="flex items-center gap-1.5"><span aria-hidden="true">🛡️</span>365 days warranty</li>
              </ul>

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
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <HowWeWork />
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Expert Doorstep Solutions</span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900">Doorstep Appliance Repair Services</h2>
          <p className="text-stone-700 text-sm">Our technician comes to your home and repairs the appliance there.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((item, idx) => (
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
                  <span className="text-xs font-bold text-sky-700">{item.sub}</span>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed">{item.desc}</p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">Key Repairs Included:</h4>
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

      {/* Locality Coverage Checker Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AreaCheckerWidget />
      </section>


      {/* Why Choose Smart Touch Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">Why Customers Trust Smart Touch Appliances</h2>
          <p className="text-stone-700 text-sm">Doorstep service with simple, clear pricing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 text-sky-800 flex items-center justify-center font-bold text-lg">
                {idx + 1}
              </div>
              <h3 className="text-base font-bold text-stone-900">{item.title}</h3>
              <p className="text-stone-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Call to Action Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-sky-200 bg-sky-50 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">Need Doorstep Appliance Repair?</h3>
          <p className="text-stone-700 text-sm">Call or WhatsApp us to book a technician visit at your home in Bangalore.</p>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 pt-2">
            <a
              href="tel:+919916207964"
              className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call +91 99162 07964</span>
            </a>
            <a
              href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20a%20technician"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
