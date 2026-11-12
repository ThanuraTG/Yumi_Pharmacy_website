import React from 'react';
import { FadeInDown } from './AnimatedElements';

/**
 * Universal Page Header Banner Component
 * 
 * Supports individually customizable:
 * - bgImage: Background photo (each page can have its own distinct medical image)
 * - drawDesign: Drawing pattern overlay:
 *    - 'isometric-cubes': 3D tumbling isometric cubes wireframe lattice (matches user reference image)
 *    - 'medical-pulse': Clinical ECG heartbeat pulse wave + medical cross matrix
 *    - 'connect-mesh': Communication network mesh + concentric radar rings
 *    - 'hex-grid': Molecular chemistry hexagon pattern
 * - title & breadcrumbCurrent: Crisp white typography with soft teal breadcrumb accents
 * - bgPosition: Fine-tune where the background photo focal point is
 */
export default function PageHeaderBanner({
  title = 'About Pharamedic',
  breadcrumbCurrent = 'About Us',
  setCurrentPage,
  bgImage = '/images/blue-medical-banner.webp',
  bgPosition = 'center right',
  drawDesign = 'isometric-cubes',
  badgeText = null,
  subtitle = null,
}) {
  return (
    <div
      className="relative w-full py-14 sm:py-16 md:py-20 lg:py-22 bg-cover overflow-hidden border-b border-[#2d5f66]/40 shadow-inner"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: bgPosition,
      }}
    >
      {/* Clinical Deep Teal Gradient Overlay:
          Solid teal on left to ensure high text contrast,
          transitioning to soft transparency on the right to let the medical photo shine clearly */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#173f47] via-[#1b4851]/90 via-45% to-[#1b4851]/20 pointer-events-none" />

      {/* SVG Drawing Designs ("drow design") */}
      {drawDesign === 'isometric-cubes' && (
        <svg
          className="absolute inset-y-0 left-0 w-full sm:w-3/4 md:w-2/3 h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Seamless 3D Isometric Cube Lattice Pattern (matches reference screenshot) */}
            <pattern
              id="header-draw-iso-cubes"
              width="60"
              height="103.923"
              patternUnits="userSpaceOnUse"
            >
              <g
                stroke="#68b7c0"
                strokeWidth="1.15"
                fill="none"
                opacity="0.28"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Diagonals down-right (+30 deg) */}
                <path d="M0,17.32 L60,51.96 M0,51.96 L60,86.60 M0,86.60 L60,121.24 M0,-17.32 L60,17.32" />
                {/* Diagonals up-right (-30 deg) */}
                <path d="M0,17.32 L60,-17.32 M0,51.96 L60,17.32 M0,86.60 L60,51.96 M0,121.24 L60,86.60" />
                {/* Vertical stems creating 3D isometric cube faces */}
                <path d="M30,34.64 L30,69.28 M0,17.32 L0,51.96 M60,17.32 L60,51.96 M0,86.60 L0,121.24 M60,86.60 L60,121.24" />
              </g>
            </pattern>

            {/* Smooth horizontal fade-out mask to keep right-side photo crisp */}
            <linearGradient id="fade-mask-iso" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="65%" stopColor="#fff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id="draw-mask-iso">
              <rect width="100%" height="100%" fill="url(#fade-mask-iso)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#header-draw-iso-cubes)"
            mask="url(#draw-mask-iso)"
          />
        </svg>
      )}

      {drawDesign === 'medical-pulse' && (
        <svg
          className="absolute inset-y-0 left-0 w-full sm:w-4/5 h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Clinical Telemetry & Medical Cross Matrix Grid */}
            <pattern
              id="header-draw-medical-grid"
              width="70"
              height="70"
              patternUnits="userSpaceOnUse"
            >
              <g stroke="#68b7c0" strokeWidth="0.8" opacity="0.22" fill="none">
                <line x1="0" y1="35" x2="70" y2="35" />
                <line x1="35" y1="0" x2="35" y2="70" />
                {/* Clinical Cross */}
                <path
                  d="M31,35 H39 M35,31 V39"
                  stroke="#9febe7"
                  strokeWidth="2"
                  opacity="0.7"
                />
                <circle cx="0" cy="0" r="1.5" fill="#9febe7" opacity="0.35" />
                <circle cx="70" cy="0" r="1.5" fill="#9febe7" opacity="0.35" />
                <circle cx="0" cy="70" r="1.5" fill="#9febe7" opacity="0.35" />
                <circle cx="70" cy="70" r="1.5" fill="#9febe7" opacity="0.35" />
              </g>
            </pattern>

            <linearGradient id="fade-mask-pulse" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="70%" stopColor="#fff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id="draw-mask-pulse">
              <rect width="100%" height="100%" fill="url(#fade-mask-pulse)" />
            </mask>
          </defs>

          {/* Matrix Pattern */}
          <rect
            width="100%"
            height="100%"
            fill="url(#header-draw-medical-grid)"
            mask="url(#draw-mask-pulse)"
          />

          {/* Dynamic Vital Signs / ECG Heartbeat Line */}
          <path
            d="M0,135 L120,135 L135,120 L145,155 L160,85 L180,170 L195,125 L210,135 L380,135 L395,120 L405,155 L420,85 L440,170 L455,125 L470,135 L660,135 L675,120 L685,155 L700,85 L720,170 L735,125 L750,135 L900,135"
            stroke="#68dedb"
            strokeWidth="2.2"
            fill="none"
            opacity="0.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            mask="url(#draw-mask-pulse)"
          />
        </svg>
      )}

      {drawDesign === 'connect-mesh' && (
        <svg
          className="absolute inset-y-0 left-0 w-full sm:w-4/5 h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Communication Nodes & Coordinate Grid */}
            <pattern
              id="header-draw-connect-mesh"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <g opacity="0.22">
                <line x1="0" y1="0" x2="60" y2="60" stroke="#68b7c0" strokeWidth="0.75" />
                <line x1="60" y1="0" x2="0" y2="60" stroke="#68b7c0" strokeWidth="0.75" />
                <line
                  x1="0"
                  y1="30"
                  x2="60"
                  y2="30"
                  stroke="#68b7c0"
                  strokeWidth="0.5"
                  strokeDasharray="3,3"
                />
                <line
                  x1="30"
                  y1="0"
                  x2="30"
                  y2="60"
                  stroke="#68b7c0"
                  strokeWidth="0.5"
                  strokeDasharray="3,3"
                />
                <circle cx="30" cy="30" r="3" fill="none" stroke="#68dedb" strokeWidth="1.2" />
                <circle cx="30" cy="30" r="1.5" fill="#a5f3f0" />
                <circle cx="0" cy="0" r="1.5" fill="#a5f3f0" />
                <circle cx="60" cy="0" r="1.5" fill="#a5f3f0" />
                <circle cx="0" cy="60" r="1.5" fill="#a5f3f0" />
                <circle cx="60" cy="60" r="1.5" fill="#a5f3f0" />
              </g>
            </pattern>

            <linearGradient id="fade-mask-mesh" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="70%" stopColor="#fff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id="draw-mask-mesh">
              <rect width="100%" height="100%" fill="url(#fade-mask-mesh)" />
            </mask>
          </defs>

          {/* Mesh Pattern */}
          <rect
            width="100%"
            height="100%"
            fill="url(#header-draw-connect-mesh)"
            mask="url(#draw-mask-mesh)"
          />

          {/* Concentric communication / location radar rings */}
          <g stroke="#68dedb" fill="none" opacity="0.3" mask="url(#draw-mask-mesh)">
            <circle cx="150" cy="110" r="45" strokeWidth="1.2" strokeDasharray="4,4" />
            <circle cx="150" cy="110" r="95" strokeWidth="1" />
            <circle cx="150" cy="110" r="145" strokeWidth="0.8" strokeDasharray="6,4" />
            <circle cx="150" cy="110" r="200" strokeWidth="0.6" />
          </g>
        </svg>
      )}

      {drawDesign === 'hex-grid' && (
        <svg
          className="absolute inset-y-0 left-0 w-full sm:w-2/3 h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <pattern
              id="header-hex-grid-teal"
              width="56"
              height="97"
              patternUnits="userSpaceOnUse"
            >
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
      )}

      {/* Soft ambient teal glow behind title */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-88 h-40 bg-[#72c3cc]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Left-Aligned Title and Breadcrumb Container (matching reference image) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <FadeInDown>
          {badgeText && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#2a5d66]/80 text-[#9febe7] border border-[#68b7c0]/30 mb-3 tracking-wider uppercase">
              {badgeText}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm sm:text-base text-teal-100/80 mt-1 max-w-xl">
              {subtitle}
            </p>
          )}

          <div className="flex items-center space-x-2 text-xs sm:text-sm text-teal-100/90 font-medium mt-3">
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer text-teal-100/80 hover:underline"
            >
              Home
            </button>
            <span className="text-[#84cbd2] font-semibold mx-1">&gt;</span>
            <span className="text-white font-semibold">{breadcrumbCurrent}</span>
          </div>
        </FadeInDown>
      </div>
    </div>
  );
}
