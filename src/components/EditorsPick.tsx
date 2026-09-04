import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Article } from '../types';

interface EditorsPickProps {
  article: Article;
  onReadArticle: (articleId: string) => void;
}

export const EditorsPick: React.FC<EditorsPickProps> = ({
  article,
  onReadArticle,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle image parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 bg-[#FAF6EE] text-[#241D2B] border-b border-[#DDD1BE] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header Badge */}
        <div className="flex items-center justify-between border-b border-[#DDD1BE] pb-4 mb-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#B86F5A] uppercase">
            <Star className="w-3.5 h-3.5 fill-[#B86F5A] text-[#B86F5A]" />
            <span>EDITOR'S PICK</span>
          </div>
          <span className="text-xs font-mono text-[#788276]">
            SPECIAL ESSAY / 09 MIN READ
          </span>
        </div>

        {/* Dramatic Headline & Excerpt */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2
            onClick={() => onReadArticle(article.id)}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em] text-[#241D2B] hover:text-[#B86F5A] transition-colors cursor-pointer mb-6"
          >
            {article.title}
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#241D2B]/80 font-normal leading-snug max-w-3xl">
            "{article.subtitle}"
          </p>
        </div>

        {/* Large Editorial Image with Subtle Parallax */}
        <div 
          onClick={() => onReadArticle(article.id)}
          className="relative overflow-hidden bg-[#241D2B] aspect-[16/9] sm:aspect-[21/9] cursor-pointer group mb-8 border border-[#DDD1BE]"
        >
          <motion.div
            style={{ y: imageY }}
            className="absolute -top-[10%] left-0 right-0 -bottom-[10%] w-full h-[120%]"
          >
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#241D2B]/75 via-transparent to-transparent pointer-events-none" />

          {/* Floating metadata overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-[#F2EBDD] gap-4">
            <div className="max-w-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8AA98] block mb-1">
                CURATED PERSPECTIVE
              </span>
              <p className="text-sm font-light text-[#FAF6EE] line-clamp-2">
                {article.excerpt}
              </p>
            </div>
            <button className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF6EE] text-[#241D2B] text-xs font-mono uppercase tracking-wider group-hover:bg-[#B86F5A] group-hover:text-[#FAF6EE] transition-colors">
              <span>READ ESSAY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Colophon / Pull Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#788276] pt-4 border-t border-[#DDD1BE] gap-2">
          <span>ESSAY BY {article.author.name.toUpperCase()} ({article.author.role.toUpperCase()})</span>
          <span>PUBLISHED {article.date.toUpperCase()} • DISCIPLINE: {article.category.toUpperCase()}</span>
        </div>
      </div>
    </section>
  );
};
