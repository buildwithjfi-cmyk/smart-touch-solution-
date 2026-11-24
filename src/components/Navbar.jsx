"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Wrench, Menu, X, ChevronDown, ShieldCheck, MapPin, HelpCircle, HeartHandshake, Award } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ApplianceIcon from '@/components/ApplianceIcon';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const usps = [
    { icon: '🏠', label: 'Doorstep Service' },
    { icon: '🔍', label: '₹200 Inspection' },
    { icon: '🛡️', label: '365 Days Warranty' },
  ];

  return (
    <>
    {/* USP bar: visible on every screen size; scrolls away so only the menu stays pinned */}
    <div data-track="top_bar" className="bg-sky-800 text-white px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-center lg:justify-between gap-4">
        <ul className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-6 gap-y-1 text-xs sm:text-sm font-semibold" aria-label="Why choose Smart Touch">
          {usps.map((usp, idx) => (
            <li key={usp.label} className="flex items-center gap-1.5 whitespace-nowrap">
              {idx > 0 && <span className="sm:hidden text-sky-300" aria-hidden="true">•</span>}
              <span className="hidden sm:inline" aria-hidden="true">{usp.icon}</span>
              <span>{usp.label}</span>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3 text-xs font-semibold shrink-0">
          <a
            href="tel:+919916207964"
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/30 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 99162 07964</span>
          </a>
          <a
            href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20a%20service%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 px-3 py-1 rounded-full border border-white/30 transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>

    <header data-track="menu" className="sticky top-0 z-50 w-full">

      {/* Main Navigation Bar */}
      <nav className="glass-nav py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Generated Image */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo.svg"
              alt="Smart Touch Appliances logo"
              width="44"
              height="44"
              className="w-11 h-11 shrink-0 group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-stone-900 flex items-center gap-1">
                SMART<span className="text-sky-700">TOUCH</span>
              </span>
              <span className="block text-[11px] sm:text-xs tracking-wide uppercase font-extrabold text-amber-700 leading-none mt-0">
                Appliance Repair & Service
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
                <ChevronDown className="w-4 h-4 text-stone-500 group-hover:rotate-180 transition-transform" />
              </Link>

              <div className="absolute top-full left-0 w-72 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-1">
                <Link href="/lg-service-bangalore" className="flex items-center gap-2.5 p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 transition-colors text-xs font-bold border border-sky-200">
                  <Award className="w-4 h-4 text-sky-700 shrink-0" />
                  <div>
                    <span className="block text-sky-900">LG Appliance Repair</span>
                    <span className="text-[10px] font-semibold text-sky-700">Independent technicians • Error code fixes</span>
                  </div>
                </Link>
                <Link href="/services/washing-machine" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <ApplianceIcon name="washer" className="w-6 h-6 shrink-0" />
                  <div>
                    <span className="block">Washing Machine Repair</span>
                    <span className="text-[10px] font-medium text-stone-600">Front & Top Load • Motors & PCB</span>
                  </div>
                </Link>
                <Link href="/services/refrigerator" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <ApplianceIcon name="fridge" className="w-6 h-6 shrink-0" />
                  <div>
                    <span className="block">Refrigerator Repair</span>
                    <span className="text-[10px] font-medium text-stone-600">Cooling Loss • Gas Charging</span>
                  </div>
                </Link>
                <Link href="/services/ac-service" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <ApplianceIcon name="ac" className="w-6 h-6 shrink-0" />
                  <div>
                    <span className="block">AC Service & Jet Wash</span>
                    <span className="text-[10px] font-medium text-stone-600">High-Pressure Jet • Freon Gas</span>
                  </div>
                </Link>
                <Link href="/services/microwave" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <ApplianceIcon name="microwave" className="w-6 h-6 shrink-0" />
                  <div>
                    <span className="block">Microwave Oven Repair</span>
                    <span className="text-[10px] font-medium text-stone-600">Magnetron • Touchpad Panels</span>
                  </div>
                </Link>
                <Link href="/services/dryer" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <ApplianceIcon name="dryer" className="w-6 h-6 shrink-0" />
                  <div>
                    <span className="block">Dryer Repair</span>
                    <span className="text-[10px] font-medium text-stone-600">Dryers • Washer Dryers</span>
                  </div>
                </Link>
                <div className="pt-1 border-t border-stone-100">
                  <Link href="/services" className="block text-center text-xs font-bold text-sky-700 hover:underline p-1.5">
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Areas Covered Dropdown */}
            <div className="relative group py-2">
              <Link href="/coverage" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <span>Areas Covered</span>
                <ChevronDown className="w-4 h-4 text-stone-500 group-hover:rotate-180 transition-transform" />
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
                    View All Areas →
                  </Link>
                </div>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group py-2">
              <Link href="/about" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 text-stone-500 group-hover:rotate-180 transition-transform" />
              </Link>

              <div className="absolute top-full left-0 w-60 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-1">
                <Link href="/about" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Company Mission & Story</span>
                </Link>
                <Link href="/about/pricing-policy" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-800 transition-colors text-xs font-bold text-stone-800">
                  <HeartHandshake className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Pricing & Warranty Policy</span>
                </Link>
              </div>
            </div>

            {/* Contact Dropdown */}
            <div className="relative group py-2">
              <Link href="/contact" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <span>Contact</span>
                <ChevronDown className="w-4 h-4 text-stone-500 group-hover:rotate-180 transition-transform" />
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
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Call-to-action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919916207964"
              className="btn-blue-primary px-5 py-2.5 text-xs sm:text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>+91 99162 07964</span>
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
              className="text-stone-800 font-semibold px-3 py-3 hover:bg-stone-100 rounded-lg text-base"
            >
              Home
            </Link>

            {/* Mobile Services Sub-Menu */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('services')}
                className="w-full flex items-center justify-between text-stone-800 font-semibold px-3 py-3 hover:bg-stone-100 rounded-lg text-base"
              >
                <span>Services & Repairs</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileDropdown === 'services' && (
                <div className="pl-4 pr-2 py-1 text-sm font-semibold bg-stone-50 rounded-lg">
                  <Link href="/lg-service-bangalore" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-sky-900 font-extrabold">LG Appliance Repair</Link>
                  <Link href="/services/washing-machine" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700 hover:text-sky-700">Washing Machine Repair</Link>
                  <Link href="/services/refrigerator" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700 hover:text-sky-700">Refrigerator Repair</Link>
                  <Link href="/services/ac-service" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700 hover:text-sky-700">AC Service & Jet Wash</Link>
                  <Link href="/services/microwave" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700 hover:text-sky-700">Microwave Repair</Link>
                  <Link href="/services/dryer" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700 hover:text-sky-700">Dryer Repair</Link>
                </div>
              )}
            </div>

            {/* Mobile Coverage Sub-Menu */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('coverage')}
                className="w-full flex items-center justify-between text-stone-800 font-semibold px-3 py-3 hover:bg-stone-100 rounded-lg text-base"
              >
                <span>Areas Covered</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'coverage' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileDropdown === 'coverage' && (
                <div className="pl-4 pr-2 py-1 text-sm font-semibold bg-stone-50 rounded-lg">
                  <Link href="/coverage/east-bangalore" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700">East Bangalore & IT Corridor</Link>
                  <Link href="/coverage/south-bangalore" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700">South Bangalore Hubs</Link>
                  <Link href="/coverage/north-bangalore" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700">North & Airport Zone</Link>
                  <Link href="/coverage/west-bangalore" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700">West & Central Zone</Link>
                </div>
              )}
            </div>

            {/* Mobile About Sub-Menu */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('about')}
                className="w-full flex items-center justify-between text-stone-800 font-semibold px-3 py-3 hover:bg-stone-100 rounded-lg text-base"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileDropdown === 'about' && (
                <div className="pl-4 pr-2 py-1 text-sm font-semibold bg-stone-50 rounded-lg">
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700">Company Mission & Story</Link>
                  <Link href="/about/pricing-policy" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700">Pricing & Warranty Policy</Link>
                </div>
              )}
            </div>

            {/* Mobile Contact Sub-Menu */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('contact')}
                className="w-full flex items-center justify-between text-stone-800 font-semibold px-3 py-3 hover:bg-stone-100 rounded-lg text-base"
              >
                <span>Contact</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileDropdown === 'contact' && (
                <div className="pl-4 pr-2 py-1 text-sm font-semibold bg-stone-50 rounded-lg">
                  <Link href="/contact/book-technician" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700">Book Doorstep Technician</Link>
                  <Link href="/contact/faq" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-3 text-stone-700">Customer FAQ & Help Desk</Link>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919916207964"
                className="btn-blue-primary py-3 text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a
                href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20a%20service%20booking"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 text-center text-sm rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Instant Booking</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
