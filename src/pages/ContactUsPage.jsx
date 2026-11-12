import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import { FadeInLeft, FadeInRight } from '../components/AnimatedElements';
import PageHeaderBanner from '../components/PageHeaderBanner';

export default function ContactUsPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="w-full">
      {/* Page Header / Breadcrumb matching reference design with unique contact image & network draw design */}
      <PageHeaderBanner
        title="Contact Us"
        breadcrumbCurrent="Contact Us"
        setCurrentPage={setCurrentPage}
        bgImage="/images/banner-contact.webp"
        bgPosition="center right"
        drawDesign="connect-mesh"
      />

      {/* Main Content with Fade In Left & Fade In Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Information & Hours with Fade In Left */}
            <FadeInLeft className="lg:col-span-5 space-y-8 text-left">
              <div>
                <div className="flex justify-start">
                  <span className="badge-subheading">GET IN TOUCH</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-pharmacy-secondary mt-3 mb-4 leading-tight">
                  We're Here to Help You Heal
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Have inquiries regarding a doctor prescription, insurance verification, vaccination schedule, or bulk medication supply? Reach out anytime.
                </p>
              </div>

              {/* Cards with Hover Transition */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-pharmacy-bgLight border border-gray-100 flex items-start space-x-4 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-pharmacy-teal flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pharmacy-secondary">Pharmacy Location</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">88/A/2 Dombawala, Udugampola</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-pharmacy-bgLight border border-gray-100 flex items-start space-x-4 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-pharmacy-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pharmacy-secondary">Phone Number</h4>
                    <a href="tel:5559876543" className="text-xs font-bold text-pharmacy-teal hover:underline block mt-1">
                      (077) 020 7988
                    </a>
                    <span className="text-[11px] text-gray-400 block mt-0.5">Toll Free 24/7 Hotline</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-pharmacy-bgLight border border-gray-100 flex items-start space-x-4 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-pharmacy-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pharmacy-secondary">Email Support</h4>
                    <a href="mailto:info@yourdomain.com" className="text-xs text-gray-500 hover:text-pharmacy-teal block mt-1">
                      yumipharmaceuticals@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-pharmacy-bgLight border border-gray-100 flex items-start space-x-4 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-pharmacy-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pharmacy-secondary">Operating Hours</h4>
                    <p className="text-xs text-gray-500 mt-1">Monday - Saturday: 08:00 AM - 09:00 PM</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Sunday: 09:00 AM - 05:00 PM</p>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Inquiry Form with Fade In Right */}
            <FadeInRight delay={0.15} className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl text-left hover-lift">
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-pharmacy-secondary">Send Us a Direct Message</h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Fill in your details below and a pharmacist will respond within 24 business hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-3 animate-fadeIn">
                    <div className="w-14 h-14 bg-teal-50 text-pharmacy-teal rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-pharmacy-secondary">Message Sent Successfully!</h4>
                    <p className="text-sm text-gray-500">
                      Thank you for contacting Yumi Pharmaceuticals (PVT) Ltd. We will review your message promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none bg-gray-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none bg-gray-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(000) 000-0000"
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none bg-gray-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                          Inquiry Topic *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none bg-gray-50/50 text-gray-700"
                        >
                          <option value="">Select a topic...</option>
                          <option>Prescription Question</option>
                          <option>Medication Availability</option>
                          <option>Vaccination Booking</option>
                          <option>General Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none bg-gray-50/50 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white rounded-xl font-bold text-sm shadow-pharma-button hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 btn-hover-effect"
                    >
                      <span>{loading ? 'Sending Message...' : 'Send Message Now'}</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Interactive Map Visual Section */}
      <section className="bg-pharmacy-bgLight py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-white p-4">
            <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-gray-100 to-teal-50 flex items-center justify-center relative overflow-hidden">
              <div className="text-center p-6 space-y-2 z-10">
                <MapPin size={40} className="text-pharmacy-teal mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-pharmacy-secondary">Yumi Pharmaceuticals Central Dispensary</h4>
                <p className="text-xs text-gray-500">88/A/2 Dombawala, Udugampola</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block mt-2 bg-pharmacy-teal text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-pharmacy-primary transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2F6C6D_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
