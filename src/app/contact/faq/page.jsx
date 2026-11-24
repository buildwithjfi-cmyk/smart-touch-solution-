import { HelpCircle, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  alternates: { canonical: '/contact/faq' },
  title: 'Frequently Asked Questions & Support | Smart Touch Appliances Bangalore',
  description: 'Find answers to common questions about appliance repair response times, inspection charges, estimates, and warranty. Call +91 99162 07964.',
};

export default function FAQPage() {
  const faqs = [
    { q: 'Do you come to my home?', a: 'Yes. We provide doorstep service across Bangalore: our technician visits your home and repairs the appliance there.' },
    { q: 'What payment methods do you accept?', a: 'We accept Cash, UPI (GPay, PhonePe, Paytm), Net Banking, and Credit/Debit cards upon service completion.' },
    { q: 'Is there an inspection charge?', a: 'Yes, a flat inspection charge of ₹200 applies for the technician visit and diagnosis of your appliance.' },
    { q: 'Will I know the repair cost before work starts?', a: 'Yes. Before taking up any work, we give you an estimate. The repair begins only after you approve it.' },
    { q: 'What warranty do I get after a repair?', a: 'Every repair we complete comes with a 365-day warranty.' }
  ];

  // Built from the same questions shown on the page, as Google requires
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="space-y-10 sm:space-y-16 pb-12 sm:pb-16 pt-4 sm:pt-8 bg-white text-stone-900">
      <JsonLd data={faqSchema} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 bg-sky-50 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-sky-100 text-sky-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              ❓ Customer FAQ & Help Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              Frequently Asked Questions
            </h1>
            <p className="text-stone-700 text-base sm:text-lg">
              Everything you need to know about doorstep repairs, inspection charges, warranty, and Bangalore locality dispatch.
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
            <p className="text-stone-700 text-sm leading-relaxed pl-7">{item.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
