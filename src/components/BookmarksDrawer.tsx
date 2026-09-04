import React from 'react';
import { X, Trash2, ArrowRight, Bookmark, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: Article[];
  onRemoveBookmark: (articleId: string) => void;
  onReadArticle: (articleId: string) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarks,
  onRemoveBookmark,
  onReadArticle,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#241D2B]/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#F2EBDD] h-full shadow-2xl flex flex-col border-l border-[#241D2B] animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#DDD1BE] flex items-center justify-between bg-[#FAF6EE]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#B86F5A]" />
            <h3 className="font-display font-bold text-xl text-[#241D2B]">
              READING LIST
            </h3>
            <span className="text-xs font-mono text-[#788276] px-1.5 py-0.5 border border-[#DDD1BE] ml-1">
              {bookmarks.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 border border-[#DDD1BE] text-[#241D2B] hover:border-[#B86F5A]"
            title="Close drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#DDD1BE]">
          {bookmarks.length === 0 ? (
            <div className="py-20 text-center">
              <BookOpen className="w-10 h-10 text-[#788276] mx-auto mb-3 opacity-60" />
              <p className="font-display font-semibold text-base text-[#241D2B] mb-1">
                Your reading list is empty
              </p>
              <p className="text-xs font-mono text-[#788276] max-w-xs mx-auto">
                Save essays from the article view to read when you have quiet time.
              </p>
            </div>
          ) : (
            bookmarks.map((article) => (
              <div key={article.id} className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-3 group">
                <div 
                  className="cursor-pointer flex-1"
                  onClick={() => {
                    onReadArticle(article.id);
                    onClose();
                  }}
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B86F5A] block mb-1">
                    {article.category} • {article.readTime}
                  </span>
                  <h4 className="font-display font-bold text-base text-[#241D2B] group-hover:text-[#B86F5A] transition-colors leading-snug mb-1">
                    {article.title}
                  </h4>
                  <span className="text-xs font-mono text-[#788276]">
                    By {article.author.name}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onRemoveBookmark(article.id)}
                    className="p-1.5 text-[#788276] hover:text-[#B86F5A] transition-colors"
                    title="Remove from reading list"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      onReadArticle(article.id);
                      onClose();
                    }}
                    className="p-1.5 text-[#241D2B] hover:text-[#B86F5A] transition-colors"
                    title="Read now"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF6EE] border-t border-[#DDD1BE] text-xs font-mono text-[#788276] text-center">
          PERSISTED LOCALLY ACROSS SESSIONS
        </div>
      </div>
    </div>
  );
};
