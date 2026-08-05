import { HelpCircle, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions & Support | Smart Touch Appliances Bangalore',
  description: 'Find answers to common questions about appliance repair response times, pricing, warranties, and refurbished store guarantees. Call +91 99862 07964.',
};

export default function FAQPage() {
  const faqs = [
    { q: 'How fast can a technician visit my home in Bangalore?', a: 'Our service dispatch network covers 287+ Bangalore localities with a 60-minute doorstep arrival guarantee.' },
    { q: 'What payment methods do you accept?', a: 'We accept Cash, UPI (GPay, PhonePe, Paytm), Net Banking, and Credit/Debit cards upon service completion.' },
    { q: 'Do you charge inspection fees if repair is completed?', a: 'No! Inspection fee is completely waived when you proceed with the recommended repair service.' },
    { q: 'What is covered under the refurbished appliance warranty?', a: 'Our 3 to 6 months warranty covers compressor, motor, PCB circuit, and major mechanical components.' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 bg-white text-stone-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-100 bg-gradient-to-b from-sky-50/50 to-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              ❓ Customer FAQ & Help Desk
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-stone-900">
              Frequently Asked Questions
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              Everything you need to know about doorstep repairs, refurbished store warranties, and Bangalore locality dispatch.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-sky-600" />
              <span>{item.q}</span>
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed pl-7">{item.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
