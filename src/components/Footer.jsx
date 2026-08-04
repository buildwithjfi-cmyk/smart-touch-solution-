import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Clock, MessageSquare, Wrench, ChevronRight, HeartHandshake } from 'lucide-react';

export default function Footer() {
  const popularAreas = [
    'Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout', 'Electronic City',
    'JP Nagar', 'Jayanagar', 'BTM Layout', 'Hebbal', 'Marathahalli',
    'Yelahanka', 'Sarjapur Road', 'Bellandur', 'Banashankari', 'Rajajinagar'
  ];

  return (
    <footer className="bg-stone-100 border-t border-stone-200 text-stone-600 text-sm">
      {/* Top Callout Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 py-10 px-4 sm:px-6 text-white shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-3.5 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-2">
              <HeartHandshake className="w-4 h-4" />
              <span>Bangalore's Most Trusted Appliance Partner</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Need Friendly Appliance Repairs or Certified Refurbished Sales?</h3>
            <p className="text-amber-100 mt-1 text-sm sm:text-base">Our experienced technicians arrive within 60 minutes with honest advice and upfront pricing.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+919986207964"
              className="bg-stone-900 hover:bg-stone-800 text-white font-extrabold px-6 py-3.5 rounded-full flex items-center gap-2 shadow transition-colors text-sm sm:text-base"
            >
              <Phone className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span>Call +91 99862 07964</span>
            </a>
            <a
              href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-6 py-3.5 rounded-full flex items-center gap-2 shadow transition-colors text-sm sm:text-base"
            >
              <MessageSquare className="w-5 h-5" />
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
              SMART<span className="text-gradient-warm">TOUCH</span>
            </span>
          </div>
          <p className="text-stone-600 text-sm leading-relaxed">
            Smart Touch Appliances (`www.smarttouchappliances.com`) provides warm, dependable, and affordable home appliance repair, refurbishment, and retail services across Bangalore. Certified repairs for washing machines, fridges, ACs, and microwaves with up to 6 months warranty.
          </p>

          <div className="space-y-2 pt-2 text-xs">
            <div className="flex items-center gap-2 text-stone-700">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Headquarters: 100 Feet Road, Indiranagar & Koramangala Hubs, Bangalore, KA 560038</span>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <Phone className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Direct Hotline: <strong className="text-amber-700">+91 99862 07964</strong></span>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <Mail className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Support Email: support@smarttouchappliances.com</span>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Working Hours: 24/7 Doorstep Service | Showroom: 9:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-stone-900 font-bold text-base mb-4 border-b border-stone-200 pb-2">Quick Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-600 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                <span>Home Page</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-600 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                <span>Appliance Repairs</span>
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-amber-600 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                <span>Refurbished Store</span>
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-amber-600 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                <span>New Appliance Sales</span>
              </Link>
            </li>
            <li>
              <Link href="/coverage" className="hover:text-amber-600 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                <span>287+ Service Zones</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-600 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                <span>About Our Team</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-600 transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                <span>Book Appointment</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Repair Services */}
        <div>
          <h4 className="text-stone-900 font-bold text-base mb-4 border-b border-stone-200 pb-2">Repairs Covered</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="hover:text-amber-600 transition-colors">Washing Machine Repair</li>
            <li className="hover:text-amber-600 transition-colors">Front Load & Top Load Service</li>
            <li className="hover:text-amber-600 transition-colors">Single & Double Door Fridge Repair</li>
            <li className="hover:text-amber-600 transition-colors">Side-by-Side Refrigerator Fix</li>
            <li className="hover:text-amber-600 transition-colors">Split & Window AC Servicing</li>
            <li className="hover:text-amber-600 transition-colors">AC Gas Refill & Jet Cleaning</li>
            <li className="hover:text-amber-600 transition-colors">Microwave Oven Repair</li>
            <li className="hover:text-amber-600 transition-colors">Water Purifier & Dishwasher</li>
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
          <p className="text-[11px] text-stone-500 mt-3">+ 272 more localities across Bangalore.</p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-stone-200 bg-stone-200/60 py-6 px-4 text-center text-xs text-stone-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Smart Touch Appliances (www.smarttouchappliances.com). All rights reserved.</p>
          <p className="flex items-center gap-3 text-stone-700">
            <span>Direct Hotline: <strong className="text-amber-700">+91 99862 07964</strong></span>
            <span>•</span>
            <span>Repair • Refurbish • Replace</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
