"use client";

import { useEffect, useRef, useState } from 'react';

// Full-bleed hero background photo (desktop only). Shows /hero.webp once the
// file exists; until then the hero keeps its plain light background.
// The photo is anchored to the right so its subject stays visible beside the
// text panel on the left.
export default function HeroImage({
  src = '/hero.webp',
  alt = 'Technician repairing a front-load washing machine in a home',
}) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // A cached image can finish loading before React hydrates; catch that case.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className="hidden lg:block absolute inset-0 z-0" aria-hidden={!loaded}>
      <img
        ref={imgRef}
        src={src}
        alt={loaded ? alt : ''}
        fetchPriority="high"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={`w-full h-full object-cover object-[100%_75%] transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
