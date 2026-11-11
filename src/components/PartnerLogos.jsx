import React from 'react';

/**
 * Crystal-Clear Vector SVGs for the 5 Brand Partner Logos
 * High DPI, razor-sharp on all screens, with rich modern brand colors.
 */

export function KanbaLogo({ className = "h-9 w-auto" }) {
  return (
    <svg viewBox="0 0 190 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="kanba-grad" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {/* 3 Interlocking Circles (Borromean Rings Symbol) */}
      <g stroke="url(#kanba-grad)" strokeWidth="3.4" fill="none">
        {/* Top circle */}
        <circle cx="22" cy="16" r="10" strokeLinecap="round" />
        {/* Bottom-left circle */}
        <circle cx="15" cy="27" r="10" strokeLinecap="round" />
        {/* Bottom-right circle */}
        <circle cx="29" cy="27" r="10" strokeLinecap="round" />
      </g>
      {/* Wordmark: kanba */}
      <text
        x="50"
        y="30"
        fill="#132B2C"
        fontFamily="'Noto Sans', 'Inter', system-ui, sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="-0.5px"
      >
        kanba
      </text>
    </svg>
  );
}

export function LogoipsumLogo({ className = "h-9 w-auto" }) {
  return (
    <svg viewBox="0 0 210 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="lipsum-grad" x1="6" y1="8" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {/* Dynamic 4-part Clover/Propeller Emblem */}
      <g fill="url(#lipsum-grad)">
        <path d="M12 14C12 9.58 15.58 6 20 6C24.42 6 28 9.58 28 14H12Z" />
        <path d="M28 20C28 24.42 24.42 28 20 28C15.58 28 12 24.42 12 20H28Z" />
        <path d="M26 12C30.42 12 34 15.58 34 20C34 24.42 30.42 28 26 28V12Z" />
        <path d="M14 28C9.58 28 6 24.42 6 20C6 15.58 9.58 12 14 12V28Z" />
        <circle cx="20" cy="20" r="3.5" fill="#FFFFFF" />
      </g>
      {/* Wordmark: LOGOIPSUM */}
      <text
        x="44"
        y="28"
        fill="#132B2C"
        fontFamily="'Noto Sans', 'Inter', system-ui, sans-serif"
        fontSize="20"
        fontWeight="900"
        letterSpacing="0.8px"
      >
        LOGOIPSUM
      </text>
    </svg>
  );
}

export function HexlabLogo({ className = "h-9 w-auto" }) {
  return (
    <svg viewBox="0 0 195 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="hexlab-grad" x1="6" y1="6" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#2F6C6D" />
        </linearGradient>
      </defs>
      {/* Hexagon Outline */}
      <polygon
        points="22,6 36,14 36,30 22,38 8,30 8,14"
        stroke="url(#hexlab-grad)"
        strokeWidth="3.2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Chemistry Beaker / Flask inside Hexagon */}
      <path
        d="M20 14V19L15 27C14.5 28 15 29 16.2 29H27.8C29 29 29.5 28 29 27L24 19V14"
        stroke="#47A2A3"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Flask rim */}
      <line x1="18.5" y1="14" x2="25.5" y2="14" stroke="#47A2A3" strokeWidth="2.2" strokeLinecap="round" />
      {/* Flask liquid level dot */}
      <circle cx="22" cy="25" r="1.5" fill="#0EA5E9" />
      {/* Wordmark: HEXLAB */}
      <text
        x="46"
        y="29"
        fill="#132B2C"
        fontFamily="'Noto Sans', 'Inter', system-ui, sans-serif"
        fontSize="21"
        fontWeight="800"
        letterSpacing="0.2px"
      >
        HEX<tspan fill="#47A2A3">LAB</tspan>
      </text>
    </svg>
  );
}

export function EarthLogo({ className = "h-9 w-auto" }) {
  return (
    <svg viewBox="0 0 195 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="earth-grad" x1="6" y1="6" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      {/* Globe Circle with Topographic Contour Curves */}
      <circle cx="22" cy="22" r="15" stroke="url(#earth-grad)" strokeWidth="3" fill="none" />
      <path
        d="M12 18C15 15 19 16 22 19C25 22 28 21 31 18"
        stroke="url(#earth-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 24C14 22 17 25 21 27C25 29 28 27 33 24"
        stroke="url(#earth-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Wordmark: EARTH 2.0 */}
      <text
        x="46"
        y="28"
        fill="#132B2C"
        fontFamily="'Noto Sans', 'Inter', system-ui, sans-serif"
        fontSize="20"
        fontWeight="800"
        letterSpacing="0.5px"
      >
        EARTH<tspan fill="#0284C7" fontSize="15" fontWeight="700" dx="3" dy="-2">2.0</tspan>
      </text>
    </svg>
  );
}

export function AmaraLogo({ className = "h-9 w-auto" }) {
  return (
    <svg viewBox="0 0 185 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="amara-grad" x1="6" y1="6" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
      </defs>
      {/* Scalloped Rosette Flower / Gear Seal Emblem */}
      <g stroke="url(#amara-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 7C24 9 26 9 28 8C30 7 32 9 33 11C34 13 36 14 36 16C37 18 36 21 35 22C36 24 37 26 36 28C35 30 33 31 32 33C30 34 29 36 27 36C25 37 23 35 21 35C19 36 17 37 15 36C13 35 12 33 10 32C9 30 7 29 7 27C6 25 8 23 8 21C7 19 6 17 8 15C9 13 11 12 12 10C14 9 15 7 18 7C20 6 21 7 22 7Z" />
        {/* Inner circle */}
        <circle cx="22" cy="21.5" r="7.5" strokeWidth="2.2" />
        {/* Center core */}
        <circle cx="22" cy="21.5" r="2.8" fill="url(#amara-grad)" stroke="none" />
      </g>
      {/* Wordmark: amara */}
      <text
        x="46"
        y="30"
        fill="#132B2C"
        fontFamily="'Noto Sans', 'Inter', system-ui, sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="-0.3px"
      >
        amara
      </text>
    </svg>
  );
}

export const brandPartnersList = [
  { name: 'Kanba Health', Component: KanbaLogo },
  { name: 'Logoipsum Labs', Component: LogoipsumLogo },
  { name: 'HexLab Diagnostics', Component: HexlabLogo },
  { name: 'Earth 2.0 Bio', Component: EarthLogo },
  { name: 'Amara Healthcare', Component: AmaraLogo },
];

