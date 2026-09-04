import React from 'react';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { Article } from '../types';

interface FeaturedStoryProps {
  article: Article;
  onReadArticle: (articleId: string) => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({
  article,
  onReadArticle,
}) => {
  return (
    <section className="bg-[#241D2B] text-[#F2EBDD] py-16 sm:py-24 border-b border-[#42364E] relative overflow-hidden">
      {/* Editorial grid lines on dark plum */}
      <div className="absolute inset-0 editorial-grid-dark pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header with Issue Details */}
        <div className="flex items-center justify-between border-b border-[#42364E] pb-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-[#B86F5A] text-[#FAF6EE]">
              COVER STORY
            </span>
            <span className="text-xs font-mono tracking-widest text-[#B8AA98] uppercase">
              {article.category}
            </span>
          </div>
          <span className="text-xs font-mono text-[#788276]">
            EDITORIAL SELECTION 01
          </span>
        </div>

        {/* Asymmetrical Layout: Typography (6 cols) & Imagery (6 cols) with inverted weight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Eyebrow */}
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#B86F5A] mb-3">
              {article.category} ESSAY
            </div>

            {/* Headline */}
            <h2 
              onClick={() => onReadArticle(article.id)}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.05] tracking-[-0.03em] text-[#FAF6EE] mb-5 cursor-pointer hover:text-[#B8AA98] transition-colors"
            >
              {article.title}
            </h2>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#DDD1BE]/90 font-light font-body leading-relaxed mb-8 max-w-xl">
              {article.excerpt}
            </p>

            {/* Author Meta & Timing */}
            <div className="pt-6 border-t border-[#42364E] flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#42364E]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-semibold text-[#FAF6EE]">
                    {article.author.name}
                  </div>
                  <div className="text-xs text-[#B8AA98] font-mono">
                    {article.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[#B8AA98]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#788276]" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#788276]" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Read Article Button */}
            <div>
              <button
                id="featured-story-read-btn"
                onClick={() => onReadArticle(article.id)}
                className="group inline-flex items-center gap-4 px-6 py-3.5 bg-[#FAF6EE] text-[#241D2B] font-mono text-xs uppercase tracking-[0.16em] hover:bg-[#B86F5A] hover:text-[#FAF6EE] transition-all rounded-none"
              >
                <span>READ COMPLETE ESSAY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Large Editorial Image with Asymmetric Layout */}
          <div className="lg:col-span-6 relative">
            <div 
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => onReadArticle(article.id)}
            >
              {/* Corner crop indicators */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#FAF6EE]/80 z-20" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#FAF6EE]/80 z-20" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#FAF6EE]/80 z-20" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#FAF6EE]/80 z-20" />

              <div className="relative aspect-[16/11] sm:aspect-[4/3] overflow-hidden bg-[#1A1420]">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1420]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Caption */}
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#B8AA98]">
                <span className="italic">{article.coverCaption}</span>
                <span className="text-[#B86F5A] group-hover:underline">VIEW STORY →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
