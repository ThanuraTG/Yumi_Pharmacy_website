import React, { useState } from 'react';
import { 
  Pill, Activity, ShieldCheck, Stethoscope, FileText, ShoppingBag, 
  ArrowRight, CheckCircle2, Calendar, Clock, X 
} from 'lucide-react';
import { servicesData } from '../data/mockData';
import { FadeInDown, FadeInUp, ZoomIn } from '../components/AnimatedElements';
import PageHeaderBanner from '../components/PageHeaderBanner';

export default function ServicesPage({ setCurrentPage, openPrescriptionModal }) {
  const [selectedService, setSelectedService] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    notes: ''
  });

  const getServiceIcon = (name) => {
    switch (name) {
      case 'Pill': return <Pill size={32} className="transition-colors duration-300" />;
      case 'Activity': return <Activity size={32} className="transition-colors duration-300" />;
      case 'ShieldCheck': return <ShieldCheck size={32} className="transition-colors duration-300" />;
      case 'Stethoscope': return <Stethoscope size={32} className="transition-colors duration-300" />;
      case 'FileText': return <FileText size={32} className="transition-colors duration-300" />;
      case 'ShoppingBag': return <ShoppingBag size={32} className="transition-colors duration-300" />;
      default: return <Pill size={32} className="transition-colors duration-300" />;
    }
  };

  const handleBook = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedService(null);
      setBookingData({ name: '', phone: '', date: '', time: '10:00 AM', notes: '' });
    }, 2500);
  };

  return (
    <div className="w-full">
      {/* Page Header / Breadcrumb matching reference design with unique service image & pulse draw design */}
      <PageHeaderBanner
        title="Our Healthcare Services"
        breadcrumbCurrent="Services"
        setCurrentPage={setCurrentPage}
        bgImage="/images/banner-services.jpg"
        bgPosition="center right"
        drawDesign="medical-pulse"
      />

      {/* Services Grid with Fade In Up & Hover Transition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="flex justify-center">
              <span className="badge-subheading">PROFESSIONAL CARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pharmacy-secondary">
              A Complete Spectrum of Pharmacy Care
            </h2>
            <p className="text-gray-500 text-sm">
              From prescription fulfillment to preventative health screenings, discover our world-class medical services.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {servicesData.map((svc, idx) => (
              <FadeInUp key={svc.id} delay={idx * 0.08} className="h-full">
                <div 
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/40 group h-full flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 text-pharmacy-teal flex items-center justify-center mb-6 group-hover:bg-pharmacy-teal group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      {getServiceIcon(svc.iconName)}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-pharmacy-secondary group-hover:text-pharmacy-teal transition-colors">
                        {svc.title}
                      </h3>
                      <span className="text-[10px] font-bold text-pharmacy-teal bg-teal-50 px-2.5 py-0.5 rounded-full uppercase">
                        {svc.badge}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {svc.description}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-3">
                      {svc.detail}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment / Inquire Modal with Zoom In */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <ZoomIn className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100 relative">
            <div className="bg-pharmacy-secondary text-white p-6 relative text-left">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-white/80 hover:text-white"
              >
                <X size={20} />
              </button>
              <h3 className="text-xl font-bold">{selectedService.title}</h3>
              <p className="text-xs text-pharmacy-accent mt-1">Book an appointment or pharmacist session</p>
            </div>

            <div className="p-6 text-left">
              {bookingSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 bg-teal-50 text-pharmacy-teal rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-pharmacy-secondary">Appointment Scheduled!</h4>
                  <p className="text-xs text-gray-500">
                    We have reserved your appointment slot. Our staff will send a confirmation SMS to your number.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBook} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full h-11 px-3 rounded-xl border border-gray-200 text-xs focus:border-pharmacy-teal focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                        Preferred Time *
                      </label>
                      <select
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full h-11 px-3 rounded-xl border border-gray-200 text-xs focus:border-pharmacy-teal focus:outline-none bg-white"
                      >
                        <option>09:00 AM</option>
                        <option>10:30 AM</option>
                        <option>01:00 PM</option>
                        <option>03:30 PM</option>
                        <option>05:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                      Notes / Symptoms
                    </label>
                    <textarea
                      rows="2"
                      placeholder="Brief details about your request..."
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:border-pharmacy-teal focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white rounded-xl font-bold text-sm shadow-pharma-button transition-all flex items-center justify-center"
                  >
                    Confirm Booking Slot
                  </button>
                </form>
              )}
            </div>
          </ZoomIn>
        </div>
      )}
    </div>
  );
}
