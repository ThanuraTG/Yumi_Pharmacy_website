import React from 'react';
import { pharmacistsData } from '../data/mockData';
import { Award, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { FadeInDown, FadeInUp } from '../components/AnimatedElements';

export default function PharmacistsPage({ setCurrentPage, openPrescriptionModal }) {
  return (
    <div className="w-full">
      {/* Header with Fade In Down */}
      <div className="bg-pharmacy-secondary text-white py-16 sm:py-20 relative overflow-hidden">
        <FadeInDown className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Our Dedicated Pharmacists</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Experienced medical professionals committed to guiding your family toward optimal health and vitality.
          </p>
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-pharmacy-teal mt-4">
            <button onClick={() => setCurrentPage('home')} className="hover:underline">Homepage</button>
            <span>/</span>
            <span className="text-gray-300">Pharmacists</span>
          </div>
        </FadeInDown>
      </div>

      {/* Team Details with Fade In Up & Image Hover Effect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pharmacistsData.map((doc, idx) => (
              <FadeInUp key={doc.id} delay={idx * 0.12} className="h-full">
                <div 
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/40 group flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="relative overflow-hidden aspect-4/3 image-hover-zoom">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-pharmacy-primary flex items-center gap-1 shadow-sm z-10">
                        <Award size={14} className="text-pharmacy-teal" />
                        <span>{doc.experience}</span>
                      </div>
                    </div>

                    <div className="p-7 space-y-3">
                      <h3 className="text-2xl font-bold text-pharmacy-secondary group-hover:text-pharmacy-teal transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-pharmacy-teal">
                        {doc.role}
                      </p>
                      <p className="text-xs font-medium text-gray-400">
                        Specialty: <span className="text-pharmacy-secondary">{doc.specialty}</span>
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed pt-2">
                        {doc.bio}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                    <div className="flex space-x-2.5 text-gray-400">
                      <a href="#" className="hover:text-pharmacy-teal hover:scale-110 transition-all"><Facebook size={16} /></a>
                      <a href="#" className="hover:text-pharmacy-teal hover:scale-110 transition-all"><Twitter size={16} /></a>
                      <a href="#" className="hover:text-pharmacy-teal hover:scale-110 transition-all"><Linkedin size={16} /></a>
                      <a href="#" className="hover:text-pharmacy-teal hover:scale-110 transition-all"><Instagram size={16} /></a>
                    </div>
                    <button
                      onClick={openPrescriptionModal}
                      className="text-xs font-bold bg-teal-50 text-pharmacy-teal hover:bg-pharmacy-teal hover:text-white px-3.5 py-2 rounded-lg transition-colors btn-hover-effect"
                    >
                      Consult
                    </button>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Pharmacist Consultation CTA with Zoom In Up */}
          <ZoomInUp delay={0.15}>
            <div className="mt-20 bg-gradient-to-r from-[#EEF6F6] to-white p-8 sm:p-12 rounded-3xl border border-pharmacy-teal/20 flex flex-col md:flex-row items-center justify-between gap-8 hover-lift">
              <div className="max-w-xl space-y-2">
                <span className="badge-subheading">DIRECT ADVICE</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-pharmacy-secondary">
                  Need to discuss drug interactions or special compounding?
                </h3>
                <p className="text-gray-500 text-sm">
                  Our senior clinical pharmacists offer private, confidential 15-minute consultations at no cost.
                </p>
              </div>
              <button
                onClick={openPrescriptionModal}
                className="bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white px-8 py-4 rounded-xl font-bold text-sm shadow-pharma-button whitespace-nowrap btn-hover-effect"
              >
                Request Free Consultation
              </button>
            </div>
          </ZoomInUp>
        </div>
      </section>
    </div>
  );
}

