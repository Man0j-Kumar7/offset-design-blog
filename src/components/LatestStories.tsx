import React from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Article } from '../types';

interface LatestStoriesProps {
  articles: Article[];
  onReadArticle: (articleId: string) => void;
  onSelectCategory: (category: string) => void;
}

export const LatestStories: React.FC<LatestStoriesProps> = ({
  articles,
  onReadArticle,
  onSelectCategory,
}) => {
  // We want to feature the 6 articles in varied editorial layouts
  const leadArticle = articles[0]; // Wide asymmetric lead
  const midArticles = articles.slice(1, 3); // 2-column balanced
  const triadArticles = articles.slice(3, 6); // 3-column editorial grid

  return (
    <section className="py-16 sm:py-24 bg-[#F2EBDD] text-[#241D2B] border-b border-[#DDD1BE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#241D2B] pb-4 mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B86F5A] block mb-1">
              CURRENT DISPATCHES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-[-0.03em] text-[#241D2B]">
              LATEST
            </h2>
          </div>
          <div className="text-xs font-mono text-[#788276] flex items-center gap-3">
            <span>SHOWING 06 ESSAYS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F5A]" />
            <span>UPDATED WEEKLY</span>
          </div>
        </div>

        {/* 1. LEAD ARTICLE: Wide Horizontal Editorial Asymmetry */}
        {leadArticle && (
          <div 
            onClick={() => onReadArticle(leadArticle.id)}
            className="group cursor-pointer border-b border-[#DDD1BE] pb-12 mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual (7 cols) */}
            <div className="lg:col-span-7 relative overflow-hidden bg-[#241D2B] aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={leadArticle.coverImage}
                alt={leadArticle.title}
                className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.04] group-hover:grayscale-0 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCategory(leadArticle.category);
                  }}
                  className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#241D2B] text-[#F2EBDD] hover:bg-[#B86F5A] transition-colors"
                >
                  {leadArticle.category}
                </span>
              </div>
            </div>

            {/* Typography & Meta (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#788276] mb-3">
                  <span>{leadArticle.date}</span>
                  <span>•</span>
                  <span>{leadArticle.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-[#241D2B] group-hover:text-[#B86F5A] transition-colors mb-4">
                  {leadArticle.title}
                </h3>
                <p className="text-sm sm:text-base text-[#241D2B]/80 font-body font-light leading-relaxed mb-6">
                  {leadArticle.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#DDD1BE]">
                <div className="flex items-center gap-2.5">
                  <img
                    src={leadArticle.author.avatar}
                    alt={leadArticle.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#DDD1BE]"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-medium text-[#241D2B]">
                    {leadArticle.author.name}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[#B86F5A] group-hover:translate-x-1 transition-transform">
                  READ STORY <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 2. MID ARTICLES: 2-Column Balanced Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 border-b border-[#DDD1BE] pb-12 mb-12">
          {midArticles.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article.id)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative overflow-hidden bg-[#241D2B] aspect-[16/10] mb-5">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.04] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCategory(article.category);
                      }}
                      className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#241D2B] text-[#F2EBDD] hover:bg-[#B86F5A] transition-colors"
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#788276] mb-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241D2B] group-hover:text-[#B86F5A] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-sm text-[#241D2B]/80 font-body font-light leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#DDD1BE]/60 text-xs">
                <span className="font-medium text-[#241D2B]">
                  By {article.author.name}
                </span>
                <span className="text-[#B86F5A] font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  READ <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* 3. TRIAD ARTICLES: 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {triadArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article.id)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden bg-[#241D2B] aspect-[4/3] mb-4">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.04] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCategory(article.category);
                      }}
                      className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-[#241D2B] text-[#F2EBDD] hover:bg-[#B86F5A] transition-colors"
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-[#788276] mb-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display font-semibold text-lg text-[#241D2B] group-hover:text-[#B86F5A] transition-colors leading-snug mb-2.5 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#241D2B]/75 font-body font-light leading-relaxed line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#DDD1BE]/60 text-xs">
                <span className="text-[11px] text-[#788276]">
                  {article.author.name}
                </span>
                <span className="text-[#B86F5A] font-mono text-[11px] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  EXPLORE <ArrowRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
