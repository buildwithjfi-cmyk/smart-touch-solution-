import { ShieldCheck, CheckCircle2, Award, Phone } from 'lucide-react';

export const metadata = {
  title: '25-Point Refurbishment Quality Inspection Standard | Smart Touch Appliances',
  description: 'Learn about our 25-point technical inspection standard for certified pre-owned washing machines and refrigerators in Bangalore. Call +91 99162 07964.',
};

export default function QualityInspectionPage() {
  const steps = [
    { title: 'Electrical Insulation & PCB Test', desc: 'Motherboard circuit audit, voltage surge protection, and ground earth safety.' },
    { title: 'Motor & Compressor Load Stress', desc: '72-hour continuous endurance run under peak temperature & load conditions.' },
    { title: 'Ultrasonic Deep Sanitization', desc: 'High-pressure anti-bacterial cleaning eliminating soap sludge and odor.' },
    { title: 'Freon Gas Leak Testing', desc: 'Nitrogen pressure leak check on copper joints and expansion valves.' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-100 bg-gradient-to-b from-sky-50/50 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              🛡️ Quality Assurance Gold Standard
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-stone-900">
              The 25-Point Inspection Protocol
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              Every pre-owned appliance at Smart Touch Appliances undergoes rigorous engineering tests before earning our certified warranty badge.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>{item.title}</span>
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
