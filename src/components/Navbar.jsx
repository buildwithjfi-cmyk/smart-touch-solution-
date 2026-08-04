"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Wrench, Menu, X, ShieldCheck, Clock } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner */}
      <div className="bg-amber-600 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-100"></span>
            </span>
            <span className="bg-amber-800/60 text-amber-100 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">Bangalore Doorstep Service</span>
            <span>Friendly & Reliable Appliance Care within 60 Mins</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href="tel:+919986207964" 
              className="flex items-center gap-1.5 hover:underline bg-black/20 px-3 py-1 rounded-full border border-white/20 transition-all hover:bg-black/30"
            >
              <Phone className="w-3.5 h-3.5 text-amber-100" />
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs border border-amber-200 overflow-hidden group-hover:scale-105 transition-transform">
              <img 
                src="/logo.png" 
                alt="Smart Touch Appliances Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 flex items-center gap-1">
                SMART<span className="text-gradient-warm">TOUCH</span>
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-stone-500 -mt-1">
                Appliances • Bangalore
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
            <Link href="/" className="hover:text-amber-600 transition-colors py-1 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="hover:text-amber-600 transition-colors py-1 relative group">
              Services & Repairs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/shop" className="hover:text-amber-600 transition-colors py-1 relative group flex items-center gap-1.5">
              <span>Appliance Store</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold border border-amber-200">Refurbished & New</span>
            </Link>
            <Link href="/coverage" className="hover:text-amber-600 transition-colors py-1 relative group">
              Areas Covered
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="hover:text-amber-600 transition-colors py-1 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="hover:text-amber-600 transition-colors py-1 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Call-to-action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919986207964"
              className="btn-warm-primary px-5 py-2.5 text-xs sm:text-sm flex items-center gap-2"
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
          <div className="lg:hidden mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5 px-2">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg"
            >
              Services & Repairs
            </Link>
            <Link 
              href="/shop" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg flex items-center justify-between"
            >
              <span>Appliance Store</span>
              <span className="bg-amber-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded">Store</span>
            </Link>
            <Link 
              href="/coverage" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg"
            >
              Areas Covered (287+ Bangalore Localities)
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-800 font-semibold p-2 hover:bg-stone-100 rounded-lg"
            >
              Contact & Book Service
            </Link>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919986207964"
                className="btn-warm-primary py-3 text-center text-sm flex items-center justify-center gap-2"
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
