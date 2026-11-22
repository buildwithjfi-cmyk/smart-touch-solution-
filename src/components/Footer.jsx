import Link from 'next/link';
import { Phone, MapPin, ShieldCheck, Clock, Wrench, ChevronRight, HeartHandshake } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Footer() {
  const popularAreas = [
    'Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout', 'Electronic City',
    'JP Nagar', 'Jayanagar', 'BTM Layout', 'Hebbal', 'Marathahalli',
    'Yelahanka', 'Sarjapur Road', 'Bellandur', 'Banashankari', 'Rajajinagar'
  ];

  return (
    <footer className="bg-stone-100 border-t border-stone-200 text-stone-700 text-sm">
      {/* Top Callout Banner */}
      <div className="bg-amber-700 py-8 sm:py-10 px-4 sm:px-6 text-white shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-3.5 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-2">
              <HeartHandshake className="w-4 h-4" />
              <span>Doorstep Appliance Repair in Bangalore</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Doorstep Appliance Repair, Right at Your Home</h3>
            <p className="text-white mt-1 text-sm sm:text-base">₹200 inspection charge • Estimate given before any work • 365 days warranty after repair.</p>
          </div>

          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
            <a
              href="tel:+919916207964"
              className="bg-stone-900 hover:bg-stone-800 text-white font-extrabold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow transition-colors text-sm sm:text-base"
            >
              <Phone className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span>Call +91 99162 07964</span>
            </a>
            <a
              href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow transition-colors text-sm sm:text-base"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Summary */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs border border-amber-200 overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Smart Touch Appliances Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-black text-stone-900">
              SMART<span className="text-amber-700">TOUCH</span>
            </span>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed">
            Smart Touch Appliances (`www.smarttouchappliances.com`) provides doorstep home appliance repair across Bangalore for washing machines, fridges, ACs, microwaves, and dryers with a ₹200 inspection charge, an estimate before any work, and 365 days warranty after repair.
          </p>

          <div className="space-y-2 pt-2 text-xs">
            <div className="flex items-center gap-2 text-stone-700">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Doorstep Service at Your Home Across Bangalore</span>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <Phone className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Direct Hotline: <strong className="text-amber-700">+91 99162 07964</strong></span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-stone-900 font-bold text-base mb-4 border-b border-stone-200 pb-2">Quick Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-700" />
                <span>Home Page</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-700" />
                <span>Appliance Repairs</span>
              </Link>
            </li>
            <li>
              <Link href="/shop/new-appliances" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-700" />
                <span>New Appliance Sales</span>
              </Link>
            </li>
            <li>
              <Link href="/coverage" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-700" />
                <span>Areas We Serve</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-700" />
                <span>About Our Team</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-700" />
                <span>Book Appointment</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Repair Services */}
        <div>
          <h4 className="text-stone-900 font-bold text-base mb-4 border-b border-stone-200 pb-2">Repairs Covered</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="hover:text-amber-700 transition-colors">Washing Machine Repair</li>
            <li className="hover:text-amber-700 transition-colors">Front Load & Top Load Service</li>
            <li className="hover:text-amber-700 transition-colors">Single & Double Door Fridge Repair</li>
            <li className="hover:text-amber-700 transition-colors">Side-by-Side Refrigerator Fix</li>
            <li className="hover:text-amber-700 transition-colors">Split & Window AC Servicing</li>
            <li className="hover:text-amber-700 transition-colors">AC Gas Refill & Jet Cleaning</li>
            <li className="hover:text-amber-700 transition-colors">Microwave Oven Repair</li>
            <li className="hover:text-amber-700 transition-colors">Dryer & Washer Dryer Repair</li>
            <li className="hover:text-amber-700 transition-colors">Water Purifier & Dishwasher</li>
          </ul>
        </div>

        {/* Popular Service Areas */}
        <div>
          <h4 className="text-stone-900 font-bold text-base mb-4 border-b border-stone-200 pb-2">Top Service Zones</h4>
          <div className="flex flex-wrap gap-1.5 text-xs">
            {popularAreas.map((area) => (
              <Link
                key={area}
                href="/coverage"
                className="bg-white hover:bg-amber-50 border border-stone-200 hover:border-amber-300 px-2 py-1 rounded text-stone-700 hover:text-amber-800 transition-all shadow-xs"
              >
                {area}
              </Link>
            ))}
          </div>
          <p className="text-[11px] text-stone-600 mt-3">and other areas across Bangalore.</p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-stone-200 bg-stone-200/60 pt-6 pb-24 sm:pb-6 px-4 text-center text-xs text-stone-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Smart Touch Appliances (www.smarttouchappliances.com). All rights reserved.</p>
          <p className="flex items-center gap-3 text-stone-700">
            <span>Direct Hotline: <strong className="text-amber-700">+91 99162 07964</strong></span>
            <span>•</span>
            <span>Doorstep Service • Inspect • Estimate • Repair</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
