import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { EditableNotice } from '../components/common/EditableNotice';
import { medicalTeamPlaceholders } from '../config/siteConfig';

interface DoctorsPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ onNavigate }) => {
  return (
    <main id="main-content" className="flex-grow py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            Clinical Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Medical Team &amp; Specialists
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A committed team of physicians, obstetric consultants, pediatric healthcare providers, and skilled midwives delivering compassionate patient care.
          </p>
        </div>

        {/* Informative Structure Notice */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <div className="space-y-1">
            <span className="font-bold text-slate-900 block">
              Departmental Structure &amp; Clinical Roles
            </span>
            <p className="text-slate-500">
              Profiles are structured to present the hospital's clinical departments and can be updated with verified names, credentials, and headshots upon management approval.
            </p>
          </div>
          <EditableNotice
            label="Staff Roster"
            field="Awaiting hospital management verified credentials"
          />
        </div>

        {/* Doctors & Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicalTeamPlaceholders.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Department Badge */}
                <span className="inline-block px-2.5 py-1 rounded-md bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider border border-brand-200/80 mb-4">
                  {member.department}
                </span>

                {/* Role Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {member.role}
                </h3>

                {/* Role Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Availability info */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 space-y-1 mb-4">
                  <span className="font-bold text-slate-900 block">Consultation Schedule</span>
                  <p className="text-slate-600">{member.availability}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Verified Role
                </span>

                <button
                  type="button"
                  onClick={() => onNavigate('appointment', { department: member.department })}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-900 transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hospital Care Standards */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
          <SectionHeading
            badge="Clinical Governance"
            title="Our Standard of Medical Practice"
            subtitle="How our healthcare personnel maintain quality, safety, and patient satisfaction."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Patient-First Consultations</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thorough physical evaluations, empathetic listening, and careful review of medical histories without rushed appointments.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Collaborative Multidisciplinary Care</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Close coordination between attending physicians, midwives, laboratory diagnosticians, and pharmacy staff for holistic patient outcomes.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Continuous Nursing Vigilance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                24-hour bedside nursing care, regular vital sign checks, and prompt response to inpatient needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-brand-800 text-white text-center space-y-4">
          <h3 className="text-2xl font-bold">Schedule an Appointment with Our Medical Team</h3>
          <p className="text-brand-100 text-sm max-w-lg mx-auto">
            Book an in-person consultation with a general physician or maternity specialist at DIMMA Hospital &amp; Maternity.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('appointment')}
              className="px-6 py-3 rounded-xl bg-white text-brand-900 font-bold text-sm shadow hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-brand-700" />
              <span>Schedule a Visit</span>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

