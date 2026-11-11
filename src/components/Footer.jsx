import {
  ArrowRight, CheckCircle2,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter
} from 'lucide-react';
import { useState } from 'react';
import { AnimatedCounter, FadeInUp } from './AnimatedElements';

export default function Footer({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const handleNav = (pageKey) => {
    setCurrentPage(pageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-pharmacy-secondary text-gray-300 pt-10 border-t border-gray-800 relative">
      {/* Sleek Compact Newsletter Strip with Fade In Up & Pulse */}
      <FadeInUp className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-r from-pharmacy-primary via-[#245859] to-[#163334] rounded-2xl py-6 px-6 sm:px-10 relative overflow-hidden shadow-xl border border-white/10 hover-lift">
          {/* Subtle watermark */}
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-6 -translate-y-6">
            <img src="/images/plus-1.png" alt="" className="w-48 h-48 object-contain" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="text-center lg:text-left max-w-lg">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-pharmacy-accent animate-pulse"></span>
                <span className="text-pharmacy-accent uppercase font-bold text-[11px] tracking-wider">
                  Stay Informed & Save
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Sign Up For Our Health Newsletter
              </h3>
              <p className="text-gray-300 text-xs mt-0.5">
                Join <AnimatedCounter to={6000} duration={1.8} suffix="+" /> subscribers for health tips and an exclusive 10% discount coupon.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 h-11 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-pharmacy-teal focus:bg-white/20 transition-all"
                />
                <button
                  type="submit"
                  className="h-11 bg-pharmacy-teal hover:bg-white hover:text-pharmacy-secondary text-white font-bold px-5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-xs shadow-md whitespace-nowrap shrink-0 btn-hover-effect"
                >
                  <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
                  {subscribed ? <CheckCircle2 size={15} /> : <Send size={14} />}
                </button>
              </div>
              {subscribed && (
                <p className="text-pharmacy-accent text-[11px] mt-1.5 font-medium flex items-center gap-1.5 animate-fadeIn">
                  <CheckCircle2 size={12} /> Thank you! Your discount coupon has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </FadeInUp>

      {/* Main Footer Links - 4 Columns (40% / 20% / 20% / 20%) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8 lg:gap-10">
        {/* Col 1: Brand & Operating Hours (40%) */}
        <div className="lg:col-span-4 space-y-3.5 text-left">
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleNav('home')}>
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pharmacy-primary to-pharmacy-teal flex items-center justify-center text-white shadow-sm shrink-0">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v16m-8-8h16" />
              </svg>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-lg font-black tracking-tight text-white leading-none">
                Yumi<span className="text-pharmacy-teal">.</span>
              </span>
              <span className="text-sm font-bold text-gray-200 tracking-tight leading-none">
                Pharmaceuticals
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
            Delivering verified pharmaceuticals, clinical consultations, and health wellness for your family.
          </p>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1 max-w-sm">
            <div className="flex items-center space-x-1.5 text-white text-xs font-bold">
              <Clock size={13} className="text-pharmacy-teal shrink-0" />
              <span>Mon - Sat: 08:00 AM - 09:00 PM</span>
            </div>
            <p className="text-[11px] text-gray-400 pl-4.5">Sun: 09:00 AM - 05:00 PM (On-Duty)</p>
          </div>
        </div>

        {/* Col 2: Quick Links (20%) */}
        <div className="lg:col-span-2 text-left">
          <h4 className="text-white text-sm font-bold mb-3.5 flex items-center gap-2 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-pharmacy-teal inline-block shrink-0"></span>
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleNav('home')} className="text-gray-400 hover:text-pharmacy-teal transition-colors flex items-center gap-1.5">
                <ArrowRight size={11} className="text-pharmacy-teal shrink-0" /> <span>Home</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('about')} className="text-gray-400 hover:text-pharmacy-teal transition-colors flex items-center gap-1.5">
                <ArrowRight size={11} className="text-pharmacy-teal shrink-0" /> <span>About Us</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services')} className="text-gray-400 hover:text-pharmacy-teal transition-colors flex items-center gap-1.5">
                <ArrowRight size={11} className="text-pharmacy-teal shrink-0" /> <span>Clinical Services</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="text-gray-400 hover:text-pharmacy-teal transition-colors flex items-center gap-1.5">
                <ArrowRight size={11} className="text-pharmacy-teal shrink-0" /> <span>Contact Us</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Help & Support (20%) */}
        <div className="lg:col-span-2 text-left">
          <h4 className="text-white text-sm font-bold mb-3.5 flex items-center gap-2 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-pharmacy-teal inline-block shrink-0"></span>
            Help & Support
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleNav('contact')} className="text-gray-400 hover:text-pharmacy-teal transition-colors flex items-center gap-1.5">
                <ArrowRight size={11} className="text-pharmacy-teal shrink-0" /> <span>Help Center & Inquiries</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="text-gray-400 hover:text-pharmacy-teal transition-colors flex items-center gap-1.5">
                <ArrowRight size={11} className="text-pharmacy-teal shrink-0" /> <span>24/7 Pharmacist Hotline</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="text-gray-400 hover:text-pharmacy-teal transition-colors flex items-center gap-1.5">
                <ArrowRight size={11} className="text-pharmacy-teal shrink-0" /> <span>Dispensary Locations</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="text-gray-400 hover:text-pharmacy-teal transition-colors flex items-center gap-1.5">
                <ArrowRight size={11} className="text-pharmacy-teal shrink-0" /> <span>Frequently Asked Questions</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Reach Us & Social (20%) */}
        <div className="lg:col-span-2 text-left space-y-3">
          <h4 className="text-white text-sm font-bold mb-3.5 flex items-center gap-2 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-pharmacy-teal inline-block shrink-0"></span>
            Reach Us
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start space-x-2.5 text-gray-400">
              <MapPin size={15} className="text-pharmacy-teal shrink-0 mt-0.5" />
              <span className="leading-relaxed">88/A/2 Dombawala, Udugampola</span>
            </li>
            <li className="flex items-center space-x-2.5 text-gray-400">
              <Mail size={14} className="text-pharmacy-teal shrink-0" />
              <a href="yumipharmaceuticals@gmail.com" className="hover:text-white transition-colors">
                yumipharmaceuticals@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-2.5 text-gray-400">
              <Phone size={14} className="text-pharmacy-teal shrink-0" />
              <a href="tel:0770207988" className="hover:text-white font-semibold text-white">
                (077) 0207988
              </a>
            </li>
          </ul>

          {/* Social Icons - Sleek Compact row */}
          <div className="pt-2">
            <div className="flex items-center space-x-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-pharmacy-teal text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-pharmacy-teal text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-pharmacy-teal text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-pharmacy-teal text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Compact Bar */}
      <div className="border-t border-gray-800/60 py-4 text-[11px] text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Yumi Pharmaceuticals (PVT) Ltd. All Rights Reserved.</p>
          <div className="flex space-x-5 text-gray-400">
            <a href="#" className="hover:text-pharmacy-teal transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-pharmacy-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pharmacy-teal transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
