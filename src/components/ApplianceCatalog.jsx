"use client";

import { useState } from 'react';
import { Tag, ShieldCheck, Check, Sparkles, Phone, MessageSquare, Star } from 'lucide-react';

const productsList = [
  {
    id: 1,
    name: 'LG 7.5 Kg Inverter Fully Automatic Front Load Washing Machine',
    category: 'washing_machine',
    condition: 'refurbished',
    brand: 'LG',
    price: '₹14,999',
    originalPrice: '₹38,990',
    discount: '61% OFF',
    warranty: '6 Months Full Warranty',
    inspection: '25-Point Quality Certified',
    rating: 4.9,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80',
    features: ['6 Motion DD Technology', 'Steam Wash', 'Inverter Direct Drive', 'Energy Saver A+++']
  },
  {
    id: 2,
    name: 'Samsung 253L 3-Star Double Door Refrigerator',
    category: 'refrigerator',
    condition: 'refurbished',
    brand: 'Samsung',
    price: '₹12,499',
    originalPrice: '₹29,990',
    discount: '58% OFF',
    warranty: '6 Months Warranty',
    inspection: '25-Point Quality Certified',
    rating: 4.8,
    reviews: 62,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80',
    features: ['Digital Inverter Compressor', 'Frost Free Cooling', 'All Round Cooling', 'Toughened Glass Shelves']
  },
  {
    id: 3,
    name: 'Whirlpool 7.0 Kg Royal Fully Automatic Top Load Washing Machine',
    category: 'washing_machine',
    condition: 'refurbished',
    brand: 'Whirlpool',
    price: '₹9,899',
    originalPrice: '₹21,500',
    discount: '54% OFF',
    warranty: '3 Months Warranty',
    inspection: '25-Point Quality Certified',
    rating: 4.7,
    reviews: 49,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80',
    features: ['Spiro Wash Motion', 'ZPM Hard Water Wash', 'Auto Tub Clean', 'Child Lock']
  },
  {
    id: 4,
    name: 'Daikin 1.5 Ton 5-Star Inverter Split AC (Brand New)',
    category: 'ac',
    condition: 'new',
    brand: 'Daikin',
    price: '₹37,990',
    originalPrice: '₹48,000',
    discount: '20% OFF',
    warranty: '1 Year Comprehensive + 10 Yr Compressor',
    inspection: 'Brand New Sealed Box',
    rating: 5.0,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    features: ['Dew Clean Technology', 'Triple Display', '3D Airflow', 'PM 2.5 Filter']
  },
  {
    id: 5,
    name: 'LG 260L Frost Free Double Door Refrigerator (Certified Used)',
    category: 'refrigerator',
    condition: 'refurbished',
    brand: 'LG',
    price: '₹13,999',
    originalPrice: '₹32,000',
    discount: '56% OFF',
    warranty: '6 Months Warranty',
    inspection: '25-Point Quality Certified',
    rating: 4.9,
    reviews: 73,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80',
    features: ['Door Cooling+', 'Smart Diagnosis', 'Auto Smart Connect', 'Express Freeze']
  },
  {
    id: 6,
    name: 'Bosch 8.0 Kg Inverter Front Load Washing Machine (New Model)',
    category: 'washing_machine',
    condition: 'new',
    brand: 'Bosch',
    price: '₹34,490',
    originalPrice: '₹46,000',
    discount: '25% OFF',
    warranty: '2 Years Comprehensive',
    inspection: 'Brand New Factory Sealed',
    rating: 4.9,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80',
    features: ['EcoSilence Drive', 'AntiVibration Design', 'ActiveWater Plus', 'VarioDrum']
  }
];

