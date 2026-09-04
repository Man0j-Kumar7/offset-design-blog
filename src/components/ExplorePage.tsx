import React, { useState, useMemo } from 'react';
import { ArrowRight, Clock, Filter, ArrowUpDown } from 'lucide-react';
import { Article, CategoryType } from '../types';

interface ExplorePageProps {
  articles: Article[];
  onReadArticle: (articleId: string) => void;
  initialCategory?: string;
}

const CATEGORY_OPTIONS: (CategoryType | 'All')[] = [
  'All',
  'UI/UX',
  'Web Design',
  'Branding',
  'Typography',
  'Graphic Design',
  'AI + Design',
];

export const ExplorePage: React.FC<ExplorePageProps> = ({
  articles,
  onReadArticle,
  initialCategory = 'All',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<'newest' | 'reading-time'>('newest');

  const filteredArticles = useMemo(() => {
    let list = [...articles];

    if (selectedCategory !== 'All') {
      list = list.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (sortBy === 'newest') {
      // already ordered by newest date
      return list;
    } else if (sortBy === 'reading-time') {
      return list.sort((a, b) => {
        const timeA = parseInt(a.readTime);
        const timeB = parseInt(b.readTime);
        return timeB - timeA;
      });
    }

    return list;
  }, [articles, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#F2EBDD] text-[#241D2B] pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="border-b border-[#241D2B] pb-8 mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B86F5A] block mb-2">
            EDITORIAL ARCHIVE
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-[-0.04em] text-[#241D2B] mb-4">
            EXPLORE
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#241D2B]/80 max-w-xl">
            "Ideas worth slowing down for."
          </p>
        </div>

        {/* Filter Bar & Sorting */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DDD1BE] mb-12">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORY_OPTIONS.map((cat) => {
              const active = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                    active
                      ? 'bg-[#241D2B] text-[#FAF6EE] font-bold'
                      : 'bg-[#FAF6EE] text-[#241D2B] border border-[#DDD1BE] hover:border-[#241D2B]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Article Count & Sorting */}
          <div className="flex items-center justify-between lg:justify-end gap-6 text-xs font-mono">
            <span className="text-[#788276]">
              SHOWING <strong className="text-[#241D2B]">{filteredArticles.length}</strong> ARTICLES
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#788276]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'reading-time')}
                className="bg-[#FAF6EE] border border-[#DDD1BE] px-2.5 py-1.5 text-xs font-mono text-[#241D2B] focus:outline-none focus:border-[#241D2B]"
              >
                <option value="newest">Sort: Newest</option>
                <option value="reading-time">Sort: Longest Read</option>
              </select>
            </div>
          </div>
        </div>

        {/* Articles Grid - Varied Layout */}
        {filteredArticles.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-[#DDD1BE] p-8">
            <p className="font-display text-xl text-[#241D2B] mb-2">
              No articles found in this category
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs font-mono text-[#B86F5A] underline"
            >
              Reset to all categories
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredArticles.map((article, idx) => {
              const isLarge = idx === 0 || idx === 4;
              return (
                <article
                  key={article.id}
                  onClick={() => onReadArticle(article.id)}
                  className={`group cursor-pointer flex flex-col justify-between border-b border-[#DDD1BE] pb-8 ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    {/* Visual */}
                    <div
                      className={`relative overflow-hidden bg-[#241D2B] mb-5 border border-[#DDD1BE] ${
                        isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                    >
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.03] group-hover:grayscale-0 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#241D2B] text-[#FAF6EE]">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-[#788276] mb-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2
                      className={`font-display font-bold text-[#241D2B] group-hover:text-[#B86F5A] transition-colors leading-tight mb-3 ${
                        isLarge ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
                      }`}
                    >
                      {article.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#241D2B]/80 font-body font-light leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#DDD1BE]/80 text-xs font-mono">
                    <span className="text-[#788276]">By {article.author.name}</span>
                    <span className="text-[#B86F5A] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      READ ESSAY <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
