"use client";

import { Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const WHATSAPP_URL =
  'https://wa.me/919916207964?text=' +
  encodeURIComponent('Hi Smart Touch Appliances, I would like to book a doorstep repair visit.\nAppliance: \nProblem: \nArea: ');

export default function FloatingContactButtons() {
  return (
    <div
      className="fixed right-4 sm:right-5 z-50 flex flex-col items-end gap-3"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
    >
      {/* Call Button */}
      <a
        href="tel:+919916207964"
        aria-label="Call +91 99162 07964"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-amber-700 hover:bg-amber-800 text-white border-2 border-white shadow-xl shadow-amber-900/20 hover:scale-105 transition-transform duration-200"
      >
        <span className="absolute inset-0 rounded-full bg-amber-500 animate-soft-ripple pointer-events-none" aria-hidden="true"></span>
        <Phone className="relative w-7 h-7 fill-white" />
        <span className="hidden sm:block absolute right-16 bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Call +91 99162 07964
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp to book a doorstep repair"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-xl shadow-emerald-900/20 hover:scale-105 transition-transform duration-200"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
}
