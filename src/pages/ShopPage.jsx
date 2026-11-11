import React, { useState } from 'react';
import { productsData } from '../data/mockData';
import { Star, ShoppingBag, Check, Filter, Search } from 'lucide-react';
import { FadeInDown, FadeInUp, ZoomInUp } from '../components/AnimatedElements';

export default function ShopPage({ addToCart, setCurrentPage, openPrescriptionModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [recentlyAddedId, setRecentlyAddedId] = useState(null);

  const categories = ['All', 'Health Products', 'Cardio Care', 'Medicines', 'Beauty Care'];

  const filteredProducts = productsData.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setRecentlyAddedId(product.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Header with Fade In Down */}
      <div className="bg-pharmacy-secondary text-white py-16 sm:py-20 relative overflow-hidden">
        <FadeInDown className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Online Pharmacy Store</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Order certified vitamins, essential medications, and healthcare products with express doorstep delivery.
          </p>
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-pharmacy-teal mt-4">
            <button onClick={() => setCurrentPage('home')} className="hover:underline">Homepage</button>
            <span>/</span>
            <span className="text-gray-300">Shop Online</span>
          </div>
        </FadeInDown>
      </div>

      {/* Main Shop Container */}
      <section className="py-16 bg-pharmacy-bgLight/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar & Search */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs with Hover Transition */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ${
                    selectedCategory === cat 
                      ? 'bg-pharmacy-teal text-white shadow-sm' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none transition-all"
              />
              <Search size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Products Grid with Fade In Up, Image Hover Effect & Hover Transition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredProducts.map((p, idx) => (
              <FadeInUp key={p.id} delay={(idx % 3) * 0.08} className="h-full">
                <div 
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/40 group flex flex-col justify-between h-full text-left"
                >
                  <div>
                    <div className="relative overflow-hidden aspect-4/3 bg-gray-50 image-hover-zoom">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                      />
                      {p.badge && (
                        <span className="absolute top-4 left-4 bg-pharmacy-primary text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md z-10">
                          {p.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-6 space-y-2">
                      <span className="text-[11px] font-bold text-pharmacy-teal uppercase tracking-wider block">
                        {p.category}
                      </span>
                      <h3 className="text-lg font-bold text-pharmacy-secondary group-hover:text-pharmacy-teal transition-colors">
                        {p.name}
                      </h3>
                      
                      <div className="flex items-center space-x-1 text-amber-400 pt-1">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-bold text-gray-600">{p.rating} / 5.0</span>
                      </div>

                      <div className="pt-3 flex items-baseline space-x-2">
                        <span className="text-2xl font-extrabold text-pharmacy-secondary">
                          ${p.price.toFixed(2)}
                        </span>
                        {p.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ${p.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleAddToCart(p)}
                      className={`w-full h-11 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 btn-hover-effect ${
                        recentlyAddedId === p.id 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white shadow-pharma-button'
                      }`}
                    >
                      {recentlyAddedId === p.id ? (
                        <>
                          <Check size={16} />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={16} />
                          <span>Add To Shopping Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 animate-fade-in">
              <p className="text-gray-500 font-medium">No pharmacy products match your criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-sm font-bold text-pharmacy-teal hover:underline inline-block"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Rx Prescription Banner with Zoom In Up */}
          <ZoomInUp delay={0.15}>
            <div className="mt-16 bg-pharmacy-secondary text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl hover-lift">
              <div className="text-left">
                <span className="text-pharmacy-accent text-xs font-bold uppercase tracking-widest block mb-2">Prescription Drugs</span>
                <h3 className="text-2xl font-extrabold text-white">Looking for a specific prescription medicine?</h3>
                <p className="text-gray-300 text-sm mt-1">Upload your doctor’s slip directly and our pharmacist will fill it for you.</p>
              </div>
              <button
                onClick={openPrescriptionModal}
                className="bg-pharmacy-teal hover:bg-white hover:text-pharmacy-secondary text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all whitespace-nowrap shadow-md shrink-0 btn-hover-effect"
              >
                Upload Doctor Prescription
              </button>
            </div>
          </ZoomInUp>
        </div>
      </section>
    </div>
  );
}