export default function ApplianceCatalog() {
  const [activeCondition, setActiveCondition] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = productsList.filter(product => {
    if (activeCondition !== 'all' && product.condition !== activeCondition) return false;
    if (activeCategory !== 'all' && product.category !== activeCategory) return false;
    return true;
  });

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* Category Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-4 rounded-2xl border border-stone-200 bg-white">
        {/* Condition Selector */}
        <div className="flex items-center gap-2 bg-stone-100 p-1.5 rounded-xl border border-stone-200 w-full sm:w-auto">
          <button
            onClick={() => setActiveCondition('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeCondition === 'all'
                ? 'bg-stone-900 text-white shadow'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Appliances
          </button>
          <button
            onClick={() => setActiveCondition('refurbished')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              activeCondition === 'refurbished'
                ? 'bg-amber-600 text-white shadow'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <span>Certified Refurbished</span>
            <span className="bg-amber-100 text-amber-900 text-[10px] px-1.5 py-0.5 rounded font-extrabold">Up to 80% Off</span>
          </button>
          <button
            onClick={() => setActiveCondition('new')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeCondition === 'new'
                ? 'bg-stone-800 text-white shadow'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Brand New Sales
          </button>
        </div>

        {/* Appliance Category Tabs */}
        <div className="flex items-center gap-2 text-xs overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-full border whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'border-amber-600 text-amber-800 bg-amber-50 font-bold'
                : 'border-stone-200 text-stone-600 hover:text-stone-900'
            }`}
          >
            All Types
          </button>
          <button
            onClick={() => setActiveCategory('washing_machine')}
            className={`px-3 py-1.5 rounded-full border whitespace-nowrap transition-all ${
              activeCategory === 'washing_machine'
                ? 'border-amber-600 text-amber-800 bg-amber-50 font-bold'
                : 'border-stone-200 text-stone-600 hover:text-stone-900'
            }`}
          >
            Washing Machines
          </button>
          <button
            onClick={() => setActiveCategory('refrigerator')}
            className={`px-3 py-1.5 rounded-full border whitespace-nowrap transition-all ${
              activeCategory === 'refrigerator'
                ? 'border-amber-600 text-amber-800 bg-amber-50 font-bold'
                : 'border-stone-200 text-stone-600 hover:text-stone-900'
            }`}
          >
            Refrigerators
          </button>
          <button
            onClick={() => setActiveCategory('ac')}
            className={`px-3 py-1.5 rounded-full border whitespace-nowrap transition-all ${
              activeCategory === 'ac'
                ? 'border-amber-600 text-amber-800 bg-amber-50 font-bold'
                : 'border-stone-200 text-stone-600 hover:text-stone-900'
            }`}
          >
            Air Conditioners
          </button>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-stone-200 bg-white group"
          >
            <div>
              {/* Product Image Header */}
              <div className="relative h-56 w-full bg-stone-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>

                {/* Condition Badge */}
                <div className="absolute top-3 left-3">
                  {product.condition === 'refurbished' ? (
                    <span className="bg-amber-600 text-white font-black text-[11px] px-3 py-1 rounded-full shadow flex items-center gap-1 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 fill-white" />
                      Certified Refurbished
                    </span>
                  ) : (
                    <span className="bg-stone-900 text-white font-black text-[11px] px-3 py-1 rounded-full shadow flex items-center gap-1 uppercase tracking-wider">
                      <Tag className="w-3.5 h-3.5 text-amber-400" />
                      Brand New 2026
                    </span>
                  )}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-amber-700 font-bold text-xs px-2.5 py-1 rounded-full border border-stone-200 flex items-center gap-1 shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-stone-500">({product.reviews})</span>
                </div>

                {/* Discount Tag */}
                <div className="absolute bottom-3 left-3 bg-amber-500 text-stone-950 font-extrabold text-xs px-2.5 py-0.5 rounded uppercase">
                  {product.discount}
                </div>
              </div>

              {/* Product Details Content */}
              <div className="p-5 space-y-4">
                <div>
                  <div className="text-xs text-amber-700 font-bold uppercase tracking-wider mb-1">
                    {product.brand} • {product.category.replace('_', ' ')}
                  </div>
                  <h4 className="text-lg font-extrabold text-stone-900 line-clamp-2 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h4>
                </div>

                {/* Pricing Box */}
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-stone-900">{product.price}</span>
                  <span className="text-sm line-through text-stone-400">{product.originalPrice}</span>
                  <span className="text-xs text-emerald-700 font-bold">Free Doorstep Delivery</span>
                </div>

                {/* Warranty & Inspection Badges */}
                <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-stone-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Warranty:</strong> {product.warranty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <Check className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Quality Standard:</strong> {product.inspection}</span>
                  </div>
                </div>

                {/* Key Features List */}
                <ul className="space-y-1 text-xs text-stone-600">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-5 pt-0 grid grid-cols-2 gap-2">
              <a
                href={`tel:+919986207964`}
                className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors border border-stone-200"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call +91 99862 07964</span>
              </a>
              <a
                href={`https://wa.me/919986207964?text=Hi%20Smart%20Touch%20Appliances,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}%20at%20${encodeURIComponent(product.price)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
