"use client";

import { useState } from 'react';
import { Calculator, ShieldCheck, CheckCircle2, Phone, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

const applianceData = {
  washing_machine: {
    title: 'Washing Machine',
    icon: '🧺',
    issues: [
      { id: 'not_spinning', name: 'Spinning / Motor Issue', est: '₹499 - ₹899', warranty: '90 Days' },
      { id: 'water_leakage', name: 'Water Leakage / Pipe Clog', est: '₹349 - ₹599', warranty: '90 Days' },
      { id: 'pcb_repair', name: 'PCB Board / Display Fault', est: '₹899 - ₹1,499', warranty: '180 Days' },
      { id: 'excessive_noise', name: 'Excessive Noise / Bearing Replace', est: '₹699 - ₹1,199', warranty: '90 Days' },
      { id: 'general_service', name: 'Full Deep Cleaning & Servicing', est: '₹499 Fixed', warranty: '30 Days' },
    ]
  },
  refrigerator: {
    title: 'Refrigerator / Fridge',
    icon: '🧊',
    issues: [
      { id: 'not_cooling', name: 'Cooling Loss / Gas Charging', est: '₹899 - ₹1,499', warranty: '180 Days' },
      { id: 'compressor', name: 'Compressor Repair / Replacement', est: '₹1,499 - ₹2,999', warranty: '1 Year Warranty' },
      { id: 'thermostat', name: 'Thermostat / Sensor Defect', est: '₹499 - ₹799', warranty: '90 Days' },
      { id: 'door_gasket', name: 'Door Rubber Gasket Leak', est: '₹399 - ₹699', warranty: '90 Days' },
      { id: 'ice_buildup', name: 'Defrost Failure / Fan Motor', est: '₹599 - ₹999', warranty: '90 Days' },
    ]
  },
  air_conditioner: {
    title: 'Air Conditioner (AC)',
    icon: '❄️',
    issues: [
      { id: 'ac_service', name: 'High-Pressure Jet Cleaning Service', est: '₹599 Fixed', warranty: '60 Days' },
      { id: 'gas_refill', name: 'Freon Gas Leak Repair & Refill', est: '₹1,299 - ₹1,899', warranty: '180 Days' },
      { id: 'pcb_ac', name: 'Inverter PCB Board Repair', est: '₹999 - ₹1,799', warranty: '180 Days' },
      { id: 'water_drip', name: 'Indoor Unit Water Dripping', est: '₹399 - ₹699', warranty: '60 Days' },
      { id: 'compressor_ac', name: 'Compressor / Capacitor Fix', est: '₹1,199 - ₹2,499', warranty: '1 Year Warranty' },
    ]
  },
  microwave: {
    title: 'Microwave Oven',
    icon: '🍲',
    issues: [
      { id: 'not_heating', name: 'Magnetron / Heating Issue', est: '₹699 - ₹1,099', warranty: '90 Days' },
      { id: 'touch_panel', name: 'Touchpad / Buttons Unresponsive', est: '₹499 - ₹899', warranty: '90 Days' },
      { id: 'sparking', name: 'Internal Sparking / Mica Sheet', est: '₹349 - ₹599', warranty: '90 Days' },
      { id: 'turntable', name: 'Glass Plate / Motor Not Turning', est: '₹299 - ₹499', warranty: '90 Days' },
    ]
  }
};

export default function RepairCostEstimator() {
  const [selectedAppliance, setSelectedAppliance] = useState('washing_machine');
  const [selectedIssueIndex, setSelectedIssueIndex] = useState(0);

  const currentAppliance = applianceData[selectedAppliance];
  const currentIssue = currentAppliance.issues[selectedIssueIndex];

  return (
    <div className="w-full max-w-5xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-stone-200 relative overflow-hidden shadow-sm bg-white">
      <div className="flex items-center justify-between gap-4 mb-8 border-b border-stone-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>Honest Rate Transparency</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Appliance Repair Cost Calculator
          </h3>
          <p className="text-stone-600 text-sm mt-1">
            Get estimated pricing with zero hidden fees. Genuine parts & written warranty guaranteed.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-800">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Honest Pricing & Quality Guarantee</span>
        </div>
      </div>

      {/* Appliance Type Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {Object.keys(applianceData).map((key) => {
          const item = applianceData[key];
          const active = selectedAppliance === key;

          return (
            <button
              key={key}
              onClick={() => {
                setSelectedAppliance(key);
                setSelectedIssueIndex(0);
              }}
              className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                active
                  ? 'bg-amber-500 text-white border-amber-600 shadow-sm scale-[1.02]'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-300 hover:text-stone-900'
              }`}
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="font-bold text-xs sm:text-sm text-center">{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Issue Selection & Summary Box */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Issue Options List */}
        <div className="md:col-span-7 space-y-2.5">
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
            Select Common Issue for {currentAppliance.title}:
          </label>
          {currentAppliance.issues.map((issue, idx) => (
            <div
              key={issue.id}
              onClick={() => setSelectedIssueIndex(idx)}
              className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                selectedIssueIndex === idx
                  ? 'bg-amber-50 border-amber-400 text-stone-900 shadow-xs'
                  : 'bg-stone-50/80 border-stone-200 text-stone-700 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  selectedIssueIndex === idx ? 'border-amber-600 bg-amber-600' : 'border-stone-400'
                }`}>
                  {selectedIssueIndex === idx && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </div>
                <span className="font-semibold text-sm">{issue.name}</span>
              </div>
              <span className="text-xs font-bold text-stone-700 bg-white px-2.5 py-1 rounded border border-stone-200">
                {issue.est}
              </span>
            </div>
          ))}
        </div>

        {/* Calculation Result Summary Card */}
        <div className="md:col-span-5 bg-stone-900 rounded-2xl p-6 border border-stone-800 shadow-md text-center flex flex-col justify-between h-full text-white">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-amber-400 bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
              Estimated Service Cost
            </span>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 my-1">
                {currentIssue.est}
              </div>
              <p className="text-xs text-stone-400">Includes labor charge + complete diagnostic check</p>
            </div>

            <div className="bg-stone-800 rounded-xl p-3.5 border border-stone-700 text-left text-xs space-y-2">
              <div className="flex items-center justify-between text-stone-300">
                <span>Warranty Included:</span>
                <strong className="text-emerald-400">{currentIssue.warranty}</strong>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span>Spare Parts:</span>
                <strong className="text-white">100% Genuine OEM</strong>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span>Response Time:</span>
                <strong className="text-amber-300">Doorstep Within 60 Mins</strong>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <a
              href={`tel:+919916207964`}
              className="btn-warm-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 font-bold"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call +91 99162 07964</span>
            </a>
            <a
              href={`https://wa.me/919916207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20a%20quote%20for%20${encodeURIComponent(currentAppliance.title)}%20-${encodeURIComponent(currentIssue.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 text-xs rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              <span>Instant WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
