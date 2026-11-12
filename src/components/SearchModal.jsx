import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { productsData, servicesData, blogPostsData } from '../data/mockData';
import { ZoomIn } from './AnimatedElements';

export default function SearchModal({ isOpen, onClose, setCurrentPage, addToCart }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim() 
    ? productsData.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredServices = query.trim()
    ? servicesData.filter(s => s.title.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredPosts = query.trim()
    ? blogPostsData.filter(b => b.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSelectService = () => {
    setCurrentPage('services');
    onClose();
  };

  const handleSelectShop = () => {
    setCurrentPage('shop');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <ZoomIn className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100 flex flex-col max-h-[80vh]">
        {/* Search input bar */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center space-x-3 bg-pharmacy-bgLight/50">
          <Search size={22} className="text-pharmacy-teal shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicines, vitamins, screening services, blogs..."
            className="w-full bg-transparent text-base sm:text-lg text-pharmacy-secondary font-medium placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-gray-400 hover:text-gray-600">
              <X size={18} />
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-pharmacy-secondary rounded-lg hover:bg-gray-200/50"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {!query.trim() ? (
            <div className="text-center py-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Popular Searches</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Generic Medicine', 'Vaccination', 'Blood Pressure Check', 'Multivitamin', 'Cardio Care', 'Allergy Relief'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-pharmacy-teal hover:text-white text-xs font-medium text-gray-700 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Product Matches */}
              {filteredProducts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-pharmacy-teal mb-3">
                    Pharmacy Products ({filteredProducts.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredProducts.map(p => (
                      <div key={p.id} className="p-3 border border-gray-100 hover:border-pharmacy-teal/40 rounded-xl flex items-center justify-between gap-3 hover:shadow-sm transition-all bg-white">
                        <div className="flex items-center space-x-3 overflow-hidden">
                          <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded-lg shrink-0" />
                          <div className="truncate">
                            <p className="text-sm font-semibold text-pharmacy-secondary truncate">{p.name}</p>
                            <p className="text-xs text-pharmacy-teal font-bold">${p.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => { addToCart(p); onClose(); }}
                          className="px-3 py-1 bg-pharmacy-primary text-white text-xs font-bold rounded-lg hover:bg-pharmacy-teal shrink-0"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Matches */}
              {filteredServices.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-pharmacy-teal mb-3">
                    Clinical Services ({filteredServices.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredServices.map(s => (
                      <div 
                        key={s.id} 
                        onClick={handleSelectService}
                        className="p-3 border border-gray-100 hover:border-pharmacy-teal/40 rounded-xl flex items-center justify-between cursor-pointer hover:bg-pharmacy-bgLight/40 transition-all"
                      >
                        <div>
                          <p className="text-sm font-bold text-pharmacy-secondary">{s.title}</p>
                          <p className="text-xs text-gray-500 line-clamp-1">{s.description}</p>
                        </div>
                        <ArrowRight size={16} className="text-pharmacy-teal shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Matches */}
              {filteredPosts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-pharmacy-teal mb-3">
                    Health Articles ({filteredPosts.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredPosts.map(b => (
                      <div 
                        key={b.id} 
                        onClick={() => { setCurrentPage('blog'); onClose(); }}
                        className="p-3 border border-gray-100 rounded-xl flex items-center justify-between cursor-pointer hover:bg-pharmacy-bgLight/40"
                      >
                        <p className="text-sm font-semibold text-pharmacy-secondary truncate">{b.title}</p>
                        <span className="text-xs text-gray-400 shrink-0 ml-2">{b.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredProducts.length === 0 && filteredServices.length === 0 && filteredPosts.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500 text-sm">No matches found for "{query}".</p>
                  <button 
                    onClick={handleSelectShop}
                    className="mt-3 text-xs font-bold text-pharmacy-teal hover:underline inline-flex items-center gap-1"
                  >
                    <span>Browse all store items</span> <ArrowRight size={12} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </ZoomIn>
    </div>
  );
}

