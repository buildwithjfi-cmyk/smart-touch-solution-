"use client";

import { useEffect, useRef, useState } from 'react';
import { Phone, Home, ClipboardCheck, Wrench, ShieldCheck, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const AUTOPLAY_MS = 4000;       // time on each step
const RESUME_AFTER_MS = 8000;   // wait after the visitor touches it before moving again
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Small line illustrations for each step. Outlines use the card's soft tone;
// one detail per drawing uses orange so it reads at a glance.
const ACCENT = '#F97316';

function StepArt({ name }) {
  const common = {
    viewBox: '0 0 120 80',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 3,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'w-28 h-[75px] sm:w-32 sm:h-20 shrink-0',
    'aria-hidden': true,
    focusable: 'false',
  };

  switch (name) {
    case 'book':
      return (
        <svg {...common}>
          <rect x="24" y="6" width="34" height="66" rx="7" />
          <line x1="35" y1="63" x2="47" y2="63" />
          <rect x="66" y="12" width="44" height="28" rx="9" />
          <path d="M74 40 l-5 10 l14 -10" />
          <g fill={ACCENT} stroke="none">
            <circle cx="79" cy="26" r="2.8" />
            <circle cx="88" cy="26" r="2.8" />
            <circle cx="97" cy="26" r="2.8" />
          </g>
        </svg>
      );
    case 'inspect':
      return (
        <svg {...common}>
          <path d="M10 42 L40 18 L70 42 V72 H10 Z" />
          <rect x="32" y="52" width="16" height="20" rx="2" />
          <g stroke={ACCENT}>
            <circle cx="88" cy="42" r="14" />
            <line x1="98" y1="52" x2="110" y2="64" strokeWidth="4" />
          </g>
        </svg>
      );
    case 'estimate':
      return (
        <svg {...common}>
          <rect x="22" y="10" width="48" height="64" rx="6" />
          <rect x="35" y="5" width="22" height="10" rx="3" />
          <path d="M31 30 l3.5 3.5 l7 -7" />
          <line x1="47" y1="30" x2="62" y2="30" />
          <path d="M31 45 l3.5 3.5 l7 -7" />
          <line x1="47" y1="45" x2="62" y2="45" />
          <line x1="31" y1="60" x2="62" y2="60" />
          <circle cx="92" cy="52" r="15" stroke={ACCENT} />
          <text x="92" y="59.5" textAnchor="middle" fontSize="22" fontWeight="800" fill={ACCENT} stroke="none" fontFamily="system-ui, sans-serif">₹</text>
        </svg>
      );
    case 'repair':
      return (
        <svg {...common}>
          <rect x="16" y="8" width="54" height="66" rx="6" />
          <line x1="16" y1="21" x2="70" y2="21" />
          <circle cx="26" cy="14.5" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="33" cy="14.5" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="43" cy="47" r="16" />
          <path d="M34 50 a10 10 0 0 0 16 4" />
          <g transform="translate(74 22) scale(1.55)" stroke={ACCENT} strokeWidth="2.2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </g>
        </svg>
      );
    case 'warranty':
    default:
      return (
        <svg {...common}>
          <path d="M48 6 L74 16 V38 C74 56 62 67 48 74 C34 67 22 56 22 38 V16 Z" />
          <path d="M36 39 l8 8 l16 -16" stroke={ACCENT} strokeWidth="4" />
          <rect x="82" y="44" width="32" height="22" rx="6" />
          <text x="98" y="59.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="currentColor" stroke="none" fontFamily="system-ui, sans-serif">365</text>
        </svg>
      );
  }
}

// Card header: shows the step photo once it loads; until then (or if the
// file is missing) the line illustration stays visible underneath.
function StepImage({ src, alt, art, last }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // A cached image can finish loading before React hydrates; catch that case.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className={`relative rounded-xl h-36 sm:h-40 overflow-hidden flex items-center justify-center ${last ? 'bg-amber-50 text-amber-300' : 'bg-sky-50 text-sky-300'}`}>
      {!loaded && <StepArt name={art} />}
      <img
        ref={imgRef}
        src={src}
        alt={loaded ? alt : ''}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}

const steps = [
  {
    art: 'book',
    icon: Phone,
    title: 'Book a Visit',
    desc: 'Call or WhatsApp us with your appliance and the problem.',
  },
  {
    art: 'inspect',
    icon: Home,
    title: 'Doorstep Inspection',
    desc: 'Our technician visits your home and finds the fault. Inspection charge: ₹200.',
  },
  {
    art: 'estimate',
    icon: ClipboardCheck,
    title: 'Clear Estimate',
    desc: 'You get an estimate before any work starts. We repair only after you approve.',
  },
  {
    art: 'repair',
    icon: Wrench,
    title: 'Repair at Home',
    desc: 'Your appliance is repaired at your doorstep using genuine spare parts.',
  },
  {
    art: 'warranty',
    icon: ShieldCheck,
    title: '365 Days Warranty',
    desc: 'Every repair is covered for a full year after it is done.',
  },
];

export default function HowWeWork() {
  const trackRef = useRef(null);
  const rootRef = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const [userPaused, setUserPaused] = useState(false);   // pause button
  const [reduceMotion, setReduceMotion] = useState(false);
  const holdUntil = useRef(0);       // pause briefly after the visitor interacts
  const hovering = useRef(false);
  const onScreen = useRef(true);

  useEffect(() => { activeRef.current = active; }, [active]);

  // Respect the visitor's "reduce motion" setting: never auto-play for them.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Only move while the carousel is visible on screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([entry]) => { onScreen.current = entry.isIntersecting; }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ---- Endless loop ------------------------------------------------------
  // The five cards are rendered three times: [copy 0][copy 1][copy 2].
  // The visitor always rests in the middle copy. When the carousel moves into
  // copy 0 or copy 2, it jumps instantly to the identical card in copy 1, so it
  // can keep moving forward (or back) forever without ever rewinding.
  // `active` is the index across all 15 cards; the step shown is active % N.
  const N = steps.length;

  const cardLeft = (track, i) => track.children[i].offsetLeft - track.children[0].offsetLeft;

  // Move without animation (used for the invisible jump between copies).
  const jumpTo = (track, i) => {
    track.style.scrollBehavior = 'auto';
    track.style.scrollSnapType = 'none';
    track.scrollLeft = cardLeft(track, i);
    requestAnimationFrame(() => {
      track.style.scrollBehavior = '';
      track.style.scrollSnapType = '';
    });
  };

  // Start on step 1 in the middle copy, and stay put if the window is resized.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    jumpTo(track, N);
    setActive(N);
    const onResize = () => jumpTo(track, activeRef.current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Auto-advance forward, one card at a time, endlessly.
  useEffect(() => {
    if (userPaused || reduceMotion) return;
    const id = setInterval(() => {
      if (document.hidden || hovering.current || !onScreen.current) return;
      if (Date.now() < holdUntil.current) return;
      goTo(activeRef.current + 1, false);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [userPaused, reduceMotion]);

  const holdForVisitor = () => { holdUntil.current = Date.now() + RESUME_AFTER_MS; };

  // Track the card nearest the left edge; once scrolling settles outside the
  // middle copy, jump back into it.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    let settle = 0;
    const nearestCard = () => {
      const left = track.scrollLeft;
      let nearest = 0;
      let best = Infinity;
      for (let i = 0; i < track.children.length; i++) {
        const d = Math.abs(cardLeft(track, i) - left);
        if (d < best) { best = d; nearest = i; }
      }
      return nearest;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActive(nearestCard()));
      clearTimeout(settle);
      settle = setTimeout(() => {
        const i = nearestCard();
        if (i < N) { jumpTo(track, i + N); setActive(i + N); }
        else if (i >= 2 * N) { jumpTo(track, i - N); setActive(i - N); }
      }, 140);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(settle);
    };
  }, []);

  const goTo = (index, fromVisitor = true) => {
    const track = trackRef.current;
    if (!track) return;
    if (fromVisitor) holdForVisitor();
    const i = Math.max(0, Math.min(track.children.length - 1, index));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: cardLeft(track, i), behavior: reduce ? 'auto' : 'smooth' });
  };

  // Dots: go to that step in the copy the visitor is currently in.
  const goToStep = (stepIdx) => goTo(active - (active % N) + stepIdx);

  const currentStep = active % N;

  return (
    <div
      ref={rootRef}
      data-track="how_we_work"
      className="space-y-6 sm:space-y-8"
      onMouseEnter={() => { hovering.current = true; }}
      onMouseLeave={() => { hovering.current = false; }}
      onFocusCapture={holdForVisitor}
    >
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2 min-w-0">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Simple 5-Step Process</span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900">How We Work</h2>
          <p className="text-stone-700 text-sm sm:text-base">From your call to a repaired appliance, without leaving home.</p>
        </div>

        {/* Arrow buttons (tablet and up; phones swipe) */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous step"
            className="w-11 h-11 rounded-full border border-stone-300 bg-white text-stone-900 flex items-center justify-center hover:border-sky-700 hover:text-sky-700 disabled:opacity-40 disabled:hover:border-stone-300 disabled:hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next step"
            className="w-11 h-11 rounded-full border border-stone-300 bg-white text-stone-900 flex items-center justify-center hover:border-sky-700 hover:text-sky-700 disabled:opacity-40 disabled:hover:border-stone-300 disabled:hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swipeable track: ~85% card width on phones so the next card peeks in */}
      <ol
        ref={trackRef}
        aria-label="How we work, 5 steps"
        aria-live={userPaused || reduceMotion ? 'polite' : 'off'}
        onTouchStart={holdForVisitor}
        onPointerDown={holdForVisitor}
        onWheel={holdForVisitor}
        className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 scroll-px-4 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 motion-reduce:scroll-auto"
      >
        {[0, 1, 2].flatMap((copy) => steps.map(({ art, title, desc }, idx) => {
          const last = idx === steps.length - 1;
          const isClone = copy !== 1; // copies 0 and 2 exist only for the endless loop
          return (
            <li
              key={`${copy}-${title}`}
              aria-hidden={isClone ? 'true' : undefined}
              aria-label={isClone ? undefined : `Step ${idx + 1} of ${steps.length}: ${title}`}
              className="snap-start shrink-0 w-[82%] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <div className="h-full rounded-2xl bg-white border border-stone-200 shadow-[0_1px_3px_rgba(16,34,58,0.06)] p-2.5 flex flex-col">
                {/* Photo header (public/how-we-work/step-N.jpg); the illustration shows until the photo exists */}
                <StepImage src={`/how-we-work/step-${idx + 1}.jpg`} alt={title} art={art} last={last} />
                <div className="px-2.5 pt-4 pb-2.5 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-extrabold tabular-nums text-white shrink-0 ${last ? 'bg-amber-700' : 'bg-sky-700'}`}
                      aria-hidden="true"
                    >
                      {idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 leading-snug">{title}</h3>
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </li>
          );
        }))}
      </ol>

      {/* Pause/play + progress dots (dots are tappable) */}
      <div className="flex justify-center items-center gap-2" role="group" aria-label="Choose a step">
        {!reduceMotion && (
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? 'Play step carousel' : 'Pause step carousel'}
            className="mr-1 w-8 h-8 rounded-full border border-stone-300 bg-white text-stone-700 flex items-center justify-center hover:border-sky-700 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 transition-colors"
          >
            {userPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
          </button>
        )}
        {steps.map((s, idx) => (
          <button
            key={s.title}
            type="button"
            onClick={() => goToStep(idx)}
            aria-label={`Go to step ${idx + 1}: ${s.title}`}
            aria-current={currentStep === idx ? 'step' : undefined}
            className="p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-full"
          >
            <span className={`block h-2 rounded-full transition-all ${currentStep === idx ? 'w-6 bg-sky-700' : 'w-2 bg-stone-300'}`}></span>
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
        <a
          href="tel:+919916207964"
          className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call to Book: +91 99162 07964</span>
        </a>
        <a
          href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20would%20like%20to%20book%20a%20doorstep%20repair%20visit"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
