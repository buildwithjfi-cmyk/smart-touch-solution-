"use client";

import { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Clock, ShieldCheck, CheckCircle2, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    serviceType: 'washing_machine',
    preferredDate: '',
    preferredTime: 'morning',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-stone-200 bg-gradient-to-b from-amber-50/50 to-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Phone className="w-4 h-4 text-amber-700" />
              <span>24/7 Customer Booking & Support</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900">
              Contact <span className="text-gradient-warm">Smart Touch</span> Appliances
            </h1>

            <p className="text-stone-600 text-base sm:text-lg">
              Have an urgent repair query or want to book a doorstep technician? Reach out to us via phone, WhatsApp, or fill out our instant appointment form below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-8 rounded-3xl border border-stone-200 bg-white space-y-6">
            <h2 className="text-2xl font-bold text-stone-900 border-b border-stone-200 pb-3">
              Direct Contact Hotlines
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Phone className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-600 block">Emergency 24/7 Phone Booking</span>
                  <a href="tel:+919986207964" className="text-xl font-black text-amber-800 hover:text-amber-900 transition-colors">
                    +91 99862 07964
                  </a>
                  <p className="text-[11px] text-emerald-700 font-bold mt-0.5">Technicians dispatched within 60 mins</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-600 block">WhatsApp Instant Desk</span>
                  <a
                    href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-emerald-700 hover:underline"
                  >
                    +91 99862 07964
                  </a>
                  <p className="text-[11px] text-stone-600 mt-0.5">Chat directly with senior service supervisor</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-stone-200 border border-stone-300 flex items-center justify-center text-stone-700 shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-600 block">Bangalore Service Hubs</span>
                  <p className="text-sm font-bold text-stone-900">Indiranagar • Koramangala • Whitefield</p>
                  <p className="text-xs text-stone-600 mt-0.5">100 Feet Road & 80 Feet Road Hubs, Bangalore, KA 560038</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-stone-200 border border-stone-300 flex items-center justify-center text-stone-700 shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-600 block">Working Hours</span>
                  <p className="text-sm font-bold text-stone-900">Emergency Doorstep: 24 Hours / 7 Days</p>
                  <p className="text-xs text-stone-600 mt-0.5">Showroom & Pickup: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Appointment Booking Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 rounded-3xl border border-stone-200 bg-white space-y-6">
            <div>
              <h2 className="text-2xl font-black text-stone-900">Book Doorstep Technician Service</h2>
              <p className="text-stone-600 text-sm mt-1">
                Fill in your details below and our service manager will call you back within 5 minutes to confirm technician assignment.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">Appointment Request Submitted!</h3>
                <p className="text-stone-700 text-sm max-w-md mx-auto">
                  Thank you! A Smart Touch Appliances service coordinator is reviewing your request for <strong className="text-emerald-800">{formData.area || 'your area'}</strong> and will call you on <strong className="text-stone-900">{formData.phone || '+91 99862 07964'}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-warm-primary px-6 py-2.5 text-xs font-bold"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 99862 07964"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Bangalore Area / Locality *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="e.g. Indiranagar, Whitefield, HSR..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Appliance Needing Service *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-600 text-sm"
                    >
                      <option value="washing_machine">Washing Machine Repair</option>
                      <option value="refrigerator">Refrigerator / Fridge Repair</option>
                      <option value="ac">Air Conditioner (AC) Service / Jet Wash</option>
                      <option value="microwave">Microwave Oven Repair</option>
                      <option value="refurbished_buy">Buy Certified Refurbished Appliance</option>
                      <option value="new_appliance">Buy Brand New Appliance</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-600 text-sm"
                    >
                      <option value="immediate">Urgent (Within 60 Mins)</option>
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Problem Description / Special Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe the issue (e.g. Fridge not cooling, Washing machine drum noise)..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-warm-primary w-full py-4 font-black text-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Doorstep Booking Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
