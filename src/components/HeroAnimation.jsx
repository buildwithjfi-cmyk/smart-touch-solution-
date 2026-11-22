"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Clock, Wrench, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

const circularSteps = [
  {
    id: 1,
    stepNumber: '01',
    title: 'Book Service',
    icon: Phone,
    position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    color: 'bg-amber-700',
    detail: 'Call +91 99162 07964 or send a WhatsApp message to request a doorstep repair visit.'
  },
  {
    id: 2,
    stepNumber: '02',
    title: 'Doorstep Visit',
    icon: Clock,
    position: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
    color: 'bg-sky-600',
    detail: 'A technician visits your home anywhere in Bangalore.'
  },
  {
    id: 3,
    stepNumber: '03',
    title: 'Transparent Repair',
    icon: Wrench,
    position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
    color: 'bg-sky-800',
    detail: '₹200 inspection, a clear estimate before any work, then repair using genuine spare parts.'
  },
  {
    id: 4,
    stepNumber: '04',
    title: 'Warranty & Care',
    icon: ShieldCheck,
    position: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
    color: 'bg-emerald-600',
    detail: '365 days warranty after repair with dedicated post-repair customer support.'
  }
];

export default function HeroAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-rotate active step around circular flow chart every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % circularSteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = circularSteps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div className="relative w-full max-w-md mx-auto py-8">
      {/* Ambient Blue & Amber Background Glow */}
      <div className="absolute inset-0 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Circular Flow Chart Container */}
      <div className="relative w-[300px] sm:w-[340px] h-[300px] sm:h-[340px] mx-auto flex items-center justify-center">
        
        {/* Animated Rotating Outer Orbit Path Ring */}
        <div className="absolute inset-4 rounded-full border-2 border-dashed border-sky-300 animate-spin-slow pointer-events-none"></div>
        <div className="absolute inset-8 rounded-full border border-stone-200 pointer-events-none"></div>

        {/* Pulsing Beam Connecting Line SVG Circle */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#0284C7"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            className="opacity-40"
          />
        </svg>

        {/* Central Core Brand Badge Node */}
        <div className="relative w-36 h-36 rounded-full bg-white border-2 border-sky-400 shadow-md flex flex-col items-center justify-center text-center p-3 z-10">
          <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-black shadow-xs mb-1">
            <CurrentIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-[10px] font-black text-stone-900 uppercase tracking-wider">SMART TOUCH</span>
          <span className="text-[9px] font-bold text-sky-700">4-Step Process</span>
        </div>

        {/* 4 Circular Flow Nodes */}
        {circularSteps.map((step, idx) => {
          const StepIcon = step.icon;
          const isActive = activeStep === idx;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`absolute ${step.position} z-20 group transition-all duration-300`}
              aria-label={step.title}
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 flex flex-col items-center justify-center shadow-md transition-all duration-300 ${
                  isActive
                    ? `${step.color} text-white border-sky-400 scale-110 shadow-lg ring-4 ring-sky-200`
                    : 'bg-white text-stone-700 border-stone-300 hover:border-sky-400 hover:scale-105'
                }`}
              >
                <StepIcon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-stone-700'}`} />
                <span className={`text-[9px] font-extrabold mt-0.5 ${isActive ? 'text-sky-100' : 'text-stone-600'}`}>
                  {step.stepNumber}
                </span>
              </div>

              {/* Node Tooltip Label */}
              <span
                className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs transition-all ${
                  isActive
                    ? 'bg-stone-900 text-white opacity-100 -bottom-6'
                    : 'bg-stone-100 text-stone-700 opacity-80 -bottom-5'
                }`}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Description Card Below Circular Chart */}
      <div className="mt-10 glass-card rounded-2xl p-5 border border-sky-100 bg-white shadow-xs space-y-2 text-center relative z-20">
        <div className="flex items-center justify-center gap-2">
          <span className="bg-sky-100 text-sky-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Step {current.stepNumber} of 04
          </span>
          <h4 className="text-base font-bold text-stone-900">{current.title}</h4>
        </div>
        <p className="text-stone-700 text-sm leading-relaxed">{current.detail}</p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 transition-colors"
          >
            <span>Learn about doorstep repairs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
