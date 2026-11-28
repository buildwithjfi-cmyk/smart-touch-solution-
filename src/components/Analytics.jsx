"use client";

import { useEffect } from 'react';
import Script from 'next/script';

// Google Analytics 4 property for smarttouchappliances.com
export const GA_MEASUREMENT_ID = 'G-8LMR4GJXPX';

// Only send data from the live site, so local testing doesn't count.
const ENABLED = process.env.NODE_ENV === 'production';

// Which part of the page a link sits in, e.g. "hero", "floating", "footer".
// Uses the nearest data-track="..." wrapper, then falls back to header/footer.
function linkLocation(el) {
  const tagged = el.closest('[data-track]');
  if (tagged) return tagged.getAttribute('data-track');
  if (el.closest('footer')) return 'footer';
  if (el.closest('header')) return 'header';
  return 'page_body';
}

export default function Analytics() {
  // One listener for the whole site: every call (tel:) and WhatsApp (wa.me)
  // link is counted, including links added later.
  useEffect(() => {
    if (!ENABLED) return;
    const onClick = (e) => {
      const link = e.target.closest && e.target.closest('a[href]');
      if (!link || typeof window.gtag !== 'function') return;
      const href = link.getAttribute('href') || '';
      let eventName = null;
      if (href.startsWith('tel:')) eventName = 'call_click';
      else if (/(^|\/\/)(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//.test(href)) eventName = 'whatsapp_click';
      if (!eventName) return;
      window.gtag('event', eventName, {
        link_location: linkLocation(link),
        link_text: (link.getAttribute('aria-label') || link.textContent || '').trim().slice(0, 80),
        page_path: window.location.pathname,
        transport_type: 'beacon', // still sends if the phone app or WhatsApp opens immediately
      });
      // Contact intent only; call duration and confirmed bookings are separate conversions.
      window.gtag('event', 'conversion', {
        send_to: 'AW-18595410114/Zv80COSO_sAdEMLh_aJF',
        transport_type: 'beacon',
      });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  if (!ENABLED) return null;

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtm.js?id=GTM-NPCRMFPJ" strategy="afterInteractive" />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          gtag('config', 'AW-18595410114');
        `}
      </Script>
    </>
  );
}
