import React from 'react';
import { Award, ShieldCheck, Clock, HeartPulse, Building2 } from 'lucide-react';
import { pharmacistsData } from '../data/mockData';
import {
  AnimatedCounter,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ZoomIn
} from '../components/AnimatedElements';
import PageHeaderBanner from '../components/PageHeaderBanner';

export default function AboutUs({ setCurrentPage, openPrescriptionModal }) {
  return (
    <div className="w-full">
      {/* Page Header / Breadcrumb matching reference design */}
      <PageHeaderBanner
        title="About Pharamedic"
        breadcrumbCurrent="About Us"
        setCurrentPage={setCurrentPage}
        bgImage="/images/banner-about-us.webp"
        bgPosition="center right"
        drawDesign="isometric-cubes"
      />

      {/* Main Story & Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Side with Fade In Left & Image Hover Effect */}
            <FadeInLeft className="lg:col-span-6 relative flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full image-hover-zoom group">
                <img
                  src="/images/portrait-of-a-handsome-pharmacist-working-in-a-pharmacy.webp"
                  alt="Pharmacist at work"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Counter Badge with Zoom In */}
              <ZoomIn delay={0.3} className="absolute -bottom-6 right-2 sm:right-6 z-20">
                <div className="bg-pharmacy-primary text-white p-6 rounded-2xl shadow-xl max-w-xs hover-lift">
                  <h4 className="text-3xl font-extrabold leading-none">
                    <AnimatedCounter to={4} duration={1.5} suffix="+" />
                  </h4>
                  <p className="text-xs text-gray-200 mt-1 uppercase font-bold tracking-wider">
                    Years of Uncompromised Healthcare Service
                  </p>
                </div>
              </ZoomIn>
            </FadeInLeft>

            {/* Right Content with Fade In Right */}
            <FadeInRight delay={0.15} className="lg:col-span-6 space-y-6 flex flex-col justify-center text-left">
              <div className="flex justify-start">
                <span className="badge-subheading">OUR STORY & HERITAGE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-pharmacy-secondary leading-tight">
                Pioneering Safer, More Accessible Medicine for Communities
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Yumi Pharmaceuticals (PVT) Ltd was established with a singular vision: to bridge the gap between doctor diagnosis and patient recovery through compassionate, expert pharmaceutical guidance.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether you need everyday generic medications, complex chronic disease monitoring, or preventative vaccinations, our registered pharmacists ensure every prescription is checked for safety, affordability, and optimal therapeutic efficacy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-pharmacy-bgLight border border-gray-100 flex flex-col justify-between hover-lift">
                  <div>
                    <ShieldCheck size={24} className="text-pharmacy-teal mb-2" />
                    <h4 className="font-bold text-sm text-pharmacy-secondary">100% Genuine</h4>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Directly sourced from licensed manufacturers</p>
                </div>
                <div className="p-5 rounded-2xl bg-pharmacy-bgLight border border-gray-100 flex flex-col justify-between hover-lift">
                  <div>
                    <Clock size={24} className="text-pharmacy-teal mb-2" />
                    <h4 className="font-bold text-sm text-pharmacy-secondary">Express Delivery</h4>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Same-day local prescription delivery available</p>
                </div>
              </div>

              <div className="pt-2 flex justify-start">
                <button
                  onClick={openPrescriptionModal}
                  className="bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-pharma-button transition-all duration-300 btn-hover-effect"
                >
                  Upload Your Prescription
                </button>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-pharmacy-bgLight/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="flex justify-center">
              <span className="badge-subheading">CORE PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pharmacy-secondary">
              What Sets Yumi Pharmaceuticals Apart
            </h2>
            <p className="text-gray-500 text-sm">
              We operate strictly under the highest pharmaceutical compliance standards and clinical care ethics.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <FadeInUp delay={0.05} className="h-full">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-pharma space-y-4 h-full flex flex-col justify-between text-left hover-lift">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-pharmacy-teal flex items-center justify-center mb-4">
                    <HeartPulse size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-pharmacy-secondary mb-2">Patient-Centric Care</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We prioritize your health outcomes over sales. Every patient receives thorough guidance on proper dosages, potential food/drug interactions, and storage guidelines.
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.15} className="h-full">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-pharma space-y-4 h-full flex flex-col justify-between text-left hover-lift">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-pharmacy-teal flex items-center justify-center mb-4">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-pharmacy-secondary mb-2">Affordable Pricing</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Healthcare should never be out of reach. We actively source high-grade generic bio-equivalents and maintain low-cost membership plans to reduce medication costs.
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.25} className="h-full">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-pharma space-y-4 h-full flex flex-col justify-between text-left hover-lift">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-pharmacy-teal flex items-center justify-center mb-4">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-pharmacy-secondary mb-2">Advanced Diagnostics</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our in-house screening stations feature calibrated digital diagnostics for blood glucose, cholesterol panels, and vital screenings with instant reports.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Leadership Pharmacists preview with Fade In Up */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp className="flex justify-center mb-3">
            <span className="badge-subheading">MEET THE TEAM</span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pharmacy-secondary mb-12">
              Licensed Experts Dedicated to Your Health
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pharmacistsData.map((doc, idx) => (
              <FadeInUp key={doc.id} delay={idx * 0.12} className="h-full">
                <div className="bg-pharmacy-bgLight/40 rounded-3xl p-6 border border-gray-100 shadow-sm text-center h-full flex flex-col justify-between hover-lift">
                  <div>
                    <div className="image-hover-zoom w-36 h-36 rounded-2xl mx-auto mb-4 border-2 border-white shadow-md overflow-hidden">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-108" />
                    </div>
                    <h4 className="text-lg font-bold text-pharmacy-secondary">{doc.name}</h4>
                    <p className="text-xs text-pharmacy-teal font-semibold mb-2">{doc.role}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{doc.bio}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
