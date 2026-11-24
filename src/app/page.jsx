import Link from 'next/link';
import { Phone, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import HeroImage from '@/components/HeroImage';
import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import HowWeWork from '@/components/HowWeWork';
import BrandLogos from '@/components/BrandLogos';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  alternates: { canonical: '/' },
  title: 'Smart Touch Appliances | Doorstep Appliance Repair Bangalore',
  description: 'Doorstep repair for Washing Machines, Fridges, ACs, Microwaves & Dryers in Bangalore. ₹200 inspection, estimate before work & 365 days warranty after repair. Call +91 99162 07964.',
};

const SITE = 'https://www.smarttouchappliances.com';

// Tells Google who we are, what we fix and where. Keep in sync with the visible page.
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE}/#business`,
  name: 'Smart Touch Appliances',
  url: SITE,
  logo: `${SITE}/logo.png`,
  image: `${SITE}/hero.webp`,
  telephone: '+91-99162-07964',
  priceRange: '₹₹',
  description: 'Doorstep repair for washing machines, refrigerators, ACs, microwaves and dryers across Bangalore. ₹200 inspection, estimate before work and 365 days warranty after repair.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: { '@type': 'City', name: 'Bengaluru' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Doorstep Appliance Repair',
    itemListElement: [
      ['Washing Machine Repair', '/services/washing-machine'],
      ['Refrigerator Repair', '/services/refrigerator'],
      ['AC Service & Repair', '/services/ac-service'],
      ['Microwave Oven Repair', '/services/microwave'],
      ['Dryer Repair', '/services/dryer'],
    ].map(([name, path]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, url: `${SITE}${path}`, areaServed: 'Bengaluru' },
    })),
  },
};

export default function HomePage() {
  const mainServices = [
    {
      title: 'Washing Machine',
      icon: '🧺',
      sub: 'Front load • Top load • Semi-automatic',
      desc: 'Not spinning, leaking, noisy drum or a dead control board? We fix it at your home.',
      href: '/services/washing-machine',
      highlights: ['Motor & spin', 'PCB board', 'Leaks & noise'],
    },
    {
      title: 'Refrigerator',
      icon: '🧊',
      sub: 'Single door • Double door • Side-by-side',
      desc: 'Not cooling, compressor clicking or ice build-up. Repaired on the spot.',
      href: '/services/refrigerator',
      highlights: ['Not cooling', 'Gas refill', 'Compressor'],
    },
    {
      title: 'Air Conditioner',
      icon: '❄️',
      sub: 'Split AC • Window AC • Inverter',
      desc: 'Weak cooling, water dripping or gas leaks. Foam jet service and repairs.',
      href: '/services/ac-service',
      highlights: ['Jet service', 'Gas leak & refill', 'Inverter PCB'],
    },
    {
      title: 'Microwave Oven',
      icon: '🍲',
      sub: 'Solo • Grill • Convection',
      desc: 'Not heating, sparking inside or touchpad not responding.',
      href: '/services/microwave',
      highlights: ['Not heating', 'Sparking', 'Touchpad'],
    },
    {
      title: 'Dryer',
      icon: '♨️',
      sub: 'Clothes dryer • Washer dryer',
      desc: 'Clothes still damp, drum not turning or error codes on the display.',
      href: '/services/dryer',
      highlights: ['No heat', 'Drum & belt', 'Error codes'],
    },
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
      <JsonLd data={businessSchema} />

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

      {/* Main Services Grid: one tappable card per appliance, single column on phones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Expert Doorstep Solutions</span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900">Doorstep Appliance Repair Services</h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {mainServices.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group h-full flex flex-col rounded-2xl border border-stone-200 bg-white p-4 sm:p-5 shadow-xs hover:border-sky-600 hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-14 h-14 shrink-0 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-stone-900 leading-tight">{item.title} Repair</h3>
                    <p className="text-xs font-semibold text-sky-700 mt-0.5">{item.sub}</p>
                  </div>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed mt-3">{item.desc}</p>

                <ul className="flex flex-wrap gap-1.5 mt-3" aria-label="Common repairs">
                  {item.highlights.map((feat) => (
                    <li key={feat} className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto pt-4">
                  <span className="flex items-center justify-between border-t border-stone-200 pt-3 text-sm font-extrabold text-sky-700 group-hover:text-sky-800">
                    View repairs &amp; book
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </li>
          ))}

          {/* Catch-all card: fills the empty slot in the 3-column grid */}
          <li className="rounded-2xl border border-sky-200 bg-sky-50 p-4 sm:p-5 flex flex-col">
            <h3 className="text-lg font-bold text-stone-900 leading-tight">Not sure what&apos;s wrong?</h3>
            <p className="text-stone-700 text-sm leading-relaxed mt-2">
              Tell us the appliance and the problem. We&apos;ll send a technician to check it at your home.
            </p>
            <div className="mt-auto pt-4 grid grid-cols-2 gap-2">
              <a
                href="tel:+919916207964"
                className="btn-blue-primary px-3 py-3 text-sm font-extrabold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" aria-hidden="true" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20an%20appliance%20repaired"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-3 py-3 rounded-full text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </li>
        </ul>
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
