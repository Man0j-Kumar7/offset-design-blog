import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { Article } from '../types';

interface HeroSectionProps {
  onExplore: () => void;
  onReadArticle: (articleId: string) => void;
  featuredArticle: Article;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onReadArticle,
  featuredArticle,
}) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#DDD1BE]">
      {/* Subtle Background Editorial Grid & Alignment lines */}
      <div className="absolute inset-0 editorial-grid-lines pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Editorial Registration / Alignment Bar */}
        <div className="flex items-center justify-between border-b border-[#DDD1BE] pb-3 mb-8 sm:mb-12 text-[11px] font-mono text-[#788276] tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B86F5A] inline-block animate-pulse" />
            <span>OFFSET PUBLICATION</span>
            <span className="text-[#DDD1BE]">|</span>
            <span className="hidden sm:inline">ISSUE 14 — VOL. 03</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">CIRCULATION: GLOBAL</span>
            <span className="text-[#B86F5A] font-semibold">2026 EDITION</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Eyebrow, Giant Expressive Headline, Supporting Text, Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Small Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.2em] text-[#B86F5A] uppercase mb-4 sm:mb-6"
              >
                <span>DESIGN / IDEAS / 2026</span>
                <span className="w-8 h-[1px] bg-[#B86F5A]/40 inline-block" />
              </motion.div>

              {/* Large Headline with staggered typography */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.96] tracking-[-0.04em] text-[#241D2B] mb-6 sm:mb-8"
              >
                WHERE IDEAS <br className="hidden sm:inline" />
                <span className="italic font-serif font-normal text-[#B86F5A] tracking-normal">
                  TAKE SHAPE.
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
                className="text-lg sm:text-xl text-[#241D2B]/80 font-light leading-relaxed max-w-xl mb-8 sm:mb-10 font-body"
              >
                A visual journal exploring the ideas, systems and people shaping the future of design.
              </motion.p>
            </div>

            {/* Primary Action Button & Metadata Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4 border-t border-[#DDD1BE]/80"
            >
              <button
                id="hero-explore-btn"
                onClick={onExplore}
                className="group inline-flex items-center justify-between gap-4 px-6 py-4 bg-[#241D2B] text-[#F2EBDD] font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#B86F5A] transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#B86F5A]"
              >
                <span>EXPLORE STORIES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <div className="flex items-center gap-6 text-xs font-mono text-[#788276]">
                <div className="flex flex-col">
                  <span className="text-[#241D2B] font-bold">10 ARTICLES</span>
                  <span>CURATED THIS MONTH</span>
                </div>
                <div className="w-[1px] h-8 bg-[#DDD1BE]" />
                <div className="flex flex-col">
                  <span className="text-[#241D2B] font-bold">6 DISCIPLINES</span>
                  <span>INTERACTION TO AI</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Featured Editorial Visual with Asymmetric Crop (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Editorial Frame with Corner Crop Marks */}
            <div className="relative group cursor-pointer" onClick={() => onReadArticle(featuredArticle.id)}>
              {/* Graphic Corner Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#241D2B] z-20 pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#241D2B] z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#241D2B] z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#241D2B] z-20 pointer-events-none" />

              {/* Image Container with subtle hover zoom */}
              <div className="relative overflow-hidden bg-[#241D2B] aspect-[4/5] sm:aspect-[3/4] shadow-sm">
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Gradient Veil for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241D2B]/90 via-[#241D2B]/25 to-transparent" />

                {/* Floating Story Preview Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-[#F2EBDD]">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 text-[10px] font-mono uppercase tracking-widest bg-[#B86F5A] text-[#FAF6EE]">
                    FEATURED STORY
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl leading-tight mb-2 group-hover:text-[#B8AA98] transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-xs text-[#DDD1BE] line-clamp-2 font-body font-light mb-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#DDD1BE]/80 pt-2 border-t border-[#DDD1BE]/20">
                    <span>{featuredArticle.author.name}</span>
                    <span className="flex items-center gap-1 text-[#FAF6EE] group-hover:text-[#B86F5A] transition-colors">
                      READ ESSAY <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Caption Under Visual */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#788276]">
                <span className="truncate max-w-[280px]">FIG. 01 — {featuredArticle.coverCaption}</span>
                <span>VOL. 03 / P. 14</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
