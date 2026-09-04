import React from 'react';
import { ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import { CATEGORIES, ARTICLES } from '../data/articles';

interface CategoriesPageProps {
  onSelectCategory: (category: string) => void;
  onReadArticle: (articleId: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onSelectCategory,
  onReadArticle,
}) => {
  return (
    <div className="min-h-screen bg-[#F2EBDD] text-[#241D2B] pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="border-b border-[#241D2B] pb-8 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B86F5A] block mb-2">
            DESIGN TAXONOMY
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-[-0.04em] text-[#241D2B] mb-4">
            CATEGORIES
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#241D2B]/80 max-w-2xl">
            Six disciplined avenues of inquiry shaping contemporary digital and visual culture.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CATEGORIES.map((category, idx) => {
            const categoryArticles = ARTICLES.filter((a) => a.category === category.name);
            return (
              <div
                key={category.name}
                className="group border border-[#DDD1BE] bg-[#FAF6EE] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Essay Count */}
                  <div className="flex items-center justify-between border-b border-[#DDD1BE] pb-3 mb-5 text-xs font-mono text-[#788276]">
                    <span>DISCIPLINE 0{idx + 1}</span>
                    <span className="text-[#B86F5A] font-bold">
                      {category.count} ESSAYS PUBLISHED
                    </span>
                  </div>

                  {/* Image */}
                  <div
                    onClick={() => onSelectCategory(category.name)}
                    className="relative aspect-[16/9] overflow-hidden bg-[#241D2B] mb-6 cursor-pointer"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241D2B]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-[#FAF6EE]">
                      <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
                        {category.name.toUpperCase()}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-body text-[#241D2B]/80 font-light leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Sample Stories in this category */}
                  {categoryArticles.length > 0 && (
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-[#DDD1BE]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#788276] block">
                        RECENT DISPATCHES
                      </span>
                      {categoryArticles.slice(0, 2).map((art) => (
                        <div
                          key={art.id}
                          onClick={() => onReadArticle(art.id)}
                          className="text-xs text-[#241D2B] hover:text-[#B86F5A] cursor-pointer flex items-center justify-between py-1 border-b border-[#DDD1BE]/40 font-medium"
                        >
                          <span className="truncate max-w-[280px]">{art.title}</span>
                          <span className="text-[10px] font-mono text-[#788276] shrink-0 ml-2">
                            {art.readTime}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => onSelectCategory(category.name)}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#DDD1BE] text-xs font-mono uppercase tracking-wider text-[#241D2B] group-hover:text-[#B86F5A] transition-colors"
                >
                  <span>EXPLORE ALL {category.name.toUpperCase()} ESSAYS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
