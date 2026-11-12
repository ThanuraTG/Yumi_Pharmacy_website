import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2, FileText, Shield } from 'lucide-react';
import { ZoomIn } from './AnimatedElements';

export default function PrescriptionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    deliveryMethod: 'pickup',
    notes: '',
    fileName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ fullName: '', phone: '', email: '', deliveryMethod: 'pickup', notes: '', fileName: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <ZoomIn className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-pharmacy-primary to-[#1D4A4B] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-pharmacy-accent">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Upload Doctor Prescription</h3>
              <p className="text-xs text-gray-200 mt-0.5">Quick verification & fast refill preparation</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-teal-50 text-pharmacy-teal rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-bold text-pharmacy-secondary">Prescription Received!</h4>
              <p className="text-sm text-gray-500 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-pharmacy-primary">{formData.fullName}</span>. Our licensed pharmacist has received your upload and will call you at <span className="font-semibold text-pharmacy-primary">{formData.phone}</span> within 15 minutes to confirm dosage and fulfillment.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* File Upload Box */}
              <div className="border-2 border-dashed border-gray-300 hover:border-pharmacy-teal rounded-xl p-5 text-center cursor-pointer transition-colors bg-pharmacy-bgLight/50 relative">
                <input 
                  type="file" 
                  accept="image/*,.pdf" 
                  required
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer" 
                />
                <UploadCloud size={32} className="mx-auto text-pharmacy-teal mb-2" />
                <p className="text-sm font-semibold text-pharmacy-secondary">
                  {formData.fileName ? formData.fileName : 'Click or drag your prescription image or PDF here'}
                </p>
                <p className="text-xs text-gray-400 mt-1">Accepts JPG, PNG, WEBP, or PDF (up to 15MB)</p>
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none focus:ring-1 focus:ring-pharmacy-teal"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none focus:ring-1 focus:ring-pharmacy-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none focus:ring-1 focus:ring-pharmacy-teal"
                  />
                </div>
              </div>

              {/* Delivery or Store Pickup */}
              <div>
                <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                  Fulfillment Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`flex items-center space-x-2 border p-3 rounded-lg cursor-pointer text-xs font-semibold transition-all ${
                    formData.deliveryMethod === 'pickup' ? 'border-pharmacy-teal bg-teal-50/50 text-pharmacy-primary' : 'border-gray-200 text-gray-600'
                  }`}>
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="pickup"
                      checked={formData.deliveryMethod === 'pickup'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'pickup' })}
                      className="text-pharmacy-teal"
                    />
                    <span>Express In-Store Pickup</span>
                  </label>
                  <label className={`flex items-center space-x-2 border p-3 rounded-lg cursor-pointer text-xs font-semibold transition-all ${
                    formData.deliveryMethod === 'delivery' ? 'border-pharmacy-teal bg-teal-50/50 text-pharmacy-primary' : 'border-gray-200 text-gray-600'
                  }`}>
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="delivery"
                      checked={formData.deliveryMethod === 'delivery'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'delivery' })}
                      className="text-pharmacy-teal"
                    />
                    <span>Doorstep Home Delivery</span>
                  </label>
                </div>
              </div>

              {/* Doctor / Special Instructions */}
              <div>
                <label className="block text-xs font-bold text-pharmacy-secondary uppercase mb-1">
                  Doctor or Special Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g., Doctor name, generic brand preference, or allergy alerts..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:border-pharmacy-teal focus:outline-none focus:ring-1 focus:ring-pharmacy-teal resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <Shield size={16} className="text-pharmacy-teal shrink-0" />
                <span>HIPAA-compliant 256-bit SSL encrypted. Your prescription details are strictly confidential.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white py-3.5 rounded-xl font-bold text-sm shadow-pharma-button transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Uploading & Verifying...' : 'Submit Prescription for Verification'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </ZoomIn>
    </div>
  );
}

