import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { EditableNotice } from '../components/common/EditableNotice';
import { siteConfig } from '../config/siteConfig';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please provide your phone number';
    if (!formData.message.trim()) newErrors.message = 'Please provide your message';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <main id="main-content" className="flex-grow py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            Emergency &amp; General Inquiries
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact DIMMA Hospital &amp; Maternity
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Get in touch with our medical reception desk, request directions to our Trans-Ekulu facility, or reach our emergency team immediately.
          </p>
        </div>

        {/* 3 Prominent Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Direct Phone / Emergency */}
          <div className="p-5 sm:p-7 rounded-3xl bg-emergency-50/70 border border-emergency-200 shadow-soft flex flex-col justify-between space-y-4">
            <div className="space-y-2 sm:space-y-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emergency-600 text-white flex items-center justify-center shadow-md shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Hospital Phone &amp; Emergency</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct phone line for patient inquiries, appointments, and 24/7 maternal/clinical emergencies.
              </p>
              <div className="text-lg sm:text-2xl font-black text-emergency-700 tracking-tight">
                {siteConfig.phone}
              </div>
            </div>

            <a
              href={siteConfig.phoneTel}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emergency-600 hover:bg-emergency-700 active:bg-emergency-800 text-white font-bold text-xs sm:text-sm shadow transition-colors min-h-[42px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hospital Now</span>
            </a>
          </div>

          {/* Card 2: Physical Address & Directions */}
          <div className="p-5 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between space-y-4">
            <div className="space-y-2 sm:space-y-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-700 text-white flex items-center justify-center shadow-md shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Physical Location</h3>
              <address className="not-italic text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
                <p className="font-bold text-slate-900">{siteConfig.name}</p>
                <p>{siteConfig.address.street}</p>
                <p>{siteConfig.address.estate}</p>
                <p>{siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}</p>
              </address>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-50 hover:bg-brand-100 active:bg-brand-200 text-brand-800 font-bold text-xs sm:text-sm border border-brand-200 transition-colors min-h-[42px]"
            >
              <Navigation className="w-4 h-4 text-brand-700" />
              <span>Open in Maps / Get Directions</span>
            </a>
          </div>

          {/* Card 3: Email & Online Desk */}
          <div className="p-5 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between space-y-4">
            <div className="space-y-2 sm:space-y-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-md shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Email &amp; Administration</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For administrative inquiries, HMO correspondences, and patient communications.
              </p>
              <div className="text-xs sm:text-sm md:text-base font-bold text-brand-800 break-all">
                {siteConfig.email}
              </div>
            </div>

            <a
              href={siteConfig.emailMailto}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition-colors min-h-[42px]"
            >
              <Mail className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>
          </div>
        </div>

        {/* Operating Hours & Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Hours, Map Preview & Verified Details */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Opening Hours Card with verified editable placeholder */}
            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-700 shrink-0" />
                <span>Hospital Operating Hours</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium">
                  <strong>Emergency &amp; Maternity Wing:</strong><br />
                  24 Hours / 7 Days a Week (Always Open)
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                  <strong>Outpatient &amp; General Consultation:</strong>
                  <p className="text-slate-600 text-xs">
                    {siteConfig.openingHours.general}
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <EditableNotice
                  label="Hours Notice"
                  field="Opening Hours – To be confirmed by hospital management"
                />
              </div>
            </div>

            {/* Interactive Map Visual Representation */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emergency-600 shrink-0" />
                <span>Map &amp; Landmark Guide</span>
              </h4>

              <div className="h-40 sm:h-48 rounded-2xl bg-brand-50 border border-brand-200 flex flex-col items-center justify-center p-4 sm:p-6 text-center space-y-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-700 text-white flex items-center justify-center shadow-md animate-bounce">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-xs font-bold text-brand-900">
                  DIMMA Hospital &amp; Maternity
                </p>
                <p className="text-[11px] text-slate-600 leading-snug">
                  11 Wokemba Street, Federal Housing, Trans-Ekulu, Enugu
                </p>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-500 text-center">
                Located within Federal Housing Estate, Trans-Ekulu, easily accessible by public and private transport.
              </p>
            </div>

          </div>

          {/* Right: Send an Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-soft space-y-5 sm:space-y-6">
              <div className="border-b border-slate-100 pb-3 sm:pb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Send an Online Enquiry</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Have a general question or want to inquire about our services? Send us a message.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 text-center animate-fade-in">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm sm:text-base">Enquiry Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    Thank you, <strong>{formData.name}</strong>. Our front desk staff will review your message and reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="enquiryName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Your Full Name <span className="text-emergency-600">*</span>
                      </label>
                      <input
                        id="enquiryName"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Chukwudi Eze"
                        className="w-full px-3.5 sm:px-4 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-brand-600 focus:ring-brand-600 text-slate-800"
                      />
                      {errors.name && <p className="text-xs text-emergency-600">{errors.name}</p>}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="enquiryPhone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number <span className="text-emergency-600">*</span>
                      </label>
                      <input
                        id="enquiryPhone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 08064689371"
                        className="w-full px-3.5 sm:px-4 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-brand-600 focus:ring-brand-600 text-slate-800"
                      />
                      {errors.phone && <p className="text-xs text-emergency-600">{errors.phone}</p>}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="enquiryEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="enquiryEmail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. user@gmail.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-brand-600 focus:ring-brand-600 text-slate-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="enquirySubject" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Subject / Topic
                      </label>
                      <input
                        id="enquirySubject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Antenatal Registration Inquiry"
                        className="w-full px-3.5 sm:px-4 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-brand-600 focus:ring-brand-600 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="enquiryMessage" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Message <span className="text-emergency-600">*</span>
                    </label>
                    <textarea
                      id="enquiryMessage"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full p-3 sm:p-3.5 bg-slate-50/50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-brand-600 focus:ring-brand-600 text-slate-800"
                    />
                    {errors.message && <p className="text-xs text-emergency-600">{errors.message}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-bold text-xs sm:text-sm shadow transition-all min-h-[44px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </main>
  );
};
