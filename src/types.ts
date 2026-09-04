export type CategoryType = 
  | 'UI/UX'
  | 'Web Design'
  | 'Branding'
  | 'Typography'
  | 'Graphic Design'
  | 'AI + Design'
  | 'Visual Culture';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface ArticleSection {
  id: string;
  heading?: string;
  body: string[];
  pullQuote?: string;
  pullQuoteAuthor?: string;
  image?: {
    url: string;
    caption: string;
    aspect?: 'wide' | 'tall' | 'square';
  };
  highlightBox?: {
    title: string;
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  author: Author;
  date: string;
  readTime: string;
  coverImage: string;
  coverCaption: string;
  excerpt: string;
  featured?: boolean;
  editorsPick?: boolean;
  trendingRank?: number;
  tags: string[];
  sections: ArticleSection[];
}

export interface CategoryInfo {
  name: CategoryType;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export type PageView = 'home' | 'explore' | 'article' | 'categories' | 'about';
