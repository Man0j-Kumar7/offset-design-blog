import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { CATEGORIES } from '../data/articles';
import { CategoryType } from '../types';

interface CategorySectionProps {
  onSelectCategory: (category: string) => void;
  onViewAllCategories: () => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
  onViewAllCategories,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('UI/UX');

  const currentCategoryData = CATEGORIES.find((c) => c.name === activeCategory) || CATEGORIES[0];

  return (
    <section className="py-20 sm:py-28 bg-[#1A1420] text-[#F2EBDD] border-b border-[#42364E] relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 editorial-grid-dark pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#42364E] pb-4 mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B86F5A] block mb-1">
              DISCIPLINES & TAXONOMY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-[-0.03em] text-[#FAF6EE]">
              THE ARCHIVE
            </h2>
          </div>
          <button
            onClick={onViewAllCategories}
            className="text-xs font-mono text-[#B8AA98] hover:text-[#FAF6EE] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            <span>VIEW ALL CATEGORIES INDEX</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B86F5A]" />
          </button>
        </div>

        {/* 2-Column Interactive Layout: List on Left, Supporting Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Category Rows (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#42364E]">
            {CATEGORIES.map((cat, index) => {
              const isActive = activeCategory === cat.name;
              return (
                <div
                  key={cat.name}
                  onMouseEnter={() => setActiveCategory(cat.name)}
                  onClick={() => onSelectCategory(cat.name)}
                  className={`group py-5 sm:py-6 cursor-pointer flex items-center justify-between transition-all duration-300 ${
                    isActive ? 'pl-4 sm:pl-6 bg-[#2E2537]/50' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[#788276] w-6">
                      0{index + 1}
                    </span>
                    <div>
                      <h3
                        className={`font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight transition-all duration-300 ${
                          isActive
                            ? 'text-[#FAF6EE] translate-x-1.5'
                            : 'text-[#B8AA98] group-hover:text-[#FAF6EE]'
                        }`}
                      >
                        {cat.name.toUpperCase()}
                      </h3>
                      <p className={`text-xs text-[#788276] mt-1 font-body transition-opacity duration-300 ${
                        isActive ? 'opacity-100 text-[#DDD1BE]' : 'opacity-0 sm:opacity-70'
                      }`}>
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#788276] hidden sm:inline">
                      {cat.count} ESSAYS
                    </span>
                    <div
                      className={`w-9 h-9 border flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'border-[#B86F5A] bg-[#B86F5A] text-[#FAF6EE] rotate-45'
                          : 'border-[#42364E] text-[#B8AA98] group-hover:border-[#FAF6EE] group-hover:text-[#FAF6EE]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Supporting Visual Panel (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#42364E] p-4 bg-[#241D2B]">
              {/* Corner crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 text-[10px] font-mono text-[#788276]">+</div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 text-[10px] font-mono text-[#788276]">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-[10px] font-mono text-[#788276]">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-[10px] font-mono text-[#788276]">+</div>

              {/* Animated image switch */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#1A1420]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategoryData.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={currentCategoryData.image}
                      alt={currentCategoryData.name}
                      className="w-full h-full object-cover grayscale-[15%] contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1420]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#241D2B]/90 backdrop-blur-sm border border-[#42364E]">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#B8AA98] mb-1">
                        <span className="uppercase text-[#B86F5A] font-semibold">
                          {currentCategoryData.name}
                        </span>
                        <span>{currentCategoryData.count} STORIES</span>
                      </div>
                      <p className="text-xs text-[#DDD1BE] font-body line-clamp-2">
                        {currentCategoryData.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action */}
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-[#42364E]/60 text-xs font-mono">
                <span className="text-[#788276]">DISCIPLINE REF. 2026</span>
                <button
                  onClick={() => onSelectCategory(currentCategoryData.name)}
                  className="text-[#FAF6EE] hover:text-[#B86F5A] transition-colors flex items-center gap-1"
                >
                  EXPLORE {currentCategoryData.name.toUpperCase()} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
