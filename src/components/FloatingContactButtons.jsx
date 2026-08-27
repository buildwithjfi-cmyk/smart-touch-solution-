"use client";

import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20book%20a%20doorstep%20appliance%20service."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:scale-105 transition-all duration-300 border border-emerald-500"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute right-16 bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-stone-800 pointer-events-none">
          WhatsApp Instant Booking
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919916207964"
        aria-label="Call +91 99162 07964"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 to-amber-500 text-white shadow-lg hover:scale-105 transition-all duration-300 border border-amber-400 animate-pulse-slow"
      >
        <Phone className="w-6 h-6 fill-white" />
        <span className="absolute right-16 bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-stone-800 pointer-events-none">
          Call Hotline: +91 99162 07964
        </span>
      </a>
    </div>
  );
}
