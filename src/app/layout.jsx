import './globals.css';
import LayoutContent from '@/components/LayoutContent';

export const metadata = {
  metadataBase: new URL('https://www.smarttouchappliances.com'),
  title: 'Smart Touch Appliances | Home Appliance Repair & Certified Refurbished Store Bangalore',
  description: 'Smart Touch Appliances provides 24/7 doorstep washing machine, fridge, and AC repair services in Bangalore across 287+ areas. Call +91 99862 07964 for same-day certified repair, refurbished sales, and new appliances with service warranty.',
  keywords: 'Smart Touch Appliances, washing machine repair bangalore, fridge repair bangalore, AC repair bangalore, refurbished appliances bangalore, used washing machine, used fridge, smarttouchappliances.com',
  openGraph: {
    title: 'Smart Touch Appliances - Bangalore Home Appliance Solutions',
    description: 'Expert Washing Machine & Fridge Repair, Certified Refurbished Appliances, and Brand New Sales with Doorstep Installation in Bangalore. Call +91 99862 07964.',
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
    description: 'Expert Washing Machine & Fridge Repair, Certified Refurbished Appliances, and Brand New Sales in Bangalore. Call +91 99862 07964.',
    images: ['/homepage-whatsapp-image.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-stone-900 min-h-screen flex flex-col font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
