"use client";

import { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, CheckCircle2, Award, Send } from 'lucide-react';
import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locality: '',
    appliance: 'Washing Machine',
    issue: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-200 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-900 shadow-xs">
              <Award className="w-4 h-4 text-sky-700" />
              <span>Doorstep Appliance Repair in Bangalore</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight">
              Contact & Book <span className="text-sky-700">Technician</span>
            </h1>

            <p className="text-stone-700 text-base sm:text-xl leading-relaxed">
              Book a technician to visit your home in Bangalore, or call us at <strong className="text-stone-900">+91 99162 07964</strong>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a href="tel:+919916207964" className="btn-blue-primary w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Hotline: +91 99162 07964</span>
              </a>
              <a href="https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20book%20a%20technician" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form + Hubs Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Booking Form */}
        <div className="lg:col-span-7 glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 bg-white space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">Book a Doorstep Visit</h2>
            <p className="text-stone-700 text-xs">Fill in your details and we will call you back to fix a visit time.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900">Booking Request Received!</h3>
              <p className="text-emerald-800 text-xs">Our nearest Bangalore technician will call you shortly at <strong>{formData.phone}</strong> to confirm your visit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Phone / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Bangalore Locality *</label>
                  <input
                    type="text"
                    required
                    value={formData.locality}
                    onChange={(e) => setFormData({...formData, locality: e.target.value})}
                    placeholder="e.g. Indiranagar, HSR, Whitefield"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Appliance Type *</label>
                  <select
                    value={formData.appliance}
                    onChange={(e) => setFormData({...formData, appliance: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                  >
                    <option>Washing Machine</option>
                    <option>Refrigerator / Fridge</option>
                    <option>Air Conditioner (AC)</option>
                    <option>Microwave Oven</option>
                    <option>LG Specialized Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Describe Issue (Optional)</label>
                <textarea
                  rows="3"
                  value={formData.issue}
                  onChange={(e) => setFormData({...formData, issue: e.target.value})}
                  placeholder="e.g. Machine making drum noise, cooling loss, water leak..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-blue-primary w-full py-3.5 text-sm font-extrabold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Request Doorstep Visit</span>
              </button>
            </form>
          )}
        </div>

        {/* Doorstep Service Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-stone-200 bg-white space-y-4">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sky-600" />
              <span>We Come To Your Doorstep</span>
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              No need to carry your appliance anywhere. Our technician visits your home, inspects the appliance, gives you an estimate, and repairs it right at your doorstep.
            </p>
            <div className="pt-2 border-t border-stone-100 space-y-2 text-xs font-semibold text-stone-700">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Hotline: +91 99162 07964</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Doorstep service across Bangalore</span>
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-stone-200 bg-white space-y-2">
            <h3 className="text-base font-bold text-stone-900">Coverage Zones Served</h3>
            <p className="text-stone-700 text-xs">East, South, North & West Bangalore.</p>
          </div>
        </div>
      </section>

      {/* Search Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AreaCheckerWidget />
      </section>
    </div>
  );
}
