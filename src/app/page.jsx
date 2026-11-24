import Link from 'next/link';
import { Phone, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import HeroImage from '@/components/HeroImage';
import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import HowWeWork from '@/components/HowWeWork';
import BrandLogos from '@/components/BrandLogos';
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
      href: '/services/washing-machine',
      highlights: ['Motor & Spinning Failure Fix', 'PCB Electronic Board Repair', 'Drum Descaling & Leak Seal']
    },
    {
      title: 'Refrigerator & Fridge Service',
      icon: '🧊',
      sub: 'Single Door • Frost Free • Side-by-Side',
      desc: 'Doorstep repair for cooling loss, compressor clicking sound, thermostat defects, and Freon gas refilling.',
      href: '/services/refrigerator',
      highlights: ['Compressor Repair & Overhaul', 'Freon R600a Gas Charging', 'Defrost Timer & Sensor Fix']
    },
    {
      title: 'AC Service & Jet Wash',
      icon: '❄️',
      sub: 'Split AC • Window AC • Inverter PCB',
      desc: 'High-pressure foam jet cleaning, indoor water dripping fix, copper pipe leak soldering, and eco-friendly gas recharge for peak cooling.',
      href: '/services/ac-service',
      highlights: ['Foam Jet Pressure Service', 'Gas Leakage Testing & Refill', 'Inverter PCB Board Repair']
    },
    {
      title: 'Microwave Oven Repair',
      icon: '🍲',
      sub: 'Solo • Grill • Convection Ovens',
      desc: 'Quick repair for magnetron heating issues, unresponsive touchpads, internal sparks, and turntable motor failures.',
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


  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      {/* Hero Section */}
      <section data-track="hero" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:px-12 lg:py-10 border border-sky-200 bg-sky-50 relative overflow-hidden lg:flex lg:items-center">
          {/* Full-bleed background photo on desktop: public/hero.webp */}
          <HeroImage />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
            {/* Left Content: placed directly on the plain wall area of the photo on desktop */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 lg:space-y-4 text-center lg:text-left">
              <div className="inline-flex lg:hidden items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-900 shadow-xs">
                <Award className="w-4 h-4 text-sky-700" />
                <span>Doorstep Appliance Repair in Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
                Appliance Repair <span className="text-amber-700 lg:text-amber-800">At Your Doorstep</span>
              </h1>

              <p className="text-stone-700 lg:text-stone-800 lg:font-medium text-base sm:text-xl lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Our technician comes to your home and repairs it on the spot. No need to carry it anywhere.
              </p>

              {/* Appliance tiles: 3 + 2 on phones, one row of 5 from sm */}
              <div className="max-w-2xl mx-auto lg:mx-0 space-y-2.5">
                <h2 className="text-sm font-bold text-stone-700 lg:text-stone-900">What needs fixing?</h2>
                <ul className="grid grid-cols-6 sm:grid-cols-5 gap-2.5">
                  {applianceTiles.map((tile, idx) => (
                    <li key={tile.href} className={idx < 3 ? 'col-span-2 sm:col-span-1' : 'col-span-3 sm:col-span-1'}>
                      <Link
                        href={tile.href}
                        className="flex flex-col items-center justify-center gap-1.5 h-full min-h-[88px] lg:min-h-[72px] p-3 lg:p-2 rounded-2xl bg-white border border-stone-200 shadow-xs lg:shadow-md text-stone-900 hover:border-sky-500 hover:bg-sky-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 transition-all"
                      >
                        <span className="text-3xl lg:text-2xl leading-none" aria-hidden="true">{tile.icon}</span>
                        <span className="text-sm lg:text-[13px] font-bold text-center leading-tight">{tile.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing promise, one compact line */}
              <ul className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1.5 text-sm font-semibold lg:font-bold text-stone-700 lg:text-stone-900">
                <li className="flex items-center gap-1.5"><span aria-hidden="true">🔍</span>₹200 inspection</li>
                <li className="flex items-center gap-1.5"><span aria-hidden="true">📝</span>Estimate before work</li>
                <li className="flex items-center gap-1.5"><span aria-hidden="true">🛡️</span>365 days warranty</li>
              </ul>

              {/* Primary Call to Actions */}
              <div className="pt-3 lg:pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="tel:+919916207964"
                  className="btn-blue-primary w-full sm:w-auto px-8 py-4 lg:py-3.5 text-base font-extrabold flex items-center justify-center gap-3 shadow-md"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>Call Hotline: +91 99162 07964</span>
                </a>

                <a
                  href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20doorstep%20appliance%20repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 py-4 lg:py-3.5 rounded-full flex items-center justify-center gap-3 text-base shadow-md transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands we repair: logo ticker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <BrandLogos />
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Expert Doorstep Solutions</span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900">Doorstep Appliance Repair Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((item, idx) => (
            <div key={idx} className="glass-card glass-card-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-200 bg-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-4xl block">{item.icon}</span>

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

              <div className="pt-4 border-t border-stone-200 flex justify-end">
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

      {/* How We Work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <HowWeWork />
      </section>

      {/* Locality Coverage Checker Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AreaCheckerWidget />
      </section>
    </div>
  );
}
