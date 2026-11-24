const title = 'LG Appliance Repair in Bangalore | Independent Doorstep Technicians';
const description = 'Doorstep repair for LG washing machines, refrigerators, ACs, microwaves and dryers in Bangalore by Smart Touch Appliances, an independent repair service. ₹200 inspection, estimate before work, 365 days warranty. Call +91 99162 07964.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/lg-service-bangalore' },
  openGraph: {
    title,
    description,
    url: 'https://www.smarttouchappliances.com/lg-service-bangalore',
    siteName: 'Smart Touch Appliances',
    images: [
      {
        url: '/homepage-whatsapp-image.webp',
        width: 1200,
        height: 630,
        type: 'image/webp',
        alt: 'Smart Touch Appliances doorstep appliance repair in Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/homepage-whatsapp-image.webp'],
  },
};

export default function LGServiceLayout({ children }) {
  return children;
}
