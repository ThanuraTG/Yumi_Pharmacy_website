/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pharmacy: {
          primary: '#2F6C6D',       // Primary Dark Teal
          primaryHover: '#235253',  // Darker Teal Hover
          secondary: '#132B2C',     // Dark Teal Charcoal (Headings)
          teal: '#47A2A3',          // Vibrant Cyan Teal (Buttons & accents)
          tealHover: '#2F6C6D',     // Button hover
          accent: '#75C2C3',        // Mint accent
          sage: '#C2C375',          // Golden Olive accent
          steel: '#4E79B2',         // Soft Blue
          bgLight: '#F6F6F6',       // Light gray background
          cardBg: '#FFFFFF',        // Card background
          textMuted: '#6A6A6A',     // Body text
          textDark: '#181D23',      // Title text
          borderLight: '#EBF0F1',   // Border light
          borderDefault: '#DDDDDD'  // Border default
        }
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
        heading: ['"Noto Sans"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
      },
      boxShadow: {
        'pharma': '0 10px 30px -5px rgba(47, 108, 109, 0.08), 0 4px 6px -2px rgba(47, 108, 109, 0.05)',
        'pharma-lg': '0 20px 40px -10px rgba(19, 43, 44, 0.12)',
        'pharma-button': '0 8px 20px 0 rgba(71, 162, 163, 0.35)',
        'pharma-card': '0 12px 32px 0 rgba(19, 43, 44, 0.06)'
      },
      borderRadius: {
        'pharma': '14px',
        'pharma-lg': '20px',
        'pharma-xl': '28px'
      },
      animation: {
        'fade-in': 'fadeIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-up': 'fadeInUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-down': 'fadeInDown 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-left': 'fadeInLeft 1.0s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-right': 'fadeInRight 1.0s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'zoom-in': 'zoomIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'zoom-in-up': 'zoomInUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-in-up': 'slideInUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3.5s ease-in-out infinite',
        'float': 'floatSlow 5s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-26px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(26px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        zoomInUp: {
          '0%': { opacity: '0', transform: 'scale(0.94) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.85' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
