"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Wrench, RefreshCw, ShoppingBag, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Zap } from 'lucide-react';

const heroCards = [
  {
    id: 'repair',
    title: 'Washing Machine & Fridge Repair',
    badge: 'Same-Day Doorstep Service',
    icon: Wrench,
    metric: '60 Mins Arrival',
    detail: '100% Genuine OEM Spare Parts with up to 180 Days Written Warranty',
    color: 'from-amber-500 to-amber-600',
    borderColor: 'border-amber-400',
    link: '/services',
    linkText: 'Book Repair Service'
  },
  {
    id: 'refurbish',
    title: 'Certified Refurbished Appliances',
    badge: 'Up to 80% Cost Savings',
    icon: RefreshCw,
    metric: '25-Point Checked',
    detail: 'Tested like-new Fridges & Washing Machines with 3-6 Months Warranty',
    color: 'from-orange-500 to-amber-600',
    borderColor: 'border-orange-400',
    link: '/shop',
    linkText: 'Explore Refurbished Store'
  },
  {
    id: 'sales',
    title: 'Brand New 2026 Models',
    badge: 'Factory Sealed Boxes',
    icon: ShoppingBag,
    metric: 'Free Setup & Delivery',
    detail: 'Latest LG, Samsung, Bosch & Daikin models with brand warranty & trade-in buyback',
    color: 'from-amber-600 to-stone-800',
    borderColor: 'border-amber-500',
    link: '/shop',
    linkText: 'Shop New Appliances'
  }
];

export default function HeroAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle hero animation every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroCards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeCard = heroCards[activeIndex];
  const IconComponent = activeCard.icon;

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Soft Ambient Background Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl pointer-events-none"></div>

      {/* Main Interactive Floating Display */}
      <div className="relative glass-card rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-lg bg-white overflow-hidden animate-float">
        {/* Top Floating Badge */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
            <span>{activeCard.badge}</span>
          </div>

          <span className="text-[11px] font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>{activeCard.metric}</span>
          </span>
        </div>

        {/* Dynamic Card Hero Image & Icon Feature */}
        <div className="relative h-44 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white p-6 flex flex-col justify-between overflow-hidden shadow-inner mb-6">
          {/* Diagnostic Pulse Lines Effect */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>
          
          <div className="flex items-center justify-between relative z-10">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-md">
              <IconComponent className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-black/40 px-3 py-1 rounded-full border border-amber-500/30">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              <span>Verified Tech Dispatch</span>
            </div>
          </div>

          <div className="relative z-10">
            <h4 className="text-xl font-black text-white">{activeCard.title}</h4>
            <p className="text-xs text-stone-300 mt-1 line-clamp-2">{activeCard.detail}</p>
          </div>
        </div>

        {/* Interactive Selector Indicator Dots & Cards Switcher */}
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {heroCards.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => setActiveIndex(idx)}
                className={`py-2 px-1 rounded-xl text-[11px] font-bold transition-all flex flex-col items-center gap-1 border ${
                  activeIndex === idx
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs scale-[1.02]'
                    : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'
                }`}
              >
                <span className="capitalize">{card.id}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${activeIndex === idx ? 'bg-white' : 'bg-stone-400'}`}></span>
              </button>
            ))}
          </div>

          <Link
            href={activeCard.link}
            className="btn-warm-primary w-full py-3.5 text-xs font-bold flex items-center justify-center gap-2 group mt-2"
          >
            <span>{activeCard.linkText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
