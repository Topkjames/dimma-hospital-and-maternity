import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { healthArticlesList } from '../../config/siteConfig';

interface HealthArticlesPreviewProps {
  onViewArticle: (slug: string) => void;
  onViewAllArticles: () => void;
}

export const HealthArticlesPreview: React.FC<HealthArticlesPreviewProps> = ({
  onViewArticle,
  onViewAllArticles,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Health Education & Guidance"
          title="Health & Maternal Wellness Articles"
          subtitle="Educational insights curated to help mothers, fathers, and families make informed everyday health decisions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {healthArticlesList.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-500 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-brand-100/70 text-brand-800">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {article.author}
                </span>

                <button
                  type="button"
                  onClick={() => onViewArticle(article.slug)}
                  className="text-xs font-bold text-brand-700 hover:text-brand-900 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onViewAllArticles}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 bg-white font-bold text-xs sm:text-sm transition-all shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-brand-700" />
            <span>View All Health Articles</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

      </div>
    </section>
  );
};

