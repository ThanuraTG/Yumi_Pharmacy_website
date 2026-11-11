import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Zap, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { membershipTiers } from '../data/mockData';
import { FadeInDown, FadeInUp, ZoomInUp, FadeIn } from '../components/AnimatedElements';

export default function MembershipPage({ setCurrentPage }) {
  const [joinedPlan, setJoinedPlan] = useState(null);

  return (
    <div className="w-full">
      {/* Header with Fade In Down */}
      <div className="bg-pharmacy-secondary text-white py-16 sm:py-20 relative overflow-hidden">
        <FadeInDown className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Yumi Pharmaceuticals Membership Program</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Unlock exclusive healthcare savings, priority refills, and free home delivery for you and your family.
          </p>
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-pharmacy-teal mt-4">
            <button onClick={() => setCurrentPage('home')} className="hover:underline">Homepage</button>
            <span>/</span>
            <span className="text-gray-300">Membership</span>
          </div>
        </FadeInDown>
      </div>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="badge-subheading justify-center">CHOOSE YOUR TIER</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pharmacy-secondary">
              Transparent Plans Designed to Save You Money
            </h2>
            <p className="text-gray-500 text-sm">
              Save up to $600 annually on routine prescriptions, over-the-counter care, and diagnostic screenings.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {membershipTiers.map((tier, idx) => {
              const CardContent = (
                <div 
                  className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative h-full hover-lift ${
                    tier.isPopular 
                      ? 'bg-gradient-to-b from-[#FAFDFD] to-white border-2 border-pharmacy-teal shadow-2xl md:-translate-y-3' 
                      : 'bg-white border border-gray-100 shadow-pharma hover:shadow-lg'
                  }`}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-pharmacy-teal text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-extrabold text-pharmacy-secondary mb-2">{tier.name}</h3>
                    <p className="text-gray-500 text-xs mb-6 min-h-[32px]">{tier.description}</p>

                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <span className="text-4xl sm:text-5xl font-extrabold text-pharmacy-primary">{tier.price}</span>
                      <span className="text-xs text-gray-400 ml-1 font-semibold">/{tier.period}</span>
                    </div>

                    <ul className="space-y-3.5 mb-8">
                      {tier.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start space-x-3 text-sm text-gray-600">
                          <CheckCircle2 size={17} className="text-pharmacy-teal shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <button
                      onClick={() => setJoinedPlan(tier.name)}
                      className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 btn-hover-effect ${
                        tier.isPopular 
                          ? 'bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white shadow-pharma-button' 
                          : 'bg-pharmacy-bgLight hover:bg-pharmacy-teal hover:text-white text-pharmacy-secondary'
                      }`}
                    >
                      {joinedPlan === tier.name ? 'Active Plan Selected!' : tier.buttonText}
                    </button>
                  </div>
                </div>
              );

              return tier.isPopular ? (
                <ZoomInUp key={idx} delay={0.15} className="h-full">
                  {CardContent}
                </ZoomInUp>
              ) : (
                <FadeInUp key={idx} delay={idx * 0.1} className="h-full">
                  {CardContent}
                </FadeInUp>
              );
            })}
          </div>

          {joinedPlan && (
            <FadeIn className="mt-8 p-4 bg-teal-50 border border-pharmacy-teal/30 rounded-2xl text-center text-pharmacy-primary text-sm font-bold">
              You selected the <span className="underline">{joinedPlan}</span> tier! Our team will activate your member discount code on your next pharmacy order.
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}

