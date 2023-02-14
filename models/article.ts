import { TCategory, TTag } from ".";

export type TArticle = {
  title: string;
  slug: string;
  featured_image: string;
  created_at: string;
  category: TCategory;
  tags: TTag[];
  content?: string;
  updated_at?: string;
};
