"use client";

import { useState } from 'react';
import { Search, MapPin, CheckCircle2, Clock, ShieldCheck, ArrowRight, Phone } from 'lucide-react';

const popularBangaloreAreas = [
  'Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout', 'Electronic City',
  'JP Nagar', 'Jayanagar', 'BTM Layout', 'Hebbal', 'Marathahalli',
  'Yelahanka', 'Sarjapur Road', 'Bellandur', 'Banashankari', 'Rajajinagar',
  'Malleshwaram', 'Domlur', 'Bannerghatta Road', 'Kalyan Nagar', 'CV Raman Nagar',
  'Richmond Town', 'Frazer Town', 'Kammanahalli', 'Basavanagudi', 'Vidyaranyapura'
];

export default function AreaCheckerWidget() {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const trimmed = query.trim().toLowerCase();
    const match = popularBangaloreAreas.find(area => area.toLowerCase().includes(trimmed)) || query.trim();

    setSearchResult({
      areaName: match,
      available: true
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-stone-200 relative overflow-hidden shadow-sm bg-white">
      <div className="text-center space-y-3 mb-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full text-amber-800 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-4 h-4 text-amber-700" />
          <span>Doorstep Service Across Bangalore</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
          Check Doorstep Service Availability In Your Area
        </h3>
        <p className="text-stone-700 text-sm max-w-xl mx-auto">
          Type your locality to check that we cover your area, then book a doorstep visit.
        </p>
      </div>

      {/* Search Input Form */}
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3 relative z-10">
        <div className="relative w-full">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-700" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your area (e.g., Indiranagar, Whitefield, HSR Layout...)"
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-500 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 transition-all font-medium text-base sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto btn-warm-primary px-8 py-4 flex items-center justify-center gap-2 font-bold whitespace-nowrap text-sm"
        >
          <Search className="w-5 h-5 stroke-[2.5]" />
          <span>Check Coverage</span>
        </button>
      </form>

      {/* Quick Location Chips */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 relative z-10">
        <span className="text-xs font-semibold text-stone-600 mr-1">Popular:</span>
        {popularBangaloreAreas.slice(0, 6).map((area) => (
          <button
            key={area}
            onClick={() => {
              setQuery(area);
              setSearchResult({
                areaName: area,
                available: true
              });
            }}
            className="text-xs bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-800 border border-stone-200 hover:border-amber-300 px-3 py-1 rounded-full transition-all"
          >
            {area}
          </button>
        ))}
      </div>

      {/* Search Result Card */}
      {searchResult && (
        <div className="mt-6 p-5 rounded-xl bg-emerald-50 border border-emerald-300 relative z-10 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span>Doorstep Service Ready in <span className="text-emerald-700 capitalize">{searchResult.areaName}</span>!</span>
                </h4>
                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-700 mt-1">
                  <span className="bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                    Inspection ₹200
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href="tel:+919916207964"
                className="btn-warm-primary text-xs px-5 py-3 flex-1 md:flex-initial flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +91 99162 07964</span>
              </a>
              <a
                href={`https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20a%20technician%20in%20${encodeURIComponent(searchResult.areaName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-3 rounded-full flex-1 md:flex-initial flex items-center justify-center gap-2 transition-colors"
              >
                <span>Book Technician</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
