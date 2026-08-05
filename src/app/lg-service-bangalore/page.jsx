"use client";

import { useState } from 'react';
import { Phone, Mail, MessageSquare, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';

export default function LGServiceBangalorePage() {
  const [firstName, setFirstName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Front Load');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber) {
      setSubmitted(true);
    }
  };

  const productIcons = [
    { name: 'Wash Tower', icon: '🧺' },
    { name: 'Dryers', icon: '♨️' },
    { name: 'Washer Dryers', icon: '🔄' },
    { name: 'Front Load', icon: '🧼' },
    { name: 'Top Load', icon: '🧺' },
    { name: 'Semi Automatic Washing', icon: '🎛️' }
  ];

  return (
    <div className="bg-white text-stone-900 min-h-screen font-sans">
      {/* 1. Top Black Notice Banner (Image 1) */}
      <div className="bg-[#2d2d2d] text-stone-200 text-xs py-2 px-4 text-center font-medium">
        Updates to LG Electronics Service Terms of Use and Privacy Policy (12/12/2024)
      </div>

      {/* 2. Header & Booking Form Section (Image 1) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        {/* Authentic LG Brand Logo Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              {/* Exact High-Res LG Logo Asset */}
              <img
                src="/lg-logo.png"
                alt="LG Electronics Logo"
                className="h-14 sm:h-16 w-auto object-contain shrink-0"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight pt-2">
              Book a service request
            </h1>
            <p className="text-stone-500 text-sm">
              Book a visit from your nearest LG repair service center
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1">
            <p className="text-stone-500 text-xs sm:text-sm">
              We have global service network. Please call our Bengaluru service network number.
            </p>
            <a
              href="tel:+919986207964"
              className="bg-[#a50034] hover:bg-[#88002b] text-white font-bold px-6 py-2.5 rounded-full text-sm sm:text-base transition-colors shadow-sm inline-flex items-center gap-2 mt-1"
            >
              <span>1800 123 8033</span>
            </a>
          </div>
        </div>

        {/* Booking Input Bar */}
        <div className="space-y-4 pt-4">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900">Service Request Booked Successfully!</h3>
              <p className="text-emerald-800 text-xs">
                Our nearest LG service technician in Bengaluru will call you at <strong>{mobileNumber}</strong> shortly to confirm your visit slot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter Your First Name"
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#a50034] bg-white"
                  />
                </div>

                <div className="md:col-span-6 flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#a50034]">
                  <div className="px-3 py-3.5 bg-stone-100 border-r border-stone-300 flex items-center gap-1 text-xs font-bold text-stone-700 shrink-0">
                    <span>🇮🇳</span>
                    <span>▼</span>
                  </div>
                  <input
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3.5 text-sm focus:outline-none bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#a50034] hover:bg-[#88002b] text-white font-extrabold py-4 rounded-xl text-sm sm:text-base tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>BOOK A SERVICE REQUEST</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 3. Middle Section: Beige Background with Horizontal Product Line & Need Help? Bar (Image 2) */}
      <div className="bg-[#f0eee9] py-12 px-4 sm:px-6 space-y-12">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Horizontal Product Category Line */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {productIcons.map((prod, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(prod.name)}
                className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${
                  selectedCategory === prod.name
                    ? 'bg-white shadow-md border-2 border-[#a50034]'
                    : 'hover:bg-white/60 text-stone-700'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-2xl">
                  {prod.icon}
                </div>
                <span className="text-xs font-semibold text-stone-700 leading-tight italic">
                  {prod.name}
                </span>
              </button>
            ))}
          </div>

          {/* Need Help? Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-stone-300">
            <div>
              <h2 className="text-2xl font-bold text-stone-900">Need Help?</h2>
              <p className="text-stone-600 text-sm">We're here to help your all need.</p>
            </div>

            <a
              href="tel:+919986207964"
              className="bg-white text-stone-800 border border-stone-400 font-bold px-8 py-2.5 rounded-full text-sm hover:bg-stone-100 transition-colors shadow-xs"
            >
              Get Support
            </a>
          </div>

          {/* 3 White Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email us */}
            <div className="bg-white p-8 rounded-3xl shadow-xs border border-stone-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-stone-800" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900">Email us</h3>
                <p className="text-stone-500 text-xs leading-relaxed">
                  For more straightforward questions, send us an email
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-8 rounded-3xl shadow-xs border border-stone-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-stone-800" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900">WhatsApp</h3>
                <p className="text-stone-500 text-xs leading-relaxed">
                  We are on WhatsApp. Text with our experts.
                </p>
              </div>
            </div>

            {/* Call us */}
            <div className="bg-white p-8 rounded-3xl shadow-xs border border-stone-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-stone-800" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900">Call us</h3>
                <p className="text-stone-500 text-xs leading-relaxed">
                  We look forward to speaking and providing further LG services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. "Get professional help from LG experts" 4-Step Process Section (Images 3 & 4) */}
      <div className="bg-[#f0eee9] py-12 px-4 sm:px-6 border-t border-stone-300">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Get professional help from LG experts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xs border border-stone-100 flex flex-col items-center text-center space-y-6">
              <div className="w-48 h-48 relative flex items-center justify-center bg-stone-50 rounded-2xl">
                <div className="text-7xl">🧺</div>
                <div className="absolute bottom-2 right-2 bg-amber-400 text-stone-900 p-2 rounded-lg shadow-md font-bold text-xs flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4 fill-stone-900" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-stone-900">Step 1</h3>
                <p className="text-stone-500 text-sm">Choose a product and its symptom.</p>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xs border border-stone-100 flex flex-col items-center text-center space-y-6">
              <div className="w-48 h-48 relative flex items-center justify-center bg-stone-50 rounded-2xl">
                <div className="text-7xl">💻</div>
                <div className="absolute top-6 bg-white border border-stone-300 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-xs">
                  *****|
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-stone-900">Step 2</h3>
                <p className="text-stone-500 text-sm">Enter your contact information and confirm the request.</p>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xs border border-stone-100 flex flex-col items-center text-center space-y-6">
              <div className="w-48 h-48 relative flex items-center justify-center bg-stone-50 rounded-2xl">
                <div className="text-7xl">🖥️</div>
                <div className="absolute top-6 bg-red-600 text-white p-2.5 rounded-full shadow-md">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-stone-900">Step 3</h3>
                <p className="text-stone-500 text-sm">Check the request status easily online.</p>
              </div>
            </div>

            {/* Step 4 Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xs border border-stone-100 flex flex-col items-center text-center space-y-6">
              <div className="w-48 h-48 relative flex items-center justify-center bg-stone-50 rounded-2xl">
                <div className="text-7xl">📺</div>
                <div className="absolute bottom-2 right-2 bg-stone-900 text-white p-2.5 rounded-xl shadow-md">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-stone-900">Step 4</h3>
                <p className="text-stone-500 text-sm">
                  Receive certified repair services by trusted experts using genuine LG parts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Dark Footer Banner */}
      <div className="bg-[#2d2d2d] text-stone-400 text-xs py-4 px-4 text-center">
        Copyright © 2009-2024 LG Electronics. All Rights Reserved
      </div>
    </div>
  );
}
