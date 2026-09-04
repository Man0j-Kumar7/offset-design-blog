import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        // Trigger search open
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = articles.filter((a) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.author.name.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#241D2B]/80 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-[#F2EBDD] border border-[#241D2B] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-5 border-b border-[#DDD1BE] bg-[#FAF6EE] gap-4">
          <Search className="w-5 h-5 text-[#B86F5A] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, categories, authors, or concepts..."
            className="w-full bg-transparent text-lg sm:text-xl font-display font-medium text-[#241D2B] placeholder:text-[#788276] placeholder:font-normal focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-mono text-[#788276] hover:text-[#241D2B]"
            >
              CLEAR
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 border border-[#DDD1BE] text-[#241D2B] hover:border-[#B86F5A] rounded-none ml-2"
            title="Close search (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Metadata Bar */}
        <div className="px-6 py-2.5 bg-[#EAE1D1] border-b border-[#DDD1BE] flex items-center justify-between text-xs font-mono text-[#788276]">
          <span>
            {query.trim() ? (
              <>
                SHOWING <strong className="text-[#241D2B]">{filteredArticles.length}</strong> RESULTS FOR "{query}"
              </>
            ) : (
              <>ALL <strong className="text-[#241D2B]">{articles.length}</strong> ARTICLES IN ARCHIVE</>
            )}
          </span>
          <span className="hidden sm:inline">ESC TO CLOSE</span>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto divide-y divide-[#DDD1BE] p-2 sm:p-4">
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center">
              <BookOpen className="w-10 h-10 text-[#788276] mx-auto mb-3 opacity-60" />
              <h3 className="font-display font-semibold text-lg text-[#241D2B] mb-1">
                No matching articles found
              </h3>
              <p className="text-xs font-mono text-[#788276] max-w-sm mx-auto mb-4">
                Try searching for general terms like "interfaces", "typography", "minimalism", or "AI".
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {['UI/UX', 'Web Design', 'Typography', 'Branding'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setQuery(cat)}
                    className="px-2.5 py-1 text-xs font-mono bg-[#FAF6EE] border border-[#DDD1BE] text-[#241D2B] hover:border-[#B86F5A]"
                  >
                    #{cat}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article.id);
                  onClose();
                }}
                className="group p-3 sm:p-4 hover:bg-[#FAF6EE] cursor-pointer flex items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-[#241D2B] overflow-hidden border border-[#DDD1BE]">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#788276] uppercase tracking-wider mb-1">
                      <span className="text-[#B86F5A] font-bold">{article.category}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.author.name}</span>
                    </div>

                    <h4 className="font-display font-bold text-base sm:text-lg text-[#241D2B] group-hover:text-[#B86F5A] transition-colors leading-snug">
                      {article.title}
                    </h4>

                    <p className="text-xs text-[#788276] font-body line-clamp-1 mt-0.5">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 w-8 h-8 border border-[#DDD1BE] flex items-center justify-center text-[#241D2B] group-hover:border-[#B86F5A] group-hover:bg-[#B86F5A] group-hover:text-[#FAF6EE] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
