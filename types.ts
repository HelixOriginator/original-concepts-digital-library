
export enum Category {
  GOVERNANCE = 'Governance & Policy',
  TECHNOLOGY = 'Technology & Innovation',
  PHILOSOPHY = 'Philosophy & Ethics',
  SPIRITUALITY = 'Spirituality & Consciousness',
  HISTORY = 'History & Culture',
  SCIENCE = 'Science & Nature',
  ARTS = 'Arts & Literature',
  BUSINESS = 'Business & Economics',
  EDUCATION = 'Education & Learning'
}

export interface Author {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML or Markdown string
  category: Category;
  tags: string[];
  authorId: string;
  publishDate: string;
  readTimeMinutes: number;
  imageUrl: string;
  views: number;
  featured?: boolean;
  citation?: string;
}

export interface Comment {
  id: string;
  user: string;
  text: string;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}