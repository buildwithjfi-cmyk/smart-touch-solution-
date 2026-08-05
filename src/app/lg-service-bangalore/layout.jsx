export const metadata = {
  metadataBase: new URL('https://www.smarttouchappliances.com'),
  title: 'LG Appliance Repair Service Center Bengaluru | Book Service Visit',
  description: 'Book visit from your nearest LG repair service center in Bengaluru for washing machines, refrigerators, ACs, and microwaves. Certified experts & genuine LG parts.',
  openGraph: {
    title: 'LG Appliance Repair Service Center Bengaluru | Book Service Visit',
    description: 'Book visit from your nearest LG repair service center in Bengaluru for washing machines, refrigerators, ACs, and microwaves. Certified experts & genuine LG parts.',
    url: 'https://www.smarttouchappliances.com/lg-service-bangalore',
    siteName: 'LG Electronics Service Network Bengaluru',
    images: [
      {
        url: '/lg-whatsapp-image.webp',
        width: 1200,
        height: 630,
        type: 'image/webp',
        alt: 'LG Service Bangalore WhatsApp Preview Image',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LG Appliance Repair Service Center Bengaluru',
    description: 'Book visit from your nearest LG repair service center in Bengaluru. Certified experts & genuine LG parts.',
    images: ['/lg-whatsapp-image.webp'],
  },
};

export default function LGServiceLayout({ children }) {
  return children;
}
