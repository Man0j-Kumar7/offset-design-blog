import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Article } from '../types';

interface TrendingListProps {
  articles: Article[];
  onReadArticle: (articleId: string) => void;
}

export const TrendingList: React.FC<TrendingListProps> = ({
  articles,
  onReadArticle,
}) => {
  // Ordered trending items as specifically listed in the prompt
  const trendingItems = [
    {
      num: '01',
      title: 'The Future of Interface Design',
      category: 'UI/UX',
      readTime: '6 min read',
      articleId: 'the-new-language-of-digital-interfaces',
    },
    {
      num: '02',
      title: 'Why Designers Are Returning to Grids',
      category: 'Web Design',
      readTime: '5 min read',
      articleId: 'the-return-of-editorial-layouts-on-the-web',
    },
    {
      num: '03',
      title: 'AI and the New Creative Workflow',
      category: 'AI + Design',
      readTime: '7 min read',
      articleId: 'can-ai-actually-understand-good-design',
    },
    {
      num: '04',
      title: 'Designing Digital Spaces With Emotion',
      category: 'UI/UX',
      readTime: '6 min read',
      articleId: 'designing-digital-spaces-with-emotion',
    },
    {
      num: '05',
      title: 'What Makes a Brand Feel Premium?',
      category: 'Branding',
      readTime: '7 min read',
      articleId: 'what-makes-a-brand-feel-premium',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F2EBDD] text-[#241D2B] border-b border-[#DDD1BE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#241D2B] pb-4 mb-8 sm:mb-12 gap-3">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-[#B86F5A]" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-[-0.02em] text-[#241D2B]">
              TRENDING STORIES
            </h2>
          </div>
          <span className="text-xs font-mono text-[#788276] uppercase tracking-wider">
            MOST READ IN DESIGN THIS WEEK
          </span>
        </div>

        {/* Clean Numbered Editorial List */}
        <div className="divide-y divide-[#DDD1BE]">
          {trendingItems.map((item) => (
            <div
              key={item.num}
              onClick={() => onReadArticle(item.articleId)}
              className="group py-5 sm:py-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:pl-2"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-display font-bold text-xl sm:text-2xl text-[#B86F5A] w-8">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-[#241D2B] group-hover:text-[#B86F5A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#788276] mt-1 sm:hidden">
                    <span className="uppercase">{item.category}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 self-end sm:self-auto">
                <div className="hidden sm:flex flex-col text-right font-mono text-xs">
                  <span className="text-[#241D2B] uppercase font-semibold">
                    {item.category}
                  </span>
                  <span className="text-[#788276]">{item.readTime}</span>
                </div>
                <div className="w-8 h-8 border border-[#DDD1BE] flex items-center justify-center text-[#241D2B] group-hover:border-[#B86F5A] group-hover:bg-[#B86F5A] group-hover:text-[#FAF6EE] transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
