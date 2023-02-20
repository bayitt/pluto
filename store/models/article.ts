import { TCategory, CORE_CATEGORY_FIELDS } from "./category";
import { TTag, CORE_TAG_FIELDS } from "./tag";
import { gql } from "@apollo/client";

export type TArticle = {
  title: string;
  slug: string;
  featured_image: string;
  created_at: string;
  category: TCategory;
  tags: TTag[];
  excerpt?: string;
  content?: string;
  updated_at?: string;
};

export const CORE_ARTICLE_FIELDS = gql`
  ${CORE_TAG_FIELDS}
  fragment CoreArticleFields on Article {
    title
    slug
    featured_image
    created_at
    excerpt
    category {
      uuid
    }
    tags {
      ...CoreTagFields
    }
  }
`;

export const EXTENDED_ARTICLE_FIELDS = gql`
  ${CORE_CATEGORY_FIELDS}
  fragment ExtendedArticleFields on Article {
    content
  }
`;
