import Link from 'next/link';
import { Phone, ChevronRight, Info } from 'lucide-react';
import ServicePromise from '@/components/ServicePromise';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ApplianceIcon from '@/components/ApplianceIcon';
import JsonLd from '@/components/JsonLd';

// LG appliance repair by Smart Touch Appliances, an independent repair service.
// Keep this page clearly Smart Touch branded: no LG logos, colours, phone numbers or "service centre" claims.

const appliances = [
  {
    title: 'LG Washing Machine',
    icon: 'washer',
    sub: 'Front load • Top load • Washer dryer',
    desc: 'Direct Drive motor noise, not spinning, not draining, water leaks and error codes.',
    href: '/services/washing-machine',
  },
  {
    title: 'LG Refrigerator',
    icon: 'fridge',
    sub: 'Single door • Double door • Side-by-side',
    desc: 'Not cooling, inverter compressor faults, ice build-up and gas refilling.',
    href: '/services/refrigerator',
  },
  {
    title: 'LG Air Conditioner',
    icon: 'ac',
    sub: 'Dual Inverter split • Window AC',
    desc: 'Weak cooling, water dripping, gas leaks, foam jet service and PCB faults.',
    href: '/services/ac-service',
  },
  {
    title: 'LG Microwave Oven',
    icon: 'microwave',
    sub: 'Solo • Grill • Convection',
    desc: 'Not heating, sparking inside and touchpad not responding.',
    href: '/services/microwave',
  },
  {
    title: 'LG Dryer',
    icon: 'dryer',
    sub: 'Clothes dryer • Washer dryer',
    desc: 'Clothes still damp, drum not turning and drying cycle errors.',
    href: '/services/dryer',
  },
];

// Common error codes shown on LG front load and top load washing machines
const errorCodes = [
  { code: 'OE', meaning: 'Water is not draining: blocked filter, drain hose or pump.' },
  { code: 'IE', meaning: 'Water is not filling: tap closed, low pressure or inlet valve fault.' },
  { code: 'UE', meaning: 'Load is unbalanced, or the machine is not level.' },
  { code: 'dE', meaning: 'Door is not closing or locking properly.' },
  { code: 'LE', meaning: 'Motor is locked or overloaded.' },
  { code: 'PE', meaning: 'Water level (pressure) sensor fault.' },
  { code: 'tE', meaning: 'Heater or temperature sensor fault.' },
  { code: 'FE', meaning: 'Too much water in the drum (overflow).' },
];

const faqs = [
  {
    q: 'Are you an LG authorised service centre?',
    a: 'No. Smart Touch Appliances is an independent repair service and is not affiliated with or authorised by LG Electronics. Our technicians repair LG appliances at your home with a ₹200 inspection charge, an estimate before any work, and a 365-day warranty on our repair.',
  },
  {
    q: 'My LG appliance is still under LG warranty. Should I call you?',
    a: 'If your appliance is still covered by the LG manufacturer warranty, contact LG first, because repair by an independent technician may affect that warranty. For appliances out of warranty, we can visit and repair it at your home.',
  },
  {
    q: 'Can you fix LG washing machine error codes like OE, UE or dE?',
    a: 'Yes. Our technician diagnoses the fault behind the error code at your home, gives you an estimate, and repairs it only after you approve.',
  },
  {
    q: 'How much does an LG repair cost?',
    a: 'The inspection visit is a flat ₹200. After finding the fault, the technician gives you an estimate for the repair before any work begins.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function LGServiceBangalorePage() {
  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              Independent LG Appliance Repair
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              LG Appliance Repair <span className="text-sky-700">In Bangalore</span>
            </h1>
            <p className="text-stone-700 text-base sm:text-lg">
              Our technicians repair LG washing machines, fridges, ACs, microwaves and dryers at your home.
            </p>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-sm font-semibold text-stone-700">
              <li className="flex items-center gap-1.5"><span aria-hidden="true">🔍</span>₹200 inspection</li>
              <li className="flex items-center gap-1.5"><span aria-hidden="true">📝</span>Estimate before work</li>
              <li className="flex items-center gap-1.5"><span aria-hidden="true">🛡️</span>365 days warranty</li>
            </ul>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a
                href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20my%20LG%20appliance%20repaired"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
            <p className="flex items-start justify-center gap-1.5 text-xs text-stone-600 pt-1">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Smart Touch Appliances is an independent repair service, not affiliated with or authorised by LG Electronics.</span>
            </p>
          </div>
        </div>
      </section>

      {/* LG appliances we repair */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 text-center">LG Appliances We Repair</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {appliances.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group h-full flex flex-col rounded-2xl border border-stone-200 bg-white p-4 sm:p-5 shadow-xs hover:border-sky-600 hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-14 h-14 shrink-0 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center" aria-hidden="true">
                    <ApplianceIcon name={item.icon} className="w-10 h-10" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-stone-900 leading-tight">{item.title} Repair</h3>
                    <p className="text-xs font-semibold text-sky-700 mt-0.5">{item.sub}</p>
                  </div>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mt-3">{item.desc}</p>
                <span className="mt-auto pt-4">
                  <span className="flex items-center justify-between border-t border-stone-200 pt-3 text-sm font-extrabold text-sky-700 group-hover:text-sky-800">
                    View repairs &amp; book
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* LG washing machine error codes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">LG Washing Machine Error Codes</h2>
          <p className="text-stone-700 text-sm">Seeing one of these on the display? Here is what it usually means.</p>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {errorCodes.map(({ code, meaning }) => (
            <div key={code} className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4">
              <dt className="w-12 h-12 shrink-0 rounded-lg bg-stone-900 text-amber-300 font-mono font-extrabold text-lg flex items-center justify-center">
                {code}
              </dt>
              <dd className="text-sm text-stone-700 leading-relaxed self-center">{meaning}</dd>
            </div>
          ))}
        </dl>
        <p className="text-center text-xs text-stone-600">
          Error still showing after a restart? Call us and our technician will diagnose it at your home.
        </p>
      </section>

      {/* Pricing promise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ServicePromise />
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 text-center">LG Repair Questions</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-stone-200 bg-white p-4 open:border-sky-300">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-3 font-bold text-stone-900">
                {q}
                <ChevronRight className="w-5 h-5 shrink-0 text-stone-500 transition-transform group-open:rotate-90" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-sm text-stone-700 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
