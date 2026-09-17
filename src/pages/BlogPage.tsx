import React, { useState, useEffect } from 'react';
import { Clock, User, Calendar, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { EditableNotice } from '../components/common/EditableNotice';
import { healthArticlesList } from '../config/siteConfig';
import { HealthArticle } from '../types';

interface BlogPageProps {
  initialSlug?: string;
  onNavigate: (page: string, data?: any) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ initialSlug, onNavigate }) => {
  const [selectedArticle, setSelectedArticle] = useState<HealthArticle | null>(null);

  useEffect(() => {
    if (initialSlug) {
      const found = healthArticlesList.find((a) => a.slug === initialSlug);
      if (found) setSelectedArticle(found);
    }
  }, [initialSlug]);

  const handleSelectArticle = (article: HealthArticle) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 80, behavior: 'smooth' });
  };

  return (
    <main id="main-content" className="flex-grow py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {selectedArticle ? (
          /* Full Article Reader View */
          <article className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-700 hover:text-brand-900 transition-colors p-2 rounded-lg hover:bg-brand-50 min-h-[38px]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Back to All Health Articles</span>
            </button>

            {/* Article Header */}
            <div className="space-y-3 sm:space-y-4 border-b border-slate-200 pb-5 sm:pb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-800 border border-brand-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                {selectedArticle.category}
              </span>

              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {selectedArticle.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{selectedArticle.author}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{selectedArticle.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{selectedArticle.readTime}</span>
                </span>
              </div>
            </div>

            {/* Summary Lead */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 sm:p-6 rounded-2xl border-l-4 border-brand-700">
              {selectedArticle.summary}
            </p>

            {/* Key Clinical Takeaways Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2.5 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Key Medical Takeaways</span>
              </h3>
              <ul className="space-y-2">
                {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content Paragraphs */}
            <div className="prose prose-slate max-w-none space-y-4 sm:space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Reassuring Clinical Disclaimer & Appointment Link */}
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 sm:space-y-2">
              <p className="font-bold text-slate-800">
                Medical Disclaimer:
              </p>
              <p className="leading-relaxed">
                This health article is provided for informational and educational purposes. It does not replace individualized clinical evaluation. For personalized advice, please consult your physician or visit DIMMA Hospital &amp; Maternity.
              </p>
            </div>

            {/* Footer Article Action */}
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="font-bold text-base sm:text-lg text-white">Have questions about your pregnancy or health?</h4>
                <p className="text-xs sm:text-sm text-slate-300">Our doctors and midwives in Trans-Ekulu, Enugu are here to help.</p>
              </div>
              <button
                onClick={() => onNavigate('appointment')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-brand-900 font-bold text-xs sm:text-sm shrink-0 hover:bg-slate-100 shadow transition-colors min-h-[42px]"
              >
                Book Consultation
              </button>
            </div>
          </article>
        ) : (
          /* Articles Catalog / Grid View */
          <div className="space-y-8 sm:space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Health Education Library
              </span>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Health &amp; Maternity Articles
              </h1>
              <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Evidence-based patient guidance, maternal wellness education, and newborn care insights curated by DIMMA Hospital &amp; Maternity.
              </p>
            </div>

            {/* Structure Notice */}
            <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
              <span>Demonstration health articles structured for easy publication of future hospital-approved content.</span>
              <EditableNotice
                label="Educational Content"
                field="Articles can be expanded with hospital management topics"
              />
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {healthArticlesList.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group space-y-4 sm:space-y-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-50 text-brand-800 border border-brand-200 text-[11px] sm:text-xs">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {article.summary}
                    </p>

                    <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <span className="text-xs font-bold text-slate-800 block">Highlights:</span>
                      <p className="text-xs text-slate-600 italic line-clamp-2">
                        {article.keyTakeaways[0]}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                      {article.author}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleSelectArticle(article)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-900 transition-colors min-h-[36px]"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
};
