import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  Share2, 
  Clock, 
  Calendar, 
  Check, 
  Quote, 
  Sparkles,
  Link as LinkIcon 
} from 'lucide-react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  relatedArticles: Article[];
  onBack: () => void;
  onReadArticle: (articleId: string) => void;
  onSelectCategory: (category: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  relatedArticles,
  onBack,
  onReadArticle,
  onSelectCategory,
  isBookmarked,
  onToggleBookmark,
}) => {
  const { scrollYProgress } = useScroll();
  const [copied, setCopied] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>(
    article.sections[0]?.id || ''
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article.id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  return (
    <article className="min-h-screen bg-[#F2EBDD] text-[#241D2B] pt-28 sm:pt-36 pb-24 relative">
      {/* 1. Fixed Reading Progress Indicator Bar at very top */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#B86F5A] origin-left z-50 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Back navigation & Top Bar */}
        <div className="flex items-center justify-between border-b border-[#DDD1BE] pb-4 mb-8 sm:mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#788276] hover:text-[#241D2B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO STORIES</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggleBookmark(article)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border transition-all ${
                isBookmarked
                  ? 'border-[#B86F5A] bg-[#B86F5A] text-[#FAF6EE]'
                  : 'border-[#DDD1BE] bg-[#FAF6EE] text-[#241D2B] hover:border-[#B86F5A]'
              }`}
              title={isBookmarked ? 'Remove bookmark' : 'Save for later'}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {isBookmarked ? 'SAVED' : 'SAVE STORY'}
              </span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-[#DDD1BE] bg-[#FAF6EE] text-[#241D2B] hover:border-[#B86F5A] transition-colors"
              title="Share story"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#B86F5A]" />
                  <span className="text-[#B86F5A]">COPIED</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">SHARE</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Header Metadata */}
        <div className="mb-10 sm:mb-12">
          {/* Category */}
          <div className="mb-4">
            <button
              onClick={() => onSelectCategory(article.category)}
              className="px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] bg-[#241D2B] text-[#FAF6EE] hover:bg-[#B86F5A] transition-colors"
            >
              {article.category}
            </button>
          </div>

          {/* Article Title */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.04] tracking-[-0.035em] text-[#241D2B] mb-6">
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg sm:text-2xl text-[#241D2B]/80 font-light leading-relaxed mb-8 max-w-3xl">
            {article.subtitle}
          </p>

          {/* Author, Date, Reading Time */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#DDD1BE] text-xs font-mono text-[#788276]">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#DDD1BE]"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-sm font-display font-bold text-[#241D2B] block">
                  {article.author.name}
                </span>
                <span className="text-xs text-[#788276] font-mono">
                  {article.author.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Large Hero Image with Caption */}
        <div className="mb-14 sm:mb-18">
          <div className="relative overflow-hidden bg-[#241D2B] aspect-[16/10] sm:aspect-[16/9] border border-[#DDD1BE]">
            {/* Editorial Corner Crosshairs */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#FAF6EE] z-10" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#FAF6EE] z-10" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#FAF6EE] z-10" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FAF6EE] z-10" />

            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#788276]">
            <span>{article.coverCaption}</span>
            <span className="text-[#B86F5A]">PLATE 01</span>
          </div>
        </div>

        {/* Main Content Layout with Sticky Floating Navigation on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sticky Table of Contents (Desktop sidebar - 3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
            <div className="border border-[#DDD1BE] p-4 bg-[#FAF6EE]/80">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#788276] block mb-3">
                SECTIONS
              </span>
              <nav className="space-y-2.5 text-xs font-mono">
                {article.sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block text-left w-full truncate transition-colors ${
                      activeSectionId === section.id
                        ? 'text-[#B86F5A] font-bold'
                        : 'text-[#788276] hover:text-[#241D2B]'
                    }`}
                  >
                    0{idx + 1}. {section.heading?.replace(/^\d+\.\s*/, '') || `Part ${idx + 1}`}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-4 border border-[#DDD1BE] bg-[#FAF6EE]/80 text-xs font-mono text-[#788276]">
              <span className="text-[#241D2B] font-bold block mb-1">OFFSET DISPATCH</span>
              <span>Published by Editorial Board, 2026.</span>
            </div>
          </aside>

          {/* Long-Form Reading Body (9 cols on lg, full width otherwise) */}
          <div className="lg:col-span-9 space-y-12 max-w-prose">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-6">
                {/* Heading */}
                {section.heading && (
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#241D2B] tracking-tight pt-4 border-t border-[#DDD1BE]/60">
                    {section.heading}
                  </h2>
                )}

                {/* Paragraphs with high readability spacing & leading */}
                {section.body.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-body text-base sm:text-lg text-[#241D2B]/85 font-light leading-[1.75] tracking-normal"
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Pull Quote */}
                {section.pullQuote && (
                  <figure className="my-8 py-6 pl-6 sm:pl-8 border-l-2 border-[#B86F5A] bg-[#FAF6EE]/50">
                    <Quote className="w-6 h-6 text-[#B86F5A]/40 mb-3" />
                    <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#241D2B] font-normal leading-snug mb-3">
                      "{section.pullQuote}"
                    </blockquote>
                    {section.pullQuoteAuthor && (
                      <figcaption className="text-xs font-mono text-[#788276] uppercase tracking-wider">
                        — {section.pullQuoteAuthor}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* In-content Image with Caption */}
                {section.image && (
                  <div className="my-8">
                    <div className="relative overflow-hidden bg-[#241D2B] aspect-[16/10] border border-[#DDD1BE]">
                      <img
                        src={section.image.url}
                        alt={section.image.caption}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="mt-2.5 text-xs font-mono text-[#788276] italic">
                      {section.image.caption}
                    </p>
                  </div>
                )}

                {/* Highlighted Idea Box */}
                {section.highlightBox && (
                  <div className="my-8 p-6 bg-[#FAF6EE] border border-[#B86F5A]/40 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B86F5A] font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{section.highlightBox.title}</span>
                    </div>
                    <p className="text-sm font-body text-[#241D2B]/85 leading-relaxed whitespace-pre-line font-light">
                      {section.highlightBox.text}
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Tags */}
            <div className="pt-8 border-t border-[#DDD1BE] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#788276] mr-2">INDEX TAGS:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono bg-[#FAF6EE] border border-[#DDD1BE] text-[#241D2B]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio Box */}
            <div className="p-6 sm:p-8 bg-[#FAF6EE] border border-[#DDD1BE] flex flex-col sm:flex-row gap-5 items-start">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-16 h-16 rounded-full object-cover border border-[#DDD1BE] shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B86F5A] block mb-1">
                  WRITTEN BY
                </span>
                <h3 className="font-display font-bold text-xl text-[#241D2B] mb-1">
                  {article.author.name}
                </h3>
                <p className="text-xs font-mono text-[#788276] mb-3">
                  {article.author.role}
                </p>
                <p className="text-sm font-body text-[#241D2B]/80 font-light leading-relaxed">
                  {article.author.bio ||
                    'Contributing editor at OFFSET exploring design systems, interaction patterns, and visual culture.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Stories Section (Show 3 relevant articles) */}
        <div className="mt-20 sm:mt-28 pt-12 border-t-2 border-[#241D2B]">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#241D2B]">
              RELATED STORIES
            </h3>
            <span className="text-xs font-mono text-[#788276] uppercase tracking-wider">
              CONTINUE READING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.slice(0, 3).map((related) => (
              <div
                key={related.id}
                onClick={() => onReadArticle(related.id)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden bg-[#241D2B] aspect-[16/10] mb-4">
                    <img
                      src={related.coverImage}
                      alt={related.title}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-[#241D2B] text-[#FAF6EE]">
                        {related.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#788276] block mb-1">
                    {related.date} • {related.readTime}
                  </span>

                  <h4 className="font-display font-semibold text-lg text-[#241D2B] group-hover:text-[#B86F5A] transition-colors leading-snug mb-2 line-clamp-2">
                    {related.title}
                  </h4>

                  <p className="text-xs text-[#241D2B]/75 font-body font-light line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DDD1BE] mt-4 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#788276]">{related.author.name}</span>
                  <span className="text-[#B86F5A] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    READ <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
