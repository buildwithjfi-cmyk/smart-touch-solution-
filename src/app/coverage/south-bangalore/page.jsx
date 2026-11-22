import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata = {
  title: 'South Bangalore Appliance Repair | Koramangala, Jayanagar, HSR, E-City',
  description: 'Doorstep washing machine, fridge & AC repair in South Bangalore covering Koramangala, HSR Layout, JP Nagar, Jayanagar & Electronic City. Call +91 99162 07964.',
};

export default function SouthBangalorePage() {
  const localities = ['Koramangala', 'HSR Layout', 'JP Nagar', 'Jayanagar', 'BTM Layout', 'Banashankari', 'Electronic City', 'Bommanahalli', 'Bannerghatta Road', 'Arekere', 'Gottigere', 'Kumaraswamy Layout'];

  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              📍 South Bangalore Hub Network
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              South Bangalore Appliance Service
            </h1>
            <p className="text-stone-700 text-base sm:text-lg">
              Doorstep appliance repair in Koramangala, HSR Layout, Jayanagar, and Electronic City.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-2xl font-bold text-stone-900 text-center">South Bangalore Localities Served</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {localities.map((area, idx) => (
            <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AreaCheckerWidget />
      </section>
    </div>
  );
}
