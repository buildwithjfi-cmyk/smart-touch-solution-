"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Wrench, Menu, X, ChevronDown, ShieldCheck, Sparkles, MapPin, Tag, HelpCircle, HeartHandshake, Award } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner with Trust Blue Gradient */}
      <div className="bg-gradient-to-r from-sky-800 via-blue-700 to-amber-600 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-100"></span>
            </span>
            <span className="bg-sky-900/60 text-sky-100 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider border border-sky-400/30">
              Bangalore Doorstep Service
            </span>
            <span>Friendly & Reliable Appliance Care within 60 Mins</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href="tel:+919986207964" 
              className="flex items-center gap-1.5 hover:underline bg-black/20 px-3 py-1 rounded-full border border-white/20 transition-all hover:bg-black/30"
            >
              <Phone className="w-3.5 h-3.5 text-sky-200" />
              <span>Call Hotline: +91 99862 07964</span>
            </a>
            <a 
              href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20a%20service%20booking" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 hover:underline bg-emerald-700 px-3 py-1 rounded-full border border-emerald-500/40 transition-all hover:bg-emerald-800"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-100" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-nav py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Generated Image */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs border border-sky-200 overflow-hidden group-hover:scale-105 transition-transform">
              <img 
                src="/logo.png" 
                alt="Smart Touch Appliances Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 flex items-center gap-1">
                SMART<span className="text-gradient-blue">TOUCH</span>
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-sky-700 -mt-1">
                Appliances • Bangalore
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Dropdown Sub-Menus */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-stone-700">
            <Link href="/" className="hover:text-sky-600 transition-colors py-2">
              Home
            </Link>

            {/* Services & Repairs Dropdown */}
            <div className="relative group py-2">
              <Link href="/services" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <span>Services & Repairs</span>
                <ChevronDown className="w-4 h-4 text-stone-400 group-hover:rotate-180 transition-transform" />
              </Link>

              <div className="absolute top-full left-0 w-72 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-1">
                <Link href="/lg-service-bangalore" className="flex items-center gap-2.5 p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 transition-colors text-xs font-bold border border-sky-200">
                  <Award className="w-4 h-4 text-sky-700 shrink-0" />
                  <div>
                    <span className="block text-sky-900">LG Service Bangalore</span>
                    <span className="text-[10px] font-semibold text-sky-700">Specialized LG Repairs • All Error Codes</span>
                  </div>
                </Link>
                <Link href="/services/washing-machine" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <span className="text-base">🧺</span>
                  <div>
                    <span className="block">Washing Machine Repair</span>
                    <span className="text-[10px] font-medium text-stone-500">Front & Top Load • Motors & PCB</span>
                  </div>
                </Link>
                <Link href="/services/refrigerator" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <span className="text-base">🧊</span>
                  <div>
                    <span className="block">Refrigerator Repair</span>
                    <span className="text-[10px] font-medium text-stone-500">Cooling Loss • Gas Charging</span>
                  </div>
                </Link>
                <Link href="/services/ac-service" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <span className="text-base">❄️</span>
                  <div>
                    <span className="block">AC Service & Jet Wash</span>
                    <span className="text-[10px] font-medium text-stone-500">High-Pressure Jet • Freon Gas</span>
                  </div>
                </Link>
                <Link href="/services/microwave" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <span className="text-base">🍲</span>
                  <div>
                    <span className="block">Microwave Oven Repair</span>
                    <span className="text-[10px] font-medium text-stone-500">Magnetron • Touchpad Panels</span>
                  </div>
                </Link>
                <div className="pt-1 border-t border-stone-100">
                  <Link href="/services" className="block text-center text-xs font-bold text-sky-700 hover:underline p-1.5">
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Appliance Store Dropdown */}
            <div className="relative group py-2">
              <Link href="/shop" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <span>Appliance Store</span>
                <span className="bg-amber-100 text-amber-900 text-[10px] px-2 py-0.5 rounded-full font-extrabold border border-amber-200">Refurbished & New</span>
                <ChevronDown className="w-4 h-4 text-stone-400 group-hover:rotate-180 transition-transform" />
              </Link>

              <div className="absolute top-full left-0 w-72 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-1">
                <Link href="/shop/refurbished-washing-machines" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-amber-50 hover:text-amber-900 transition-colors text-xs font-bold text-stone-800">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <span className="block">Refurbished Washing Machines</span>
                    <span className="text-[10px] font-medium text-stone-500">Up to 80% Off • 6 Mo Warranty</span>
                  </div>
                </Link>
                <Link href="/shop/refurbished-refrigerators" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-amber-50 hover:text-amber-900 transition-colors text-xs font-bold text-stone-800">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <span className="block">Refurbished Refrigerators</span>
                    <span className="text-[10px] font-medium text-stone-500">25-Point Checked • Like New</span>
                  </div>
                </Link>
                <Link href="/shop/new-appliances" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <Tag className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="block">Brand New 2026 Models</span>
                    <span className="text-[10px] font-medium text-stone-500">Factory Sealed • Full Warranty</span>
                  </div>
                </Link>
                <Link href="/shop/exchange" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-colors text-xs font-bold text-stone-800">
                  <span className="text-base">♻️</span>
                  <div>
                    <span className="block">Old Appliance Exchange</span>
                    <span className="text-[10px] font-medium text-stone-500">Up to ₹6,000 Cash Discount</span>
                  </div>
                </Link>
                <div className="pt-1 border-t border-stone-100">
                  <Link href="/shop" className="block text-center text-xs font-bold text-amber-700 hover:underline p-1.5">
                    Browse Store Catalog →
                  </Link>
                </div>
              </div>
            </div>

            {/* Areas Covered Dropdown */}
            <div className="relative group py-2">
              <Link href="/coverage" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <span>Areas Covered</span>
                <ChevronDown className="w-4 h-4 text-stone-400 group-hover:rotate-180 transition-transform" />
              </Link>

              <div className="absolute top-full left-0 w-64 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-1">
                <Link href="/coverage/east-bangalore" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>East Bangalore & IT Corridor</span>
                </Link>
                <Link href="/coverage/south-bangalore" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>South Bangalore Hubs</span>
                </Link>
                <Link href="/coverage/north-bangalore" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>North & Airport Zone</span>
                </Link>
                <Link href="/coverage/west-bangalore" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>West & Central Zone</span>
                </Link>
                <div className="pt-1 border-t border-stone-100">
                  <Link href="/coverage" className="block text-center text-xs font-bold text-sky-700 hover:underline p-1.5">
                    View All 287+ Localities →
                  </Link>
                </div>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group py-2">
              <Link href="/about" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 text-stone-400 group-hover:rotate-180 transition-transform" />
              </Link>

              <div className="absolute top-full left-0 w-60 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-1">
                <Link href="/about" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Company Mission & Story</span>
                </Link>
                <Link href="/about/quality-inspection" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>25-Point Inspection Standard</span>
                </Link>
                <Link href="/about/pricing-policy" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <HeartHandshake className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Transparent Upfront Pricing</span>
                </Link>
              </div>
            </div>

            {/* Contact Dropdown */}
            <div className="relative group py-2">
              <Link href="/contact" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <span>Contact</span>
                <ChevronDown className="w-4 h-4 text-stone-400 group-hover:rotate-180 transition-transform" />
              </Link>

              <div className="absolute top-full left-0 w-60 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-1">
                <Link href="/contact/book-technician" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <Wrench className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Book Doorstep Technician</span>
                </Link>
                <Link href="/contact/faq" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Customer FAQ & Help Desk</span>
                </Link>
                <Link href="/contact" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Contact Showrooms & Hubs</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Call-to-action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919986207964"
              className="btn-blue-primary px-5 py-2.5 text-xs sm:text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>+91 99862 07964</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-stone-100 border border-stone-200 text-stone-700 hover:text-stone-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-stone-200 flex flex-col gap-1.5 px-2">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg text-sm"
            >
              Home
            </Link>

            {/* Mobile Services Sub-Menu */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('services')}
                className="w-full flex items-center justify-between text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg text-sm"
              >
                <span>Services & Repairs</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileDropdown === 'services' && (
                <div className="pl-4 pr-2 py-1 space-y-1 text-xs font-semibold bg-stone-50 rounded-lg">
                  <Link href="/lg-service-bangalore" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-sky-900 font-extrabold">LG Service Bangalore</Link>
                  <Link href="/services/washing-machine" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700 hover:text-sky-700">Washing Machine Repair</Link>
                  <Link href="/services/refrigerator" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700 hover:text-sky-700">Refrigerator Repair</Link>
                  <Link href="/services/ac-service" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700 hover:text-sky-700">AC Service & Jet Wash</Link>
                  <Link href="/services/microwave" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700 hover:text-sky-700">Microwave Repair</Link>
                </div>
              )}
            </div>

            {/* Mobile Store Sub-Menu */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('shop')}
                className="w-full flex items-center justify-between text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg text-sm"
              >
                <span>Appliance Store</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'shop' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileDropdown === 'shop' && (
                <div className="pl-4 pr-2 py-1 space-y-1 text-xs font-semibold bg-stone-50 rounded-lg">
                  <Link href="/shop/refurbished-washing-machines" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-amber-800">Refurbished Washing Machines</Link>
                  <Link href="/shop/refurbished-refrigerators" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-amber-800">Refurbished Refrigerators</Link>
                  <Link href="/shop/new-appliances" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-sky-800">Brand New 2026 Models</Link>
                  <Link href="/shop/exchange" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-emerald-800">Old Appliance Exchange</Link>
                </div>
              )}
            </div>

            {/* Mobile Coverage Sub-Menu */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('coverage')}
                className="w-full flex items-center justify-between text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg text-sm"
              >
                <span>Areas Covered</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'coverage' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileDropdown === 'coverage' && (
                <div className="pl-4 pr-2 py-1 space-y-1 text-xs font-semibold bg-stone-50 rounded-lg">
                  <Link href="/coverage/east-bangalore" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700">East Bangalore & IT Corridor</Link>
                  <Link href="/coverage/south-bangalore" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700">South Bangalore Hubs</Link>
                  <Link href="/coverage/north-bangalore" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700">North & Airport Zone</Link>
                  <Link href="/coverage/west-bangalore" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700">West & Central Zone</Link>
                </div>
              )}
            </div>

            {/* Mobile About Sub-Menu */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('about')}
                className="w-full flex items-center justify-between text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg text-sm"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileDropdown === 'about' && (
                <div className="pl-4 pr-2 py-1 space-y-1 text-xs font-semibold bg-stone-50 rounded-lg">
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700">Company Mission & Story</Link>
                  <Link href="/about/quality-inspection" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700">25-Point Inspection Standard</Link>
                  <Link href="/about/pricing-policy" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700">Transparent Pricing</Link>
                </div>
              )}
            </div>

            {/* Mobile Contact Sub-Menu */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('contact')}
                className="w-full flex items-center justify-between text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg text-sm"
              >
                <span>Contact</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileDropdown === 'contact' && (
                <div className="pl-4 pr-2 py-1 space-y-1 text-xs font-semibold bg-stone-50 rounded-lg">
                  <Link href="/contact/book-technician" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700">Book Doorstep Technician</Link>
                  <Link href="/contact/faq" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-stone-700">Customer FAQ & Help Desk</Link>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919986207964"
                className="btn-blue-primary py-3 text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99862 07964</span>
              </a>
              <a
                href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20a%20service%20booking"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 text-center text-sm rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Instant Booking</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
