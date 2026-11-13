import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Search,
  Twitter,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function Navbar({
  currentPage,
  setCurrentPage,
  openSearchModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'About Us', key: 'about' },
    { name: 'Services', key: 'services' },
    { name: 'Contact Us', key: 'contact' }
  ];

  const handleNavClick = (pageKey) => {
    setCurrentPage(pageKey);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm bg-white animate-fade-in-down">
      {/* Top Header Bar (Hidden in mobile view, visible on md: and larger screens) */}
      <div className="hidden md:block bg-pharmacy-secondary text-gray-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-pharmacy-primary/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* (1) Left Side: ONLY Social Media Icons with Hover Transition */}
          <div className="flex items-center space-x-3.5 text-white/80">
            <a href="#" className="hover:text-pharmacy-teal hover:scale-110 transition-all duration-200" title="Facebook"><Facebook size={14} /></a>
            <a href="#" className="hover:text-pharmacy-teal hover:scale-110 transition-all duration-200" title="Twitter"><Twitter size={14} /></a>
            <a href="#" className="hover:text-pharmacy-teal hover:scale-110 transition-all duration-200" title="LinkedIn"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-pharmacy-teal hover:scale-110 transition-all duration-200" title="Instagram"><Instagram size={14} /></a>
          </div>

          {/* (1) Right Side: Time bar moved to where dot was placed + Email + Phone */}
          <div className="flex items-center flex-wrap justify-center gap-5 sm:gap-6">
            <div className="flex items-center text-gray-300 gap-1.5">
              <Clock size={13} className="text-pharmacy-teal" />
              <span>Mon - Sat: 08:00 AM - 09:00 PM</span>
            </div>
            <a href="mailto:yumipharmaceuticals@gmail.com" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Mail size={13} className="text-pharmacy-teal" />
              <span>yumipharmaceuticals@gmail.com</span>
            </a>
            <a href="tel:0770207988" className="flex items-center space-x-1.5 font-medium text-white hover:text-pharmacy-teal transition-colors">
              <Phone size={13} className="text-pharmacy-teal" />
              <span>(077) 020 7988</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md transition-all border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Official Yumi Pharmaceuticals Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center group shrink-0"
          >
            <img
              src="/images/yumi-logo.webp"
              alt="Yumi Pharmaceuticals"
              className="h-8 sm:h-10 md:h-10 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-200"
            />
          </div>

          {/* Desktop Nav Links & Search (Part 3 buttons removed, perfectly balanced) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`font-semibold text-sm transition-colors relative py-2 ${currentPage === item.key
                  ? 'text-pharmacy-teal after:w-full'
                  : 'text-pharmacy-secondary hover:text-pharmacy-teal after:w-0'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-pharmacy-teal after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.name}
              </button>
            ))}

            {/* Clean Search Trigger */}
            <button
              onClick={openSearchModal}
              className="p-2.5 text-pharmacy-secondary hover:text-pharmacy-teal hover:bg-pharmacy-bgLight rounded-full transition-all ml-2"
              title="Search medicines or services"
            >
              <Search size={19} />
            </button>
          </div>

          {/* Mobile Menu & Search Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={openSearchModal}
              className="p-2 text-pharmacy-secondary hover:text-pharmacy-teal"
              title="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-pharmacy-secondary hover:text-pharmacy-teal focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-6 transition-all duration-300 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left font-semibold text-base py-1 ${currentPage === 'home' ? 'text-pharmacy-teal' : 'text-pharmacy-secondary'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left font-semibold text-base py-1 ${currentPage === 'about' ? 'text-pharmacy-teal' : 'text-pharmacy-secondary'}`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`text-left font-semibold text-base py-1 ${currentPage === 'services' ? 'text-pharmacy-teal' : 'text-pharmacy-secondary'}`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left font-semibold text-base py-1 ${currentPage === 'contact' ? 'text-pharmacy-teal' : 'text-pharmacy-secondary'}`}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
