import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import { MapPin, Clock, ShieldCheck, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: '287+ Bangalore Service Areas Covered | Smart Touch Appliances',
  description: 'Smart Touch Appliances covers 287+ areas across Bangalore for doorstep washing machine, fridge, and AC repair. Same-day 60-min technician arrival. Call +91 99862 07964.',
};

const zoneGroups = [
  {
    region: 'East Bangalore & IT Corridor',
    areas: ['Indiranagar', 'Whitefield', 'Marathahalli', 'Bellandur', 'Sarjapur Road', 'CV Raman Nagar', 'Varthur', 'Brookefield', 'Kadubeesanahalli', 'Hoodi']
  },
  {
    region: 'South Bangalore',
    areas: ['Koramangala', 'HSR Layout', 'JP Nagar', 'Jayanagar', 'BTM Layout', 'Banashankari', 'Electronic City', 'Bommanahalli', 'Bannerghatta Road', 'Arekere']
  },
  {
    region: 'North & Airport Zone',
    areas: ['Hebbal', 'Yelahanka', 'Kalyan Nagar', 'Kammanahalli', 'Hennur', 'Vidyaranyapura', 'RT Nagar', 'Thanisandra', 'Sahakar Nagar', 'Jakkur']
  },
  {
    region: 'West & Central Bangalore',
    areas: ['Rajajinagar', 'Malleshwaram', 'Vijayanagar', 'Basaveshwaranagar', 'Richmond Town', 'Frazer Town', 'MG Road', 'Ulsoor', 'Sadashivnagar', 'Yeshwanthpur']
  }
];

export default function CoveragePage() {
  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-stone-200 bg-gradient-to-b from-amber-50/50 to-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-amber-700" />
              <span>Doorstep Service Network Across Bangalore</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900">
              Covering <span className="text-gradient-warm">287+</span> Bangalore Localities
            </h1>

            <p className="text-stone-600 text-base sm:text-lg">
              No matter where you live in Bangalore – from IT hubs like Whitefield & Electronic City to central heritage neighborhoods like Malleshwaram & Jayanagar – our technicians reach your doorstep within 60 minutes!
            </p>
          </div>
        </div>
      </section>

      {/* Area Search Lookup Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AreaCheckerWidget />
      </section>

      {/* Regional Directory Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-stone-900">Complete Bangalore Coverage Directory</h2>
          <p className="text-stone-600 text-sm">Active technician hubs located strategically in every zone.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zoneGroups.map((group, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200 bg-white space-y-4">
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>{group.region}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {group.areas.map((area, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 px-3 py-2 rounded-xl text-xs font-semibold text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Call Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="glass-card p-8 rounded-3xl border border-stone-200 bg-white space-y-4">
          <h3 className="text-2xl font-bold text-stone-900">Don't see your area listed?</h3>
          <p className="text-stone-600 text-sm">We cover all BBMP boundaries and satellite Bangalore sub-regions. Call us to confirm instant technician dispatch.</p>
          <div className="pt-2 flex justify-center">
            <a
              href="tel:+919986207964"
              className="btn-warm-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call +91 99862 07964</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
