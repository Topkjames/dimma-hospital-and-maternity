import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, Stethoscope, CheckCircle2, AlertCircle, ShieldCheck, Building } from 'lucide-react';
import { siteConfig, hospitalServices } from '../config/siteConfig';
import { AppointmentFormData } from '../types';

interface AppointmentPageProps {
  initialService?: string;
  initialDepartment?: string;
  onNavigate: (page: string) => void;
}

export const AppointmentPage: React.FC<AppointmentPageProps> = ({
  initialService,
  initialDepartment,
  onNavigate,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM – 12:00 PM)',
    department: initialService || initialDepartment || 'Maternity Services',
    reasonForVisit: 'General Consultation',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<AppointmentFormData | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, department: initialService }));
    } else if (initialDepartment) {
      setFormData((prev) => ({ ...prev, department: initialDepartment }));
    }
  }, [initialService, initialDepartment]);

  const validate = () => {
    const newErrors: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Valid Phone Number is required';
    } else if (formData.phone.trim().length < 10) {
      newErrors.phone = 'Please enter a valid telephone number (e.g. 08064689371)';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    if (!formData.department) {
      newErrors.department = 'Please select a clinical department or service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmissionData({ ...formData });
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmissionData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: 'Morning (09:00 AM – 12:00 PM)',
      department: 'Maternity Services',
      reasonForVisit: 'General Consultation',
      message: '',
    });
  };

  return (
    <main id="main-content" className="flex-grow py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            Patient Scheduling Desk
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Schedule an Appointment
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Request an in-person consultation with our medical doctors or maternity healthcare team at DIMMA Hospital &amp; Maternity, Trans-Ekulu, Enugu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Reassurance & Contact Information */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-700 shrink-0" />
                <span>Appointment Guidelines</span>
              </h3>

              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Confirmation Notice:</strong> All online appointment requests are subject to confirmation by our hospital front desk.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Prompt Feedback:</strong> Our administration staff will reach out via phone or SMS to confirm your scheduled slot.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Walk-in Patients:</strong> Walk-ins are always welcomed during clinic hours, prioritized according to clinical triage.
                  </span>
                </div>
              </div>

              {/* Emergency Hotline Box */}
              <div className="p-4 rounded-2xl bg-emergency-50 border border-emergency-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emergency-700 block flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-emergency-600 shrink-0" />
                  Urgent / Maternity Emergency?
                </span>
                <p className="text-xs text-slate-700">
                  If this is a sudden medical emergency, active labor, or acute illness, do not wait for an online reply:
                </p>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emergency-600 hover:bg-emergency-700 text-white font-bold text-xs shadow-sm transition-colors min-h-[42px]"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Direct Hotline: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Hospital Address card */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-soft space-y-2 text-xs sm:text-sm">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-brand-700 shrink-0" />
                <span>Facility Location</span>
              </h4>
              <p className="text-slate-600 leading-relaxed">
                11 Wokemba Street, Federal Housing, Trans-Ekulu, Enugu, Nigeria.
              </p>
              <p className="text-slate-500 text-xs">
                Email: {siteConfig.email}
              </p>
            </div>
          </div>

          {/* Right Column: Appointment Form / Submission Confirmation */}
          <div className="lg:col-span-8">
            {isSubmitted && submissionData ? (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-card space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm sm:text-lg">Appointment Request Received!</h3>
                    <p className="text-xs sm:text-sm text-emerald-800">
                      Thank you, <strong>{submissionData.fullName}</strong>. Your request has been recorded.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 space-y-3 text-sm">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider border-b border-slate-200 pb-2">
                    Request Summary Details
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 text-slate-700 text-xs sm:text-sm">
                    <p><strong>Patient Name:</strong> {submissionData.fullName}</p>
                    <p><strong>Phone Number:</strong> {submissionData.phone}</p>
                    {submissionData.email && <p><strong>Email Address:</strong> {submissionData.email}</p>}
                    <p><strong>Preferred Date:</strong> {submissionData.preferredDate}</p>
                    <p><strong>Time Window:</strong> {submissionData.preferredTime}</p>
                    <p><strong>Selected Department:</strong> {submissionData.department}</p>
                    <p><strong>Reason for Visit:</strong> {submissionData.reasonForVisit}</p>
                  </div>
                  {submissionData.message && (
                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-xs text-slate-500 font-bold mb-1">Additional Notes:</p>
                      <p className="text-xs text-slate-700 italic">{submissionData.message}</p>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
                  <p className="font-semibold mb-1">Important Notice:</p>
                  <p>
                    "Appointment requests are subject to confirmation by the hospital." Our desk team will contact you on{' '}
                    <strong>{submissionData.phone}</strong> to confirm your slot and provide any preliminary visit instructions.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs sm:text-sm shadow transition-all min-h-[42px]"
                  >
                    Submit Another Request
                  </button>
                  <button
                    onClick={() => onNavigate('home')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all min-h-[42px]"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-soft space-y-5 sm:space-y-6"
              >
                <div className="border-b border-slate-100 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Patient Consultation Request Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill in the required information below to request your clinic visit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Full Name */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Full Name <span className="text-emergency-600">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Mrs. Chioma Okonkwo"
                        className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/50 border rounded-xl text-xs sm:text-sm focus:bg-white transition-colors ${
                          errors.fullName ? 'border-emergency-500 focus:ring-emergency-500' : 'border-slate-300 focus:border-brand-600 focus:ring-brand-600'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-emergency-600 font-medium">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone Number <span className="text-emergency-600">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 08064689371"
                        className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/50 border rounded-xl text-xs sm:text-sm focus:bg-white transition-colors ${
                          errors.phone ? 'border-emergency-500 focus:ring-emergency-500' : 'border-slate-300 focus:border-brand-600 focus:ring-brand-600'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-emergency-600 font-medium">{errors.phone}</p>}
                  </div>

                  {/* Email (Optional) */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. chioma@gmail.com"
                        className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/50 border rounded-xl text-xs sm:text-sm focus:bg-white transition-colors ${
                          errors.email ? 'border-emergency-500 focus:ring-emergency-500' : 'border-slate-300 focus:border-brand-600 focus:ring-brand-600'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-emergency-600 font-medium">{errors.email}</p>}
                  </div>

                  {/* Department / Service */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="department" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Department / Service <span className="text-emergency-600">*</span>
                    </label>
                    <div className="relative">
                      <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        id="department"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-brand-600 focus:ring-brand-600 text-slate-800"
                      >
                        {hospitalServices.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.category.toUpperCase()})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Preferred Date <span className="text-emergency-600">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/50 border rounded-xl text-xs sm:text-sm focus:bg-white transition-colors ${
                          errors.preferredDate ? 'border-emergency-500 focus:ring-emergency-500' : 'border-slate-300 focus:border-brand-600 focus:ring-brand-600'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && <p className="text-xs text-emergency-600 font-medium">{errors.preferredDate}</p>}
                  </div>

                  {/* Preferred Time Window */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-brand-600 focus:ring-brand-600 text-slate-800"
                      >
                        <option value="Morning (09:00 AM – 12:00 PM)">Morning Clinic (09:00 AM – 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM – 03:00 PM)">Afternoon Clinic (12:00 PM – 03:00 PM)</option>
                        <option value="Evening (03:00 PM – 06:00 PM)">Evening Clinic (03:00 PM – 06:00 PM)</option>
                        <option value="Antenatal Clinic Session">Antenatal Group Clinic Day</option>
                      </select>
                    </div>
                  </div>

                  {/* Reason for Visit */}
                  <div className="sm:col-span-2 space-y-1 sm:space-y-1.5">
                    <label htmlFor="reasonForVisit" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Reason for Visit
                    </label>
                    <select
                      id="reasonForVisit"
                      value={formData.reasonForVisit}
                      onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 bg-slate-50/50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-brand-600 focus:ring-brand-600 text-slate-800"
                    >
                      <option value="Antenatal Booking / Checkup">Antenatal Booking / Routine Checkup</option>
                      <option value="Maternity Consultation">Maternity / Obstetric Consultation</option>
                      <option value="General Physician Consultation">General Physician Consultation</option>
                      <option value="Child / Pediatric Wellness">Child / Pediatric Wellness &amp; Immunization</option>
                      <option value="Diagnostic Laboratory Test">Diagnostic Laboratory Investigation</option>
                      <option value="Routine Health Checkup">Routine Preventive Health Checkup</option>
                      <option value="Follow-up Review">Follow-up Review / Medication Refill</option>
                      <option value="Other Medical Enquiry">Other Medical Inquiry</option>
                    </select>
                  </div>

                  {/* Additional Message / Notes */}
                  <div className="sm:col-span-2 space-y-1 sm:space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Additional Details / Symptoms <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your symptoms or any specific requirements..."
                      className="w-full p-3 sm:p-3.5 bg-slate-50/50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-brand-600 focus:ring-brand-600 text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Notice & Disclaimer */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  <p className="font-semibold text-slate-800 mb-0.5">
                    Notice: "Appointment requests are subject to confirmation by the hospital."
                  </p>
                  Our front desk officer will call you to confirm availability. For immediate clinical emergencies, please call {siteConfig.phone} directly.
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all min-h-[44px]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Appointment</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
