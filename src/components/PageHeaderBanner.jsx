import React from 'react';
import { FadeInDown } from './AnimatedElements';

/**
 * Universal Page Header Banner
 * Themed with the user's specified #336869 clinical teal color family (replacing blue):
 * - Keeps the existing background image intact
 * - Applied rich #336869 teal gradient overlay (#254E4F -> #336869 -> #4A8586)
 * - Matching teal-tinted molecular hexagonal grid pattern
 * - Crisp white typography with soft teal breadcrumb accents
 */
export default function PageHeaderBanner({
  title,
  breadcrumbCurrent,
  setCurrentPage
}) {
  return (
    <div
      className="relative w-full py-14 sm:py-18 md:py-20 lg:py-22 bg-cover bg-center overflow-hidden border-b border-[#336869]/30 shadow-inner"
      style={{ backgroundImage: "url('/images/blue-medical-banner.jpg')" }}
    >
      {/* Exact #336869 Clinical Teal Gradient Overlay (replaces blue) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#244C4D] via-[#336869]/95 via-50% to-[#4A8586]/75"></div>

      {/* Hexagonal Molecular Chemistry Pattern Overlay */}
      <svg
        className="absolute inset-y-0 left-0 w-full sm:w-2/3 h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <pattern id="header-hex-grid-teal" width="56" height="97" patternUnits="userSpaceOnUse">
            <path
              d="M28 0 L56 16.16 L56 48.5 L28 64.66 L0 48.5 L0 16.16 Z M28 97 L56 80.84 L56 48.5 L28 32.34 L0 48.5 L0 80.84 Z"
              stroke="#A5D5D4"
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="28" cy="0" r="2" fill="#A5D5D4" opacity="0.7" />
            <circle cx="56" cy="16.16" r="2" fill="#A5D5D4" opacity="0.7" />
            <circle cx="56" cy="48.5" r="2" fill="#A5D5D4" opacity="0.7" />
            <circle cx="28" cy="64.66" r="2" fill="#A5D5D4" opacity="0.7" />
            <circle cx="0" cy="48.5" r="2" fill="#A5D5D4" opacity="0.7" />
            <circle cx="0" cy="16.16" r="2" fill="#A5D5D4" opacity="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#header-hex-grid-teal)" />
      </svg>

      {/* Subtle soft ambient teal glow behind title */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-80 h-36 bg-[#82BDBC]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Left-Aligned Title and Breadcrumb Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <FadeInDown>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
            {title}
          </h1>

          <div className="flex items-center space-x-2 text-xs sm:text-sm text-teal-50/90 font-medium mt-3">
            <button
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline transition-colors cursor-pointer text-gray-200"
            >
              Home
            </button>
            <span className="text-[#A5D5D4] font-semibold mx-1">&gt;</span>
            <span className="text-white font-semibold">{breadcrumbCurrent}</span>
          </div>
        </FadeInDown>
      </div>
    </div>
  );
}
