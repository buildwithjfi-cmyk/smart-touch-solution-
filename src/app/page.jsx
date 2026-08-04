import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, Clock, Award, Star, Wrench, RefreshCw, ShoppingBag, CheckCircle, ArrowRight, Sparkles, MapPin, HeartHandshake } from 'lucide-react';
import AreaCheckerWidget from '@/components/AreaCheckerWidget';
import RepairCostEstimator from '@/components/RepairCostEstimator';
import HeroAnimation from '@/components/HeroAnimation';

export default function HomePage() {
  const whyChooseUs = [
    {
      title: 'Same-Day Doorstep Service',
      desc: 'Technicians arrive at your home within 60 minutes across 287+ Bangalore areas with complete toolkit.',
      icon: Clock,
      gradient: 'bg-amber-100 text-amber-800'
    },
    {
      title: 'Certified Master Technicians',
      desc: 'Background-verified, company-certified engineers trained on all major brands like LG, Samsung, Whirlpool, Bosch & IFB.',
      icon: Award,
      gradient: 'bg-orange-100 text-orange-800'
    },
    {
      title: '100% Genuine Spare Parts',
      desc: 'We use only factory-original spare parts backed by standard manufacturer replacement warranty.',
      icon: ShieldCheck,
      gradient: 'bg-emerald-100 text-emerald-800'
    },
    {
      title: 'Up to 6 Months Service Warranty',
      desc: 'Complete peace of mind with our written service warranty on both labor and replaced components.',
      icon: CheckCircle,
      gradient: 'bg-amber-100 text-amber-800'
    },
    {
      title: 'Refurbished Quality Certification',
      desc: 'Our pre-owned appliances undergo a strict 25-point inspection test for like-new performance at up to 80% savings.',
      icon: RefreshCw,
      gradient: 'bg-stone-200 text-stone-800'
    },
    {
      title: 'Transparent Pricing Guarantee',
      desc: 'Upfront quotes before starting work with zero hidden fees or unexpected diagnostic costs.',
      icon: HeartHandshake,
      gradient: 'bg-amber-100 text-amber-800'
    }
  ];

  const testimonials = [
    {
      name: 'Rohan Sharma',
      location: 'Indiranagar, Bangalore',
      appliance: 'LG Washing Machine Repair',
      text: 'Smart Touch Appliances sent a friendly technician within 45 minutes of calling +91 99862 07964! Fixed the drum noise and drainage issue on the spot. Very welcoming and polite!',
      rating: 5,
    },
    {
      name: 'Ananya Rao',
      location: 'Koramangala, Bangalore',
      appliance: 'Refurbished Samsung Fridge Purchase',
      text: 'Bought a certified refurbished Samsung double door fridge from Smart Touch Appliances. It looks brand new, cools perfectly, and saved me over ₹15,000!',
      rating: 5,
    },
    {
      name: 'Vikram Venkatesh',
      location: 'Whitefield, Bangalore',
      appliance: 'Daikin AC Jet Washing & Service',
      text: 'Top notch AC servicing! High pressure jet wash cleared all dust and cooling returned like day one. Highly recommend Smart Touch Appliances.',
      rating: 5,
    }
  ];

  const faqs = [
    {
      q: 'How fast can a Smart Touch Appliances technician visit my home in Bangalore?',
      a: 'We offer rapid 60-minute doorstep service dispatch across 287+ Bangalore areas including Indiranagar, Koramangala, Whitefield, HSR Layout, Electronic City, and Yelahanka.'
    },
    {
      q: 'What warranty is provided on appliance repairs?',
      a: 'All repairs come with an official written service warranty ranging from 90 days to 180 days covering both replaced parts and technician labor.'
    },
    {
      q: 'Are your refurbished appliances thoroughly tested?',
      a: 'Yes! Every certified refurbished appliance undergoes a rigorous 25-point technical inspection test, complete deep sanitization, and includes a 3 to 6 months warranty.'
    },
    {
      q: 'Which appliance brands do you service?',
      a: 'We service all major international and national brands including LG, Samsung, Whirlpool, Bosch, IFB, Godrej, Haier, Panasonic, Daikin, and Voltas.'
    }
  ];

  return (
    <div className="space-y-20 pb-16 overflow-hidden bg-white text-stone-900">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-stone-200 bg-gradient-to-b from-amber-50/60 via-white to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-amber-900 shadow-xs">
              <HeartHandshake className="w-4 h-4 text-amber-700" />
              <span>Bangalore's Reliable Appliance Partner • www.smarttouchappliances.com</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-[1.15]">
              Your <span className="text-gradient-warm">One-Stop</span><br />
              Appliance Destination
            </h1>

            <p className="text-stone-600 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From emergency doorstep repairs to certified refurbished appliances and brand new home sales – Smart Touch Appliances provides warm, honest, and expert care in Bangalore.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-2">
              <div className="glass-card p-3.5 rounded-xl border border-stone-200 text-center bg-white">
                <span className="block text-2xl sm:text-3xl font-black text-amber-600">24/7</span>
                <span className="text-[11px] font-semibold text-stone-600">Doorstep Care</span>
              </div>
              <div className="glass-card p-3.5 rounded-xl border border-stone-200 text-center bg-white">
                <span className="block text-2xl sm:text-3xl font-black text-amber-700">287+</span>
                <span className="text-[11px] font-semibold text-stone-600">Bangalore Localities</span>
              </div>
              <div className="glass-card p-3.5 rounded-xl border border-stone-200 text-center bg-white">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-700">15k+</span>
                <span className="text-[11px] font-semibold text-stone-600">Happy Families</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="tel:+919986207964"
                className="btn-warm-primary w-full sm:w-auto px-8 py-4 text-base sm:text-lg flex items-center justify-center gap-3 font-extrabold shadow-md"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call Hotline: +91 99862 07964</span>
              </a>

              <a
                href="https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20want%20to%20book%20a%20doorstep%20repair%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 py-4 rounded-full flex items-center justify-center gap-3 text-base sm:text-lg shadow-md transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book Service Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: New Levitating Hero Animation Component */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* Core 3 Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>🤝 Complete Appliance Care</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900">
            Our Three Core Pillars
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Whether your current appliance needs fixing, or you want to upgrade to a certified refurbished model or buy brand new – Smart Touch Appliances is your single point of trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Expert Repair */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 border border-stone-200 bg-white relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-600"></div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 text-3xl">
                🔧
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Expert Appliance Repair</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Same-day repair services for washing machines, fridges, split/window ACs, and microwaves using 100% genuine OEM parts with up to 180 days warranty.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-stone-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Free doorstep diagnostic inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>60-minute emergency arrival across Bangalore</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Upfront estimates with zero hidden charges</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/services"
                className="btn-warm-primary w-full py-3.5 text-center text-sm flex items-center justify-center gap-2 font-bold"
              >
                <span>Explore Repair Services</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Quality Refurbished */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 border border-stone-200 bg-white relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-orange-600"></div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 text-3xl">
                ♻️
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Certified Refurbished</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Certified pre-owned washing machines and refrigerators that perform like new. Save up to 80% with our written 3-6 months warranty.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-stone-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Rigorous 25-Point quality inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Deep ultrasonic cleaning & sanitized</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Includes free delivery & doorstep installation</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/shop"
                className="btn-warm-terracotta w-full py-3.5 text-center text-sm flex items-center justify-center gap-2 font-bold"
              >
                <span>Browse Refurbished Store</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Brand New Appliances */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 border border-stone-200 bg-white relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-stone-700"></div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-800 text-3xl">
                🆕
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Brand New Appliance Sales</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Get the latest 2026 models from LG, Samsung, Whirlpool, Bosch, and Daikin with full brand manufacturer warranties and free setup.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-stone-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-stone-700 shrink-0" />
                  <span>100% Original factory sealed boxes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-stone-700 shrink-0" />
                  <span>Best price guarantee vs online marketplaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-stone-700 shrink-0" />
                  <span>Old appliance exchange buyback program</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/shop"
                className="bg-stone-900 hover:bg-stone-800 text-white font-bold w-full py-3.5 rounded-full text-center text-sm flex items-center justify-center gap-2 shadow transition-all"
              >
                <span>Shop New Appliances</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Coverage Checker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AreaCheckerWidget />
      </section>

      {/* Interactive Cost Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <RepairCostEstimator />
      </section>

      {/* Why Choose Smart Touch Appliances */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full text-amber-900 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-amber-700" />
            <span>The Smart Touch Difference</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900">
            Why Bangalore Families Trust Us
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            We hold ourselves to the highest standards of technical skill, honest pricing, and friendly service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-stone-200 space-y-3 bg-white"
              >
                <div className={`w-12 h-12 rounded-xl ${item.gradient} flex items-center justify-center font-bold shadow-xs`}>
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 fill-amber-600 text-amber-600" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
            Loved By 15,000+ Bangalore Households
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm italic leading-relaxed">"{review.text}"</p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{review.name}</h4>
                  <p className="text-amber-700 font-semibold">{review.location}</p>
                </div>
                <span className="bg-stone-100 px-2.5 py-1 rounded text-stone-600 font-semibold border border-stone-200">
                  {review.appliance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-stone-900">Frequently Asked Questions</h2>
          <p className="text-stone-600 text-sm">Everything you need to know about our repair & refurbished services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl border border-stone-200 bg-white space-y-2">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <span className="text-amber-600 font-black">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
