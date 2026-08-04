import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Wrench, ArrowRight, Clock, Star, HeartHandshake } from 'lucide-react';
import RepairCostEstimator from '@/components/RepairCostEstimator';

export const metadata = {
  title: 'Doorstep Washing Machine & Fridge Repair Bangalore | Smart Touch Appliances',
  description: 'Expert doorstep repair for Washing Machines, Refrigerators, ACs, and Microwaves in Bangalore. Fast 60-min arrival, 100% genuine parts, up to 180 days warranty. Call +91 99862 07964.',
};

export default function ServicesPage() {
  const repairCategories = [
    {
      title: 'Washing Machine Repair & Servicing',
      icon: '🧺',
      types: 'Front Load • Top Load • Semi-Automatic',
      description: 'Is your washing machine vibrating violently, making grinding noise, or failing to drain water? Our master technicians repair all mechanical and electronic faults across LG, Samsung, Whirlpool, Bosch, and IFB.',
      issues: [
        'Motor & spin tub spinning failure',
        'Water leakage from bottom or door seal',
        'Excessive vibration & bearing noise',
        'Motherboard / PCB digital circuit repair',
        'Drum clean & high-pressure descaling'
      ],
      rate: 'Starting ₹349',
      warranty: '90-180 Days Written Warranty'
    },
    {
      title: 'Refrigerator & Fridge Repair',
      icon: '🧊',
      types: 'Single Door • Double Door • Side-by-Side Inverter',
      description: 'Food spoiling due to cooling loss or strange buzzing sound from the compressor? We specialize in quick gas refilling, thermostat calibration, relay fixes, and compressor overhauls.',
      issues: [
        'Complete cooling loss / gas leakage repair',
        'Compressor repair & relay capacitor replacement',
        'Excessive ice formation / defrost timer defect',
        'Water leaking inside vegetable tray',
        'Door rubber gasket replacement'
      ],
      rate: 'Starting ₹399',
      warranty: 'up to 1 Year Warranty'
    },
    {
      title: 'Air Conditioner (AC) Service & Jet Wash',
      icon: '❄️',
      types: 'Split AC • Window AC • Inverter ACs',
      description: 'Beat the heat with our deep foam jet cleaning service and precision gas charging. We restore peak cooling efficiency and eliminate bad odor and water leakage.',
      issues: [
        'High-pressure pump jet wash service',
        'Freon R32/R410 gas leak testing & refill',
        'Indoor unit water leakage on wall',
        'Inverter PCB electronic module fix',
        'Compressor & fan motor replacement'
      ],
      rate: 'Starting ₹599',
      warranty: '60-180 Days Warranty'
    },
    {
      title: 'Microwave Oven Repair',
      icon: '🍲',
      types: 'Solo • Grill • Convection Ovens',
      description: 'Food not heating up or spark inside microwave box? Our technicians quickly fix magnetrons, high-voltage transformers, door interlocks, and touchpads.',
      issues: [
        'Microwave running but food remains cold',
        'Sparking sound inside heating chamber',
        'Touchpad key buttons not working',
        'Glass plate turntable not rotating',
        'Fuse blown / power turning off'
      ],
      rate: 'Starting ₹299',
      warranty: '90 Days Warranty'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Book Service',
      desc: 'Call +91 99862 07964 or send a WhatsApp message with your locality and issue details.'
    },
    {
      step: '02',
      title: '60-Min Arrival',
      desc: 'Our certified master technician arrives at your doorstep in Bangalore fully equipped.'
    },
    {
      step: '03',
      title: 'Free Diagnosis & Quote',
      desc: 'Technician inspects the appliance and provides an accurate, transparent cost estimate.'
    },
    {
      step: '04',
      title: 'Repair & Warranty',
      desc: 'On-the-spot repair using genuine OEM parts backed by our official written warranty.'
    }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-stone-200 bg-gradient-to-b from-amber-50/50 to-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Wrench className="w-4 h-4 text-amber-700" />
              <span>Multi-Brand Doorstep Repair Experts</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900">
              Professional Appliance Repairs In <span className="text-gradient-warm">Bangalore</span>
            </h1>

            <p className="text-stone-600 text-base sm:text-lg">
              Same-day doorstep repair services for Washing Machines, Refrigerators, ACs, and Microwaves across 287+ Bangalore areas with genuine parts and up to 180 days written warranty.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919986207964"
                className="btn-warm-primary px-8 py-4 text-base font-extrabold flex items-center gap-2"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call +91 99862 07964</span>
              </a>
              <a
                href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20need%20doorstep%20appliance%20repair"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 py-4 rounded-full flex items-center gap-2 transition-colors text-base"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Instant WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">Our Comprehensive Repair Services</h2>
          <p className="text-stone-600 text-sm">We fix all major brands: LG, Samsung, Whirlpool, Bosch, IFB, Godrej & Daikin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {repairCategories.map((service, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-stone-200 bg-white flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{service.icon}</span>
                  <span className="bg-amber-100 text-amber-900 border border-amber-200 font-extrabold text-xs px-3 py-1 rounded-full">
                    {service.rate}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-stone-900">{service.title}</h3>
                  <span className="text-xs font-bold text-amber-700">{service.types}</span>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">Common Problems Solved:</h4>
                  <ul className="grid grid-cols-1 gap-2 text-xs text-stone-700">
                    {service.issues.map((issue, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> {service.warranty}
                </span>

                <a
                  href={`tel:+919986207964`}
                  className="btn-warm-primary w-full sm:w-auto px-6 py-2.5 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call +91 99862 07964</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Estimator Component Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <RepairCostEstimator />
      </section>

      {/* Step by Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-stone-900">4 Easy Steps To Get Your Appliance Fixed</h2>
          <p className="text-stone-600 text-sm">Hassle-free service designed around your convenience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white relative space-y-3">
              <span className="text-4xl font-black text-amber-200 absolute top-4 right-4">{step.step}</span>
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center font-bold text-amber-800">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-stone-900">{step.title}</h3>
              <p className="text-stone-600 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
