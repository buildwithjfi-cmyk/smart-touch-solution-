"use client";

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

export default function LayoutContent({ children }) {
  const pathname = usePathname();
  const isLGStandalone = pathname === '/lg-service-bangalore';

  if (isLGStandalone) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
