import React, { useState, useEffect } from 'react';
import { Search, Bookmark, Menu, X, ArrowUpRight } from 'lucide-react';
import { PageView, Article } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, articleId?: string, categoryFilter?: string) => void;
  onOpenSearch: () => void;
  bookmarkedArticles: Article[];
  onOpenBookmarks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  bookmarkedArticles,
  onOpenBookmarks,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F2EBDD]/92 backdrop-blur-md border-b border-[#DDD1BE] py-3 shadow-[0_4px_20px_-10px_rgba(36,29,43,0.06)]'
          : 'bg-transparent border-b border-[#DDD1BE]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Minimal Wordmark with editorial crop marks */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F5A]"
        >
          <div className="relative flex items-center">
            {/* Subtle editorial crop mark icon */}
            <span className="text-[11px] font-mono text-[#788276] tracking-widest mr-1 opacity-80 group-hover:text-[#B86F5A] transition-colors">
              [+]
            </span>
            <span className="font-display font-bold text-2xl sm:text-[26px] tracking-[-0.04em] text-[#241D2B] group-hover:opacity-85 transition-opacity">
              OFFSET
            </span>
            <span className="ml-2 hidden sm:inline-block text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 border border-[#DDD1BE] text-[#788276] bg-[#FAF6EE]/80">
              ISSUE 14
            </span>
          </div>
        </button>

        {/* Center: Primary Navigation Links */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
          <button
            id="nav-link-explore"
            onClick={() => handleNavClick('explore')}
            className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors relative py-1 ${
              currentPage === 'explore'
                ? 'text-[#241D2B] font-semibold'
                : 'text-[#241D2B]/70 hover:text-[#241D2B]'
            }`}
          >
            Explore
            {currentPage === 'explore' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B86F5A]" />
            )}
          </button>

          <button
            id="nav-link-categories"
            onClick={() => handleNavClick('categories')}
            className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors relative py-1 ${
              currentPage === 'categories'
                ? 'text-[#241D2B] font-semibold'
                : 'text-[#241D2B]/70 hover:text-[#241D2B]'
            }`}
          >
            Categories
            {currentPage === 'categories' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B86F5A]" />
            )}
          </button>

          <button
            id="nav-link-about"
            onClick={() => handleNavClick('about')}
            className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors relative py-1 ${
              currentPage === 'about'
                ? 'text-[#241D2B] font-semibold'
                : 'text-[#241D2B]/70 hover:text-[#241D2B]'
            }`}
          >
            About
            {currentPage === 'about' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B86F5A]" />
            )}
          </button>
        </nav>

        {/* Right: Actions (Search, Saved Reading List, Mobile Toggle) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Trigger */}
          <button
            id="nav-search-btn"
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#DDD1BE] bg-[#FAF6EE]/90 hover:border-[#B86F5A] text-[#241D2B] transition-all text-xs font-mono group"
            title="Search articles (/)"
            aria-label="Search articles"
          >
            <Search className="w-3.5 h-3.5 text-[#788276] group-hover:text-[#B86F5A] transition-colors" />
            <span className="hidden lg:inline text-[#241D2B]/80">Search</span>
            <kbd className="hidden lg:inline-block px-1 text-[10px] bg-[#EAE1D1] text-[#788276] rounded border border-[#DDD1BE]">
              /
            </kbd>
          </button>

          {/* Bookmarks Counter */}
          <button
            id="nav-bookmarks-btn"
            onClick={onOpenBookmarks}
            className="relative p-2 border border-[#DDD1BE] bg-[#FAF6EE]/90 hover:border-[#B86F5A] text-[#241D2B] transition-colors rounded-sm"
            title="Reading list"
            aria-label="Open reading list"
          >
            <Bookmark className="w-4 h-4 text-[#241D2B]" />
            {bookmarkedArticles.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#B86F5A] text-[#FAF6EE] text-[10px] font-mono flex items-center justify-center rounded-full font-bold">
                {bookmarkedArticles.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="nav-mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 border border-[#DDD1BE] bg-[#FAF6EE] text-[#241D2B] rounded-sm focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F2EBDD] border-b border-[#DDD1BE] px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4 font-display">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-lg font-medium tracking-tight py-2 border-b border-[#DDD1BE]/50 ${
                currentPage === 'home' ? 'text-[#B86F5A] font-semibold' : 'text-[#241D2B]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('explore')}
              className={`text-left text-lg font-medium tracking-tight py-2 border-b border-[#DDD1BE]/50 ${
                currentPage === 'explore' ? 'text-[#B86F5A] font-semibold' : 'text-[#241D2B]'
              }`}
            >
              Explore
            </button>
            <button
              onClick={() => handleNavClick('categories')}
              className={`text-left text-lg font-medium tracking-tight py-2 border-b border-[#DDD1BE]/50 ${
                currentPage === 'categories' ? 'text-[#B86F5A] font-semibold' : 'text-[#241D2B]'
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left text-lg font-medium tracking-tight py-2 border-b border-[#DDD1BE]/50 ${
                currentPage === 'about' ? 'text-[#B86F5A] font-semibold' : 'text-[#241D2B]'
              }`}
            >
              About OFFSET
            </button>
            <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#788276]">
              <span>VOL 03 — 2026</span>
              <span className="flex items-center gap-1 text-[#B86F5A]">
                Digital Design Journal <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
