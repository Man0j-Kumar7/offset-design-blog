/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageView, Article } from './types';
import { ARTICLES } from './data/articles';

// Components
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedStory } from './components/FeaturedStory';
import { LatestStories } from './components/LatestStories';
import { CategorySection } from './components/CategorySection';
import { EditorsPick } from './components/EditorsPick';
import { CreatorSpotlight } from './components/CreatorSpotlight';
import { TrendingList } from './components/TrendingList';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

// Full Page Views
import { ArticleDetail } from './components/ArticleDetail';
import { ExplorePage } from './components/ExplorePage';
import { CategoriesPage } from './components/CategoriesPage';
import { AboutPage } from './components/AboutPage';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [activeArticleId, setActiveArticleId] = useState<string>(
    'designing-interfaces-that-feel-human'
  );
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);

  // Bookmarking state persisted in localStorage
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem('offset_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Custom subtle cursor coordinates (desktop only)
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isCursorHovering, setIsCursorHovering] = useState(false);
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('offset_bookmarks', JSON.stringify(bookmarkedArticles));
    } catch {
      // ignore
    }
  }, [bookmarkedArticles]);

  // Desktop subtle cursor tracker
  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    setShowCustomCursor(true);

    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsCursorHovering(true);
      } else {
        setIsCursorHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Global keyboard shortcut: `/` to search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        !isSearchOpen &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Navigation handlers
  const handleNavigate = (page: PageView, articleId?: string, category?: string) => {
    if (articleId) {
      setActiveArticleId(articleId);
    }
    if (category) {
      setCategoryFilter(category);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadArticle = (articleId: string) => {
    setActiveArticleId(articleId);
    setCurrentPage('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: string) => {
    setCategoryFilter(category);
    setCurrentPage('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (article: Article) => {
    setBookmarkedArticles((prev) => {
      const exists = prev.some((a) => a.id === article.id);
      if (exists) {
        return prev.filter((a) => a.id !== article.id);
      } else {
        return [...prev, article];
      }
    });
  };

  const handleRemoveBookmark = (articleId: string) => {
    setBookmarkedArticles((prev) => prev.filter((a) => a.id !== articleId));
  };

  // Specific article datasets
  const featuredArticle =
    ARTICLES.find((a) => a.id === 'designing-interfaces-that-feel-human') || ARTICLES[0];
  const editorsPickArticle =
    ARTICLES.find((a) => a.id === 'the-internet-is-becoming-more-visual') || ARTICLES[7];

  // Latest articles (excluding featured and editor's pick for diversity)
  const latestArticles = [
    ARTICLES.find((a) => a.id === 'why-minimalism-still-wins-in-digital-design')!,
    ARTICLES.find((a) => a.id === 'the-new-language-of-digital-interfaces')!,
    ARTICLES.find((a) => a.id === 'typography-is-more-than-choosing-a-font')!,
    ARTICLES.find((a) => a.id === 'designing-for-attention-not-distraction')!,
    ARTICLES.find((a) => a.id === 'can-ai-actually-understand-good-design')!,
    ARTICLES.find((a) => a.id === 'the-return-of-editorial-layouts-on-the-web')!,
  ].filter(Boolean);

  const currentActiveArticle =
    ARTICLES.find((a) => a.id === activeArticleId) || featuredArticle;

  const relatedArticles = ARTICLES.filter(
    (a) => a.id !== currentActiveArticle.id && a.category === currentActiveArticle.category
  ).concat(ARTICLES.filter((a) => a.id !== currentActiveArticle.id));

  const isCurrentBookmarked = bookmarkedArticles.some(
    (a) => a.id === currentActiveArticle.id
  );

  return (
    <div className="min-h-screen bg-[#F2EBDD] text-[#241D2B] flex flex-col selection:bg-[#B86F5A] selection:text-[#FAF6EE] relative font-body">
      {/* Optional subtle desktop cursor follower */}
      {showCustomCursor && (
        <div
          className={`fixed pointer-events-none z-50 transition-transform duration-100 ease-out hidden md:block ${
            isCursorHovering ? 'scale-150' : 'scale-100'
          }`}
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className={`w-4 h-4 rounded-full border border-[#241D2B]/40 transition-all duration-200 ${
              isCursorHovering
                ? 'border-[#B86F5A] bg-[#B86F5A]/20 scale-125'
                : 'bg-transparent'
            }`}
          />
        </div>
      )}

      {/* Sticky Refined Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        bookmarkedArticles={bookmarkedArticles}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* Main Page Routing with Smooth Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* 1. Hero Section */}
              <HeroSection
                onExplore={() => handleNavigate('explore')}
                onReadArticle={handleReadArticle}
                featuredArticle={featuredArticle}
              />

              {/* 2. Featured Story */}
              <FeaturedStory
                article={featuredArticle}
                onReadArticle={handleReadArticle}
              />

              {/* 3. Latest Stories Grid */}
              <LatestStories
                articles={latestArticles}
                onReadArticle={handleReadArticle}
                onSelectCategory={handleSelectCategory}
              />

              {/* 4. Interactive Category Exploration */}
              <CategorySection
                onSelectCategory={handleSelectCategory}
                onViewAllCategories={() => handleNavigate('categories')}
              />

              {/* 5. Editor's Pick Section */}
              <EditorsPick
                article={editorsPickArticle}
                onReadArticle={handleReadArticle}
              />

              {/* 6. Designer / Creator Spotlight */}
              <CreatorSpotlight onReadStory={handleReadArticle} />

              {/* 7. Trending Stories List */}
              <TrendingList
                articles={ARTICLES}
                onReadArticle={handleReadArticle}
              />

              {/* 8. Newsletter Section */}
              <Newsletter />
            </motion.div>
          )}

          {currentPage === 'explore' && (
            <motion.div
              key="explore"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <ExplorePage
                articles={ARTICLES}
                onReadArticle={handleReadArticle}
                initialCategory={categoryFilter}
              />
            </motion.div>
          )}

          {currentPage === 'article' && (
            <motion.div
              key={`article-${currentActiveArticle.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <ArticleDetail
                article={currentActiveArticle}
                relatedArticles={relatedArticles}
                onBack={() => handleNavigate('explore')}
                onReadArticle={handleReadArticle}
                onSelectCategory={handleSelectCategory}
                isBookmarked={isCurrentBookmarked}
                onToggleBookmark={handleToggleBookmark}
              />
            </motion.div>
          )}

          {currentPage === 'categories' && (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <CategoriesPage
                onSelectCategory={handleSelectCategory}
                onReadArticle={handleReadArticle}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <AboutPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={handleReadArticle}
      />

      {/* Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarkedArticles}
        onRemoveBookmark={handleRemoveBookmark}
        onReadArticle={handleReadArticle}
      />

      {/* Premium Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </div>
  );
}
