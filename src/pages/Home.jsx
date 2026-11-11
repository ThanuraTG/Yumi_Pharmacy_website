import {
  Activity,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  FileText,
  HeartPulse,
  Instagram,
  Linkedin,
  Phone,
  Pill,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Stethoscope,
  Twitter
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { pharmacistsData, servicesData, testimonialsData } from '../data/mockData';
import {
  AnimatedCounter,
  FadeIn,
  FadeInUp,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  ZoomIn,
  ZoomInUp,
  SlideInUp
} from '../components/AnimatedElements';
import { brandPartnersList } from '../components/PartnerLogos';

export default function Home({
  setCurrentPage,
  openPrescriptionModal,
  openConsultationModal
}) {
  // Testimonials Carousel State & Rotation
  const [reviewIndex, setReviewIndex] = useState(0);
  const [visibleReviewCards, setVisibleReviewCards] = useState(3);
  const [isReviewPaused, setIsReviewPaused] = useState(false);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleReviewCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleReviewCards(2);
      } else {
        setVisibleReviewCards(3);
      }
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxReviewIndex = Math.max(0, testimonialsData.length - visibleReviewCards);

  useEffect(() => {
    if (reviewIndex > maxReviewIndex) {
      setReviewIndex(maxReviewIndex);
    }
  }, [maxReviewIndex, reviewIndex]);

  // Auto-rotate effect (rotates cards every 4 seconds, pauses on hover)
  useEffect(() => {
    if (isReviewPaused) return;
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev >= maxReviewIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isReviewPaused, maxReviewIndex]);

  const handlePrevReview = () => {
    setReviewIndex((prev) => (prev <= 0 ? maxReviewIndex : prev - 1));
  };

  const handleNextReview = () => {
    setReviewIndex((prev) => (prev >= maxReviewIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 50) {
      handleNextReview();
    } else if (diff < -50) {
      handlePrevReview();
    }
  };

  const [memberForm, setMemberForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setMemberForm({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: ''
        });
      }, 5000);
    }, 1000);
  };

  const getServiceIcon = (name) => {
    switch (name) {
      case 'Pill': return <Pill size={28} className="transition-colors duration-300" />;
      case 'Activity': return <Activity size={28} className="transition-colors duration-300" />;
      case 'ShieldCheck': return <ShieldCheck size={28} className="transition-colors duration-300" />;
      case 'Stethoscope': return <Stethoscope size={28} className="transition-colors duration-300" />;
      case 'FileText': return <FileText size={28} className="transition-colors duration-300" />;
      case 'ShoppingBag': return <ShoppingBag size={28} className="transition-colors duration-300" />;
      default: return <HeartPulse size={28} className="transition-colors duration-300" />;
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#F5F9F9] via-white to-[#EEF6F6] pt-2 pb-20 lg:pt-0 lg:pb-28 border-b border-gray-100">
        {/* Background Decorative Plus watermark */}
        <div className="absolute top-12 left-8 opacity-10 pointer-events-none">
          <img src="/images/plus-1.png" alt="" className="w-48 h-48 object-contain" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column with Fade In Left & Counter */}
            <FadeInLeft className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
              <FadeInDown delay={0.1} className="flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center space-x-2 bg-teal-50 border border-pharmacy-teal/20 px-3.5 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-pharmacy-teal animate-ping"></span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-pharmacy-teal">
                    Delivering Care, One Prescription at a Time
                    {/* Your Health, Our Priority. Every Day. */}
                  </span>
                </div>
              </FadeInDown>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-pharmacy-secondary leading-[1.12] tracking-tight">
                Your Health, Our Priority.  <span className="text-pharmacy-teal">Every Day</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Your trusted community pharmacy providing certified medications, personal clinical consultations, and reliable express delivery for all your healthcare needs.
              </p>

              {/* Patient Trust Stats with Animated Counter */}
              <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 w-full">
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-pharmacy-secondary">
                    4.9 / 5 <span className="text-gray-400 font-normal">(<AnimatedCounter to={5000} duration={2} suffix="+" /> Reviews)</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-pharmacy-secondary">
                  <ShieldCheck size={18} className="text-pharmacy-teal" />
                  <span>Licensed Healthcare Professionals</span>
                </div>
              </div>
            </FadeInLeft>

            {/* Right Visual Image with Fade In Right, Zoom In Badges & Image Hover Effect */}
            <FadeInRight delay={0.2} className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-md lg:max-w-none group">
                {/* Decorative background shape */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pharmacy-teal/20 to-transparent rounded-3xl transform rotate-3 scale-95 blur-md -z-10 transition-transform duration-500 group-hover:scale-100"></div>

                {/* Doctors Photo with Image Hover Effect */}
                <img
                  src="/images/male-and-female-doctors-in-white-coats-with-stetho-2022-12-16-15-24-39-utc2.png"
                  alt="Yumi Pharmaceuticals Healthcare Specialists"
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Floating Experience Badge with Zoom In & Counter Animation */}
                <ZoomIn delay={0.35} className="absolute -bottom-6 left-2 sm:left-4 lg:-left-4 z-20">
                  <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-pharma-lg border border-gray-100 flex items-center space-x-3 animate-float hover-lift">
                    <div className="w-12 h-12 rounded-xl bg-pharmacy-primary text-white flex items-center justify-center shadow-md shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <span className="text-xl font-extrabold text-pharmacy-secondary block leading-none">
                        <AnimatedCounter to={4} duration={1.5} suffix="+" />
                      </span>
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Years Experience</span>
                    </div>
                  </div>
                </ZoomIn>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* 2. FOUR QUICK HIGHLIGHT CARDS (Medicines, Beauty Care, Health Products, Cardio Care) with Fade In Up & Hover Transition */}
      <section className="py-12 bg-white relative -mt-8 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Card 1: Medicines */}
            <FadeInUp delay={0.05} className="h-full">
              <div
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/40 group h-full flex flex-col"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF6F6] text-pharmacy-teal flex items-center justify-center mb-5 group-hover:bg-pharmacy-teal group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <Pill size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-pharmacy-secondary mb-2 group-hover:text-pharmacy-teal transition-colors">
                    Medicines
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Certified prescription medications and quality generic alternatives for everyday healing.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Card 2: Beauty Care */}
            <FadeInUp delay={0.15} className="h-full">
              <div
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/40 group h-full flex flex-col"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF6F6] text-pharmacy-teal flex items-center justify-center mb-5 group-hover:bg-pharmacy-teal group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <Sparkles size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-pharmacy-secondary mb-2 group-hover:text-pharmacy-teal transition-colors">
                    Beauty Care
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Dermatologist-approved skincare, clinical cosmetics, and nourishing personal care products.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Card 3: Health Products */}
            <FadeInUp delay={0.25} className="h-full">
              <div
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/40 group h-full flex flex-col"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF6F6] text-pharmacy-teal flex items-center justify-center mb-5 group-hover:bg-pharmacy-teal group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <Activity size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-pharmacy-secondary mb-2 group-hover:text-pharmacy-teal transition-colors">
                    Health Products
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Essential multivitamins, nutritional supplements, and certified home healthcare equipment.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Card 4: Cardio Care */}
            <FadeInUp delay={0.35} className="h-full">
              <div
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/40 group h-full flex flex-col"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF6F6] text-pharmacy-teal flex items-center justify-center mb-5 group-hover:bg-pharmacy-teal group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <HeartPulse size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-pharmacy-secondary mb-2 group-hover:text-pharmacy-teal transition-colors">
                    Cardio Care
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Targeted cardiac support, blood pressure monitors, and cardiovascular wellness essentials.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE SECTION with Fade In Left & Fade In Right */}
      <section className="py-20 bg-pharmacy-bgLight/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Side with Fade In Left & Image Hover Effect */}
            <FadeInLeft className="lg:col-span-6 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full image-hover-zoom group">
                <img
                  src="/images/young-female-pharmacist-posing-while-working-in-a-pharmacy-e1697689073593.jpg"
                  alt="Young female pharmacist posing while working in a pharmacy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Quote/Stat Card */}
              <div className="absolute -bottom-6 right-2 sm:right-6 bg-pharmacy-secondary text-white p-6 rounded-2xl shadow-xl max-w-xs border-2 border-white hidden sm:block hover-lift">
                <p className="text-xs text-gray-300 italic mb-3 leading-relaxed">
                  "Our mission is to empower healthier lives with personalized pharmaceutical counsel."
                </p>
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-pharmacy-teal text-white flex items-center justify-center font-bold text-xs shrink-0">
                    YP
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Yumi Pharma Lab</h5>
                    <span className="text-[10px] text-pharmacy-accent block">Certified Quality</span>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Text Side with Fade In Right */}
            <FadeInRight delay={0.15} className="lg:col-span-6 space-y-6 flex flex-col justify-center text-left">
              <div className="flex justify-start">
                <span className="badge-subheading">WHO WE ARE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pharmacy-secondary leading-tight">
                We Are The Most Trusted Pharmacy In This Town
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                At Yumi Pharmaceuticals, we are committed to making healthcare simple, dependable, and accessible for everyone. Our dedicated team of licensed pharmacists works closely with patients and doctors to guarantee safe, effective treatments.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                From chronic illness management to prompt prescription refills and health screenings, we adhere to the highest pharmaceutical safety standards to protect the wellness of your entire family.
              </p>

              {/* Checkmarks list with aligned icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start space-x-3 text-sm font-semibold text-pharmacy-secondary">
                  <CheckCircle2 size={18} className="text-pharmacy-teal shrink-0 mt-0.5" />
                  <span>100% Genuine Prescription Drugs</span>
                </div>
                <div className="flex items-start space-x-3 text-sm font-semibold text-pharmacy-secondary">
                  <CheckCircle2 size={18} className="text-pharmacy-teal shrink-0 mt-0.5" />
                  <span>Licensed Clinical Pharmacists</span>
                </div>
                <div className="flex items-start space-x-3 text-sm font-semibold text-pharmacy-secondary">
                  <CheckCircle2 size={18} className="text-pharmacy-teal shrink-0 mt-0.5" />
                  <span>Convenient Digital Refills</span>
                </div>
                <div className="flex items-start space-x-3 text-sm font-semibold text-pharmacy-secondary">
                  <CheckCircle2 size={18} className="text-pharmacy-teal shrink-0 mt-0.5" />
                  <span>Affordable Generic Alternatives</span>
                </div>
              </div>

              <div className="pt-4 flex justify-start">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-pharma-button hover:shadow-lg transition-all duration-300 btn-hover-effect"
                >
                  More About us
                </button>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* 4. BRAND PARTNERS AUTO-ROTATOR MARQUEE */}
      <section className="py-2 bg-white border-y border-gray-100 overflow-hidden relative">
     

        {/* Soft Left and Right Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

        {/* Continuous Auto-Rotating Vector Logo Track (100% Crystal-Clear, Never Stops on Mouse Hover) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee items-center py-2">
            {[...Array(4)].flatMap(() => brandPartnersList).map((brand, idx) => {
              const LogoComponent = brand.Component;
              return (
                <div
                  key={idx}
                  className="mx-6 sm:mx-10 px-4 py-2 rounded-xl flex items-center justify-center shrink-0 cursor-default select-none"
                  title={brand.name}
                >
                  <LogoComponent className="h-9 sm:h-11 w-auto" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA PROMO BANNER with Zoom In Up */}
      <section className="relative py-10 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/shelves-with-medications-at-a-modern-pharmacy-shop.jpg')" }}>
        {/* Dark Teal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pharmacy-secondary/95 via-pharmacy-primary/90 to-pharmacy-secondary/95"></div>

        <ZoomInUp className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center space-y-6">
          <span className="text-pharmacy-accent font-extrabold text-xs uppercase tracking-widest block">
            WE'RE YUMI PHARMACEUTICALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Delivering Wellness with Every Prescription
          </h2>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Dedicated to providing patient-first healthcare guidance, authentic medicines, and compassionate clinical care every single day.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-pharmacy-teal hover:bg-white hover:text-pharmacy-secondary text-white font-bold px-9 py-4 rounded-xl text-sm shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center space-x-2 btn-hover-effect"
            >
              <span>Discover More</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </ZoomInUp>
      </section>

      {/* 6. OUR SERVICES with Fade In Up & Hover Transitions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Fade In Up */}
          <FadeInUp className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl space-y-3 text-left">
              <div className="flex justify-start">
                <span className="badge-subheading">OUR SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pharmacy-secondary leading-tight">
                A pharmacy with world-class service
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Explore our full spectrum of specialized pharmacy solutions, preventative health checks, and professional consultations designed for optimal well-being.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end shrink-0">
              <button
                onClick={() => setCurrentPage('services')}
                className="bg-pharmacy-bgLight hover:bg-pharmacy-teal hover:text-white text-pharmacy-primary font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-300 border border-gray-200 hover:border-pharmacy-teal flex items-center space-x-2 btn-hover-effect"
              >
                <span>View All Services</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </FadeInUp>

          {/* 6 Services Grid with Staggered Fade In Up & Hover Transition */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {servicesData.map((svc, idx) => (
              <FadeInUp key={svc.id} delay={idx * 0.08} className="h-full">
                <div
                  className="p-8 rounded-2xl bg-white border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/40 group h-full flex flex-col cursor-pointer"
                  onClick={() => setCurrentPage('services')}
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 text-pharmacy-teal flex items-center justify-center mb-6 group-hover:bg-pharmacy-teal group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      {getServiceIcon(svc.iconName)}
                    </div>
                    <h3 className="text-xl font-bold text-pharmacy-secondary mb-3 group-hover:text-pharmacy-teal transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE BEST PHARMACY STORE BANNER with Fade In Up */}
      <section className="relative py-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/empty-pharmacy-store-full-with-pharmaceutical-product-and-treatment-on-shelves.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-pharmacy-primary/95 to-pharmacy-secondary/90"></div>
        <FadeInUp className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center space-y-5">
          <span className="text-pharmacy-accent font-extrabold text-xs uppercase tracking-widest block">
            THE BEST PHARMACY STORE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            We Have The Most Complete Medicine and Vitamins
          </h2>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Discover a comprehensive inventory of authentic prescription medicines, wellness supplements, and personal care essentials backed by clinical expertise.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('#')}
              className="bg-white hover:bg-pharmacy-teal hover:text-white text-pharmacy-secondary font-bold px-8 py-3.5 rounded-xl text-sm shadow-xl transition-all duration-300 btn-hover-effect"
            >
              Shop Now
            </button>
          </div>
        </FadeInUp>
      </section>

      {/* 8. WHY CHOOSE US with Fade In Left, Fade In Right & Counter Animation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Content with Fade In Left */}
            <FadeInLeft className="lg:col-span-7 space-y-6 flex flex-col justify-center text-left">
              <div className="flex justify-start">
                <span className="badge-subheading">WHY CHOOSE US</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pharmacy-secondary leading-tight">
                We care beyond what your doctors have prescribed
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe exceptional pharmacy care goes far beyond just dispensing medication. Our pharmacists provide continuous support, medication reviews, and personalized wellness advice.
              </p>

              {/* 3 Key Feature Boxes with Hover Transitions */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-pharmacy-bgLight/70 border border-gray-100 flex items-start space-x-4 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-pharmacy-teal text-white flex items-center justify-center shrink-0 font-extrabold text-base mt-0.5">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-pharmacy-secondary">
                      Honesty & transparency
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      We offer clear pricing, authentic manufacturer-sourced products, and transparent advice with no hidden fees or compromises on quality.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-pharmacy-bgLight/70 border border-gray-100 flex items-start space-x-4 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-pharmacy-teal text-white flex items-center justify-center shrink-0 font-extrabold text-base mt-0.5">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-pharmacy-secondary">
                      Expert Pharmacist
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      Consult with board-certified clinical pharmacists ready to help manage complex treatments, monitor side effects, and verify dosages.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-pharmacy-bgLight/70 border border-gray-100 flex items-start space-x-4 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-pharmacy-teal text-white flex items-center justify-center shrink-0 font-extrabold text-base mt-0.5">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-pharmacy-secondary">
                      Extra Discount
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      Enjoy exclusive member savings of up to 25% on over-the-counter essentials, vitamins, and regular prescription refills.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Right Column: Expert Image with Fade In Right & Image Hover Effect */}
            <FadeInRight delay={0.15} className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full image-hover-zoom group">
                <img
                  src="/images/a-pharmacy-expert-is-standing-in-the-drug-store-and-smiling-at-the-camera-.jpg"
                  alt="A pharmacy expert is standing in the drug store and smiling at the camera"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Counter Card with Zoom In & Counter Animation */}
              <ZoomIn delay={0.35} className="absolute -bottom-6 left-2 sm:left-6 z-20">
                <div className="bg-white p-5 rounded-2xl shadow-pharma-lg border border-gray-100 flex items-center space-x-3 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-pharmacy-teal text-white flex items-center justify-center font-extrabold text-lg shrink-0">
                    <AnimatedCounter to={99} duration={1.6} suffix="%" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-pharmacy-secondary block leading-none">Patient Trust</span>
                    <span className="text-xs text-gray-500 mt-1 block">Verified Satisfaction</span>
                  </div>
                </div>
              </ZoomIn>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* 9. BECOME A MEMBER & FORM SECTION with Fade In Left & Fade In Right */}
      <section className="relative py-10 lg:py-25 overflow-hidden border-t border-gray-100 bg-[#E6F7F7]">
        {/* Background Image with dimmed light / reduced brightness */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none brightness-[0.98] contrast-[0.7]"
          style={{
            backgroundImage: "url('/images/membership-section-bg.png')"
          }}
        />
        {/* Soft subtle tint overlay to gently tone down lighting */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Form Card with Fade In Left */}
            <FadeInLeft className="lg:col-span-6">
              <div className="bg-white p-7 sm:p-9 rounded-3xl shadow-2xl border border-gray-100/90 relative max-w-lg mx-auto lg:mx-0 hover-lift">
                <div className="mb-6 text-left">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-pharmacy-secondary">
                    Complete the form below
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    Fill in your contact details below and our team will get in touch to activate your exclusive member benefits.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="w-14 h-14 bg-teal-50 text-pharmacy-teal rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-pharmacy-secondary">Application Received!</h4>
                    <p className="text-sm text-gray-500">
                      Thank you! Our pharmacy representative will reach out shortly to activate your membership perks.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleMemberSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-3.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={memberForm.firstName}
                        onChange={(e) => setMemberForm({ ...memberForm, firstName: e.target.value })}
                        placeholder="Full Name"
                        className="w-full h-11 px-4 rounded-xl border border-gray-200/80 text-sm focus:border-pharmacy-teal focus:outline-none focus:ring-1 focus:ring-pharmacy-teal bg-gray-50/70 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          required
                          value={memberForm.phone}
                          onChange={(e) => setMemberForm({ ...memberForm, phone: e.target.value })}
                          placeholder="Phone number"
                          className="w-full h-11 px-4 rounded-xl border border-gray-200/80 text-sm focus:border-pharmacy-teal focus:outline-none focus:ring-1 focus:ring-pharmacy-teal bg-gray-50/70 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={memberForm.email}
                          onChange={(e) => setMemberForm({ ...memberForm, email: e.target.value })}
                          placeholder="Your email"
                          className="w-full h-11 px-4 rounded-xl border border-gray-200/80 text-sm focus:border-pharmacy-teal focus:outline-none focus:ring-1 focus:ring-pharmacy-teal bg-gray-50/70 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        Address
                      </label>
                      <textarea
                        rows="3"
                        required
                        value={memberForm.address}
                        onChange={(e) => setMemberForm({ ...memberForm, address: e.target.value })}
                        placeholder="Your Address"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200/80 text-sm focus:border-pharmacy-teal focus:outline-none focus:ring-1 focus:ring-pharmacy-teal bg-gray-50/70 resize-none transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full h-11 bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white rounded-xl font-bold text-sm shadow-pharma-button hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 mt-2 btn-hover-effect"
                    >
                      <span>{formLoading ? 'Submitting...' : 'Submit'}</span>
                    </button>
                  </form>
                )}
              </div>
            </FadeInLeft>

            {/* Right Column: Benefits & Info with Fade In Right */}
            <FadeInRight delay={0.15} className="lg:col-span-6 space-y-6 flex flex-col justify-center text-left">
              <div className="flex justify-start">
                <span className="text-black font-bold text-xs tracking-widest uppercase">
                  BECOME A MEMBER
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
                We assure customer satisfaction with personal care
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed font-normal">
                Join thousands of satisfied patients who rely on Yumi Pharmaceuticals for priority care, personalized medication management, and family health benefits.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-base font-bold text-black">
                  Benefits of our membership program:
                </h4>
                <ul className="space-y-2.5 text-sm text-black font-medium">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-pharmacy-teal shrink-0 mt-0.5" />
                    <span>Priority prescription fulfillment with zero wait times</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-pharmacy-teal shrink-0 mt-0.5" />
                    <span>Free local doorstep delivery on orders over SKR 15,000</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-pharmacy-teal shrink-0 mt-0.5" />
                    <span>Complimentary annual health screening and blood pressure checks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-pharmacy-teal shrink-0 mt-0.5" />
                    <span>24/7 direct access to licensed clinical pharmacists</span>
                  </li>
                </ul>
              </div>

              {/* Two White Info Cards: Contact Us & Office Hours with Hover Transition */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white shadow-lg flex items-center space-x-3.5 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-pharmacy-teal text-white flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-semibold block leading-none mb-1.5">Contact Us</span>
                    <a href="tel:5559876543" className="text-sm sm:text-base font-bold text-pharmacy-secondary hover:text-pharmacy-teal leading-none transition-colors">
                      (077) 020 7988 
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white shadow-lg flex items-center space-x-3.5 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-pharmacy-teal text-white flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-semibold block leading-none mb-1.5">Open Time</span>
                    <span className="text-sm sm:text-base font-bold text-pharmacy-secondary leading-none">8.00am - 9.00pm</span>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* 10. MEET OUR PHARMACIST with Fade In Up & Image Hover Effect */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="flex justify-center">
              <span className="badge-subheading">MEET OUR PHARMACIST</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pharmacy-secondary leading-tight">
              Your Partner in Health and Healing
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Meet our team of licensed healthcare specialists dedicated to providing clinical guidance, dosage oversight, and patient advocacy.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {pharmacistsData.map((doc, idx) => (
              <FadeInUp key={doc.id} delay={idx * 0.12} className="h-full">
                <div
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/40 group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="relative overflow-hidden aspect-4/3 image-hover-zoom">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                      />
                      {/* Social hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pharmacy-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <div className="flex space-x-3 text-white">
                          <a href="#" className="w-8 h-8 rounded-full bg-pharmacy-teal flex items-center justify-center hover:bg-white hover:text-pharmacy-secondary hover:scale-110 transition-all"><Facebook size={14} /></a>
                          <a href="#" className="w-8 h-8 rounded-full bg-pharmacy-teal flex items-center justify-center hover:bg-white hover:text-pharmacy-secondary hover:scale-110 transition-all"><Twitter size={14} /></a>
                          <a href="#" className="w-8 h-8 rounded-full bg-pharmacy-teal flex items-center justify-center hover:bg-white hover:text-pharmacy-secondary hover:scale-110 transition-all"><Linkedin size={14} /></a>
                          <a href="#" className="w-8 h-8 rounded-full bg-pharmacy-teal flex items-center justify-center hover:bg-white hover:text-pharmacy-secondary hover:scale-110 transition-all"><Instagram size={14} /></a>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 text-center space-y-1">
                      <h3 className="text-xl font-bold text-pharmacy-secondary group-hover:text-pharmacy-teal transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-pharmacy-teal uppercase tracking-wider">
                        {doc.role}
                      </p>
                      <p className="text-xs text-gray-400 pt-2">
                        {doc.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-100 mt-2 flex items-center justify-center text-xs font-bold text-pharmacy-teal">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">View Specialist Profile →</span>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS with Fade In Up & Hover Transition */}
      <section className="relative py-24 bg-[#F8FAFA] overflow-hidden border-t border-gray-100">
        {/* Subtle Medical Hexagon Grid Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex-grid" width="80" height="138.56" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
                <path
                  d="M40 0 L80 23.09 L80 69.28 L40 92.38 L0 69.28 L0 23.09 Z M0 138.56 L40 115.47 L80 138.56 M40 92.38 L40 115.47"
                  fill="none"
                  stroke="#47A2A3"
                  strokeWidth="0.85"
                  strokeOpacity="0.4"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-pharmacy-teal font-bold text-xs sm:text-sm tracking-widest uppercase">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pharmacy-secondary leading-tight">
              What Our Customer are Saying
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed pt-1">
              Discover how our personalized approach and dedicated care have improved the health and lives of our community members.
            </p>
          </FadeInUp>

          {/* Rotating Carousel Wrapper */}
          <div
            className="relative"
            onMouseEnter={() => setIsReviewPaused(true)}
            onMouseLeave={() => setIsReviewPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop Left Navigation Button */}
            <button
              onClick={handlePrevReview}
              aria-label="Previous testimonial"
              className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200 text-pharmacy-secondary hover:text-white hover:bg-pharmacy-teal hover:border-pharmacy-teal shadow-[0_4px_14px_rgba(0,0,0,0.08)] items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            {/* Desktop Right Navigation Button */}
            <button
              onClick={handleNextReview}
              aria-label="Next testimonial"
              className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200 text-pharmacy-secondary hover:text-white hover:bg-pharmacy-teal hover:border-pharmacy-teal shadow-[0_4px_14px_rgba(0,0,0,0.08)] items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>

            {/* Carousel Overflow Track */}
            <div className="overflow-hidden py-4 -mx-2 px-2 sm:-mx-3 sm:px-3">
              <div
                className="flex transition-transform duration-700 ease-in-out will-change-transform"
                style={{
                  transform: `translateX(-${reviewIndex * (100 / visibleReviewCards)}%)`
                }}
              >
                {testimonialsData.map((t) => (
                  <div
                    key={t.id}
                    className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                    style={{ width: `${100 / visibleReviewCards}%` }}
                  >
                    <div className="h-full bg-white py-6 px-6 sm:px-7 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover-lift hover:border-pharmacy-teal/30 flex flex-col justify-between">
                      <div>
                        {/* Centered Teal Stars */}
                        <div className="flex justify-center items-center gap-1.5 text-pharmacy-teal mb-3.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" stroke="none" />
                          ))}
                        </div>

                        {/* Centered Quote text */}
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center mb-6 min-h-[4.5rem] flex items-center justify-center">
                          {t.quote}
                        </p>
                      </div>

                      {/* Reviewer info: Avatar and Name only */}
                      <div className="flex items-center justify-center space-x-3 pt-2">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-gray-100"
                          onError={(e) => {
                            e.currentTarget.src = '/images/Testimonials-1.jpg';
                          }}
                        />
                        <h5 className="text-sm font-bold text-pharmacy-secondary">
                          {t.name}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Dots & Mobile Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrevReview}
                aria-label="Previous testimonial"
                className="md:hidden w-10 h-10 rounded-full bg-white border border-gray-200 text-pharmacy-secondary hover:bg-pharmacy-teal hover:text-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Indicator Dots */}
              <div className="flex items-center justify-center gap-2">
                {[...Array(maxReviewIndex + 1)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setReviewIndex(idx)}
                    aria-label={`Go to testimonial slide ${idx + 1}`}
                    className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                      reviewIndex === idx
                        ? 'w-8 bg-pharmacy-teal'
                        : 'w-2.5 bg-gray-300 hover:bg-pharmacy-teal/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextReview}
                aria-label="Next testimonial"
                className="md:hidden w-10 h-10 rounded-full bg-white border border-gray-200 text-pharmacy-secondary hover:bg-pharmacy-teal hover:text-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
