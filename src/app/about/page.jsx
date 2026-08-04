import { ShieldCheck, Award, Users, CheckCircle2, Wrench, Phone, MessageSquare, HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'About Smart Touch Appliances Bangalore | Trusted Repair & Refurbished Partner',
  description: 'Smart Touch Appliances (www.smarttouchappliances.com) is Bangalore’s leading appliance repair and refurbished retail network with over 15,000 satisfied clients. Call +91 99862 07964.',
};

export default function AboutPage() {
  const highlights = [
    { number: '10+', label: 'Years of Excellence in Bangalore' },
    { number: '15,000+', label: 'Successful Appliance Repairs' },
    { number: '287+', label: 'Localities Serviced Daily' },
    { number: '25-Point', label: 'Refurbished Quality Standard' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-stone-200 bg-gradient-to-b from-amber-50/50 to-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Bangalore's Trusted Home Appliance Partner</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900">
              About <span className="text-gradient-warm">Smart Touch</span> Appliances
            </h1>

            <p className="text-stone-600 text-base sm:text-lg">
              Empowering Bangalore households with honest, fast, and high-quality appliance solutions – from emergency repairs to certified refurbished pre-owned sales and brand new installations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-gradient-warm">{item.number}</span>
              <span className="block text-xs font-semibold text-stone-600">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="glass-card p-8 rounded-3xl border border-stone-200 bg-white space-y-4">
          <h2 className="text-3xl font-extrabold text-stone-900">Our Story & Mission</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Smart Touch Appliances (`www.smarttouchappliances.com`) was founded with a clear objective: to fix the broken home appliance repair industry in Bangalore. Too often, homeowners face delayed technicians, hidden fees, and unreliable spare parts.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed">
            We built a centralized 24/7 service network equipped with background-verified master engineers, transparent fixed pricing, and official written warranties. Additionally, our refurbishing wing gives a second life to quality appliances, helping customers save up to 80% while reducing e-waste.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-amber-200 bg-amber-50/60 space-y-4">
          <h3 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-600" />
            <span>The 25-Point Refurbishment Gold Standard</span>
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed">
            Every pre-owned washing machine and refrigerator we acquire undergoes an exhaustive 25-point inspection test before entering our showroom catalog:
          </p>
          <ul className="space-y-2 text-xs font-semibold text-stone-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full motor load & electrical wiring insulation audit</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Compressor gas pressure & cooling cycle optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ultrasonic deep sanitization & anti-bacterial wash</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>72-hour continuous endurance stress test</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-stone-200 bg-white space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">Experience The Smart Touch Standard Today</h3>
          <p className="text-stone-600 text-sm">Need doorstep service or looking for a certified refurbished appliance?</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a
              href="tel:+919986207964"
              className="btn-warm-primary px-8 py-3.5 text-sm font-extrabold flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call +91 99862 07964</span>
            </a>
            <a
              href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20learn%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 py-3.5 rounded-full flex items-center gap-2 text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
