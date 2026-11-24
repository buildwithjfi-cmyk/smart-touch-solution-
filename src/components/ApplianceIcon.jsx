// Duotone appliance drawings (light blue body, blue glass, amber knobs).
// Inline SVG so they look the same on every device and need no extra downloads.
const P = {
  body: '#e0f2fe', // sky-100
  line: '#075985', // sky-800
  glass: '#7dd3fc', // sky-300
  white: '#ffffff',
  accent: '#f59e0b', // amber-500
  air: '#0284c7', // sky-600
  heat: '#d97706', // amber-600
  led: '#10b981', // emerald-500
  shade: '#bae6fd', // sky-200
};

const SW = 1.8;
const thin = SW * 0.7;
const thick = SW * 1.4;

const DRAWINGS = {
  washer: (
    <>
      <rect x="8" y="4" width="32" height="40" rx="4" fill={P.body} stroke={P.line} strokeWidth={SW} />
      <line x1="8" y1="13" x2="40" y2="13" stroke={P.line} strokeWidth={SW} />
      <rect x="12" y="7.3" width="9" height="3" rx="1" fill={P.white} stroke={P.line} strokeWidth={thin} />
      <circle cx="28.5" cy="8.8" r="1" fill={P.line} />
      <circle cx="34" cy="8.8" r="2.2" fill={P.accent} stroke={P.line} strokeWidth={thin} />
      <circle cx="24" cy="28.5" r="10" fill={P.white} stroke={P.line} strokeWidth={SW} />
      <circle cx="24" cy="28.5" r="6.6" fill={P.glass} stroke={P.line} strokeWidth={thin} />
      <path d="M19.6 30.2 q2.2 -2 4.4 0 t4.4 0" fill="none" stroke={P.white} strokeWidth={1.44} strokeLinecap="round" />
    </>
  ),
  fridge: (
    <>
      <rect x="11" y="3" width="26" height="40" rx="4" fill={P.body} stroke={P.line} strokeWidth={SW} />
      <rect x="31" y="5" width="4" height="36" rx="2" fill={P.shade} />
      <line x1="11" y1="17" x2="37" y2="17" stroke={P.line} strokeWidth={SW} />
      <line x1="16" y1="8" x2="16" y2="13" stroke={P.line} strokeWidth={thick} strokeLinecap="round" />
      <line x1="16" y1="21" x2="16" y2="31" stroke={P.line} strokeWidth={thick} strokeLinecap="round" />
      <line x1="15" y1="43" x2="15" y2="45.5" stroke={P.line} strokeWidth={thick} strokeLinecap="round" />
      <line x1="33" y1="43" x2="33" y2="45.5" stroke={P.line} strokeWidth={thick} strokeLinecap="round" />
    </>
  ),
  ac: (
    <>
      <rect x="3" y="9" width="42" height="18" rx="4" fill={P.body} stroke={P.line} strokeWidth={SW} />
      <rect x="8" y="13.5" width="9" height="3" rx="1" fill={P.white} stroke={P.line} strokeWidth={thin} />
      <circle cx="39.5" cy="15" r="1.3" fill={P.led} />
      <line x1="8" y1="22.5" x2="40" y2="22.5" stroke={P.line} strokeWidth={SW} strokeLinecap="round" />
      {[14, 24, 34].map((x) => (
        <path key={x} d={`M${x} 31 q2.2 2.5 0 5 q-2.2 2.5 0 5`} fill="none" stroke={P.air} strokeWidth={SW} strokeLinecap="round" />
      ))}
    </>
  ),
  microwave: (
    <>
      <rect x="3" y="9" width="42" height="29" rx="4" fill={P.body} stroke={P.line} strokeWidth={SW} />
      <rect x="7" y="13" width="25" height="21" rx="2.5" fill={P.glass} stroke={P.line} strokeWidth={SW * 0.8} />
      <path d="M11 30 L17 17 M15 30 L19 22" fill="none" stroke={P.white} strokeWidth={1.26} strokeLinecap="round" />
      <rect x="35" y="13" width="6.5" height="4" rx="1" fill={P.white} stroke={P.line} strokeWidth={thin} />
      <circle cx="36.6" cy="22" r="1.1" fill={P.line} />
      <circle cx="40" cy="22" r="1.1" fill={P.line} />
      <circle cx="38.3" cy="29.5" r="2.6" fill={P.accent} stroke={P.line} strokeWidth={thin} />
      <line x1="8" y1="38" x2="8" y2="40.5" stroke={P.line} strokeWidth={thick} strokeLinecap="round" />
      <line x1="40" y1="38" x2="40" y2="40.5" stroke={P.line} strokeWidth={thick} strokeLinecap="round" />
    </>
  ),
  dryer: (
    <>
      <rect x="8" y="4" width="32" height="40" rx="4" fill={P.body} stroke={P.line} strokeWidth={SW} />
      <line x1="8" y1="14" x2="40" y2="14" stroke={P.line} strokeWidth={SW} />
      <rect x="12" y="7" width="12" height="4" rx="1" fill={P.white} stroke={P.line} strokeWidth={thin} />
      <circle cx="33.5" cy="9" r="2.6" fill={P.accent} stroke={P.line} strokeWidth={thin} />
      <circle cx="23" cy="29" r="10" fill={P.white} stroke={P.line} strokeWidth={SW} />
      <circle cx="23" cy="29" r="6.8" fill={P.glass} stroke={P.line} strokeWidth={thin} />
      {[20, 23, 26].map((x) => (
        <path key={x} d={`M${x} 33 q-1.4 -1.6 0 -3.2 q1.4 -1.6 0 -3.2`} fill="none" stroke={P.heat} strokeWidth={1.44} strokeLinecap="round" />
      ))}
      <rect x="35" y="25.5" width="2" height="7" rx="1" fill={P.line} />
    </>
  ),
};

export default function ApplianceIcon({ name, className = 'w-10 h-10' }) {
  const drawing = DRAWINGS[name];
  if (!drawing) return null;
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      {drawing}
    </svg>
  );
}
