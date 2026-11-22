import './globals.css';
import LayoutContent from '@/components/LayoutContent';
import Analytics from '@/components/Analytics';

export const metadata = {
  metadataBase: new URL('https://www.smarttouchappliances.com'),
  verification: {
    google: 'd5WM0TMV5dLLNwDIT2Lr0sbcSJd0n7_kNUl5UUy3XnY',
  },
  title: 'Smart Touch Appliances | Home Appliance Repair Bangalore',
  description: 'Smart Touch Appliances provides doorstep washing machine, fridge, AC, microwave and dryer repair services across Bangalore. ₹200 inspection charge, estimate before work, and 365 days warranty after repair. Call +91 99162 07964.',
  keywords: 'Smart Touch Appliances, washing machine repair bangalore, fridge repair bangalore, AC repair bangalore, microwave repair bangalore, dryer repair bangalore, appliance repair bangalore, smarttouchappliances.com',
  openGraph: {
    title: 'Smart Touch Appliances - Bangalore Home Appliance Solutions',
    description: 'Doorstep Washing Machine, Fridge, AC, Microwave & Dryer Repair in Bangalore. ₹200 inspection, estimate before work, 365 days warranty after repair. Call +91 99162 07964.',
    url: 'https://www.smarttouchappliances.com',
    siteName: 'Smart Touch Appliances',
    images: [
      {
        url: '/homepage-whatsapp-image.webp',
        width: 1200,
        height: 630,
        type: 'image/webp',
        alt: 'Smart Touch Appliances Bangalore Happy Family with Appliances',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Touch Appliances - Bangalore Home Appliance Solutions',
    description: 'Doorstep Washing Machine, Fridge, AC, Microwave & Dryer Repair in Bangalore. ₹200 inspection, estimate before work, 365 days warranty after repair. Call +91 99162 07964.',
    images: ['/homepage-whatsapp-image.webp'],
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-stone-900 min-h-screen flex flex-col font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
        <LayoutContent>{children}</LayoutContent>
        <Analytics />
      </body>
    </html>
  );
}
