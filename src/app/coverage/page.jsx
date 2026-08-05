import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import { MapPin, Phone, MessageSquare, CheckCircle2, Award, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Bangalore Doorstep Appliance Repair Coverage | 287+ Localities Served',
  description: 'Doorstep washing machine, fridge & AC repair across 287+ Bangalore localities including Indiranagar, Koramangala, Whitefield, HSR, Jayanagar & Yelahanka. Call +91 99862 07964.',
};

export default function CoveragePage() {
  const zones = [
    {
      title: 'East Bangalore & IT Hubs',
      href: '/coverage/east-bangalore',
      localities: ['Indiranagar', 'Whitefield', 'Marathahalli', 'Bellandur', 'Sarjapur Road', 'CV Raman Nagar', 'Varthur', 'Brookefield', 'Kadubeesanahalli', 'Hoodi', 'Domlur', 'HAL 2nd Stage']
    },
    {
      title: 'South Bangalore Hubs',
      href: '/coverage/south-bangalore',
      localities: ['Koramangala', 'HSR Layout', 'JP Nagar', 'Jayanagar', 'BTM Layout', 'Banashankari', 'Electronic City', 'Bommanahalli', 'Bannerghatta Road', 'Arekere', 'Gottigere', 'Kumaraswamy Layout']
    },
    {
      title: 'North Bangalore & Airport Zone',
      href: '/coverage/north-bangalore',
      localities: ['Hebbal', 'Yelahanka', 'Kalyan Nagar', 'Kammanahalli', 'Hennur', 'Vidyaranyapura', 'RT Nagar', 'Thanisandra', 'Sahakar Nagar', 'Jakkur', 'Mathikere', 'Sanjay Nagar']
    },
    {
      title: 'West & Central Zone',
      href: '/coverage/west-bangalore',
      localities: ['Malleshwaram', 'Rajajinagar', 'Basaveshwaranagar', 'Vijayanagar', 'Richmond Town', 'Frazer Town', 'MG Road', 'Ulsoor', 'Sadashivnagar', 'Yeshwanthpur', 'Chamarajpet', 'Gandhinagar']
    }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-200 bg-gradient-to-b from-sky-50 via-blue-50/30 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-900 shadow-xs">
              <MapPin className="w-4 h-4 text-sky-700" />
              <span>Bangalore 287+ Locality Rapid Response Network</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-tight">
              Service Areas In <span className="text-gradient-blue">Bangalore</span>
            </h1>

            <p className="text-stone-600 text-base sm:text-xl leading-relaxed">
              Stationed service hubs across East, South, North, and West Bangalore ensuring background-verified technicians arrive at your home within 60 minutes!
            </p>

            <div className="pt-2 flex justify-center gap-4">
              <a href="tel:+919986207964" className="btn-blue-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Hotline: +91 99862 07964</span>
              </a>
              <a href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20is%20my%20area%20covered?" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Area Check</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locality Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zones.map((zone, idx) => (
            <div key={idx} className="glass-card glass-card-hover rounded-3xl p-8 border border-stone-200 bg-white space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h2 className="text-xl font-extrabold text-stone-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sky-600" />
                  <span>{zone.title}</span>
                </h2>
                <Link href={zone.href} className="text-xs font-bold text-sky-700 hover:underline">
                  View Zone →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-stone-700">
                {zone.localities.map((loc, i) => (
                  <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-stone-50 border border-stone-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AreaCheckerWidget />
      </section>
    </div>
  );
}
