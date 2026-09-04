import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenSearch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSearch }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241D2B] text-[#F2EBDD] pt-20 pb-12 border-t border-[#42364E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Split: Massive Brand Wordmark & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-[#42364E] items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-6xl sm:text-8xl md:text-9xl tracking-[-0.05em] text-[#FAF6EE] mb-6 leading-none select-none">
              OFFSET
            </h2>
            <p className="text-lg sm:text-xl text-[#B8AA98] font-body font-light max-w-lg leading-relaxed">
              A design publication exploring how ideas become visual experiences.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8 pt-4">
            {/* Navigation Column */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#788276] block mb-4">
                NAVIGATION
              </span>
              <ul className="flex flex-col gap-3 text-sm font-mono text-[#DDD1BE]">
                <li>
                  <button
                    onClick={() => {
                      onNavigate('explore');
                      scrollToTop();
                    }}
                    className="hover:text-[#B86F5A] transition-colors"
                  >
                    Explore
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('categories');
                      scrollToTop();
                    }}
                    className="hover:text-[#B86F5A] transition-colors"
                  >
                    Categories
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('about');
                      scrollToTop();
                    }}
                    className="hover:text-[#B86F5A] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenSearch}
                    className="hover:text-[#B86F5A] transition-colors"
                  >
                    Search
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Column with exact requested links */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#788276] block mb-4">
                CHANNELS
              </span>
              <ul className="flex flex-col gap-3 text-sm font-mono text-[#DDD1BE]">
                <li>
                  <a
                    href="https://www.instagram.com/six.tothe.seven/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B86F5A] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#788276] group-hover:text-[#B86F5A]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/manoj-kumar-p-0584a3387/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B86F5A] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#788276] group-hover:text-[#B86F5A]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/manojkumarp17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B86F5A] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Behance</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#788276] group-hover:text-[#B86F5A]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#788276]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 OFFSET. All rights reserved.</span>
            <span className="text-[#42364E] hidden sm:inline">•</span>
            <span className="hidden sm:inline">INDEPENDENT EDITORIAL MAGAZINE</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#B8AA98]">TYPOGRAPHY: SPACE GROTESK & INTER</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#FAF6EE] hover:text-[#B86F5A] transition-colors border-b border-[#42364E] pb-0.5"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
