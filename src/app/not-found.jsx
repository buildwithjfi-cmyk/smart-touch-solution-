import Link from 'next/link';
import { Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6 bg-white text-stone-900">
      <div className="w-20 h-20 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 text-4xl font-black">
        404
      </div>
      <h1 className="text-3xl font-extrabold text-stone-900">Page Not Found</h1>
      <p className="text-stone-600 text-sm max-w-md">
        The page you are looking for might have been moved or doesn't exist. Let's get you back home or connect with our support team.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link href="/" className="btn-warm-primary px-6 py-3 text-sm flex items-center gap-2 font-bold">
          <Home className="w-4 h-4" />
          <span>Back To Home</span>
        </Link>
        <a href="tel:+919986207964" className="bg-stone-100 text-stone-800 border border-stone-300 px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
          <Phone className="w-4 h-4 text-amber-600" />
          <span>Call +91 99862 07964</span>
        </a>
      </div>
    </div>
  );
}
