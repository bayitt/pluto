import { gql } from "@apollo/client";
import {
  CORE_ARTICLE_FIELDS,
  EXTENDED_ARTICLE_FIELDS,
  SITEMAP_ARTICLE_FIELDS,
} from "../../models";

export const GET_ARTICLE = gql`
  ${CORE_ARTICLE_FIELDS}
  ${EXTENDED_ARTICLE_FIELDS}
  query GqlGetArticle($slug: String!) {
    getArticle(input: { slug: $slug }) {
      ...CoreArticleFields
      ...ExtendedArticleFields
    }
  }
`;

export const GET_ARTICLES = gql`
  ${CORE_ARTICLE_FIELDS}
  query GqlGetArticles($page: Int, $count: Int) {
    getArticles(input: { page: $page, count: $count }) {
      articles {
        ...CoreArticleFields
      }
      pagination {
        currentPage
        lastPage
      }
    }
  }
`;

export const GET_ARTICLES_BY_CATEGORY_SLUG = gql`
  ${CORE_ARTICLE_FIELDS}
  query GqlGetArticlesByCategorySlug(
    $category_slug: String!
    $page: Int
    $count: Int
  ) {
    getArticlesByCategorySlug(
      input: { category_slug: $category_slug, page: $page, count: $count }
    ) {
      articles {
        ...CoreArticleFields
      }
      pagination {
        currentPage
        lastPage
      }
    }
  }
`;

export const GET_SITEMAP_ARTICLES = gql`
  ${SITEMAP_ARTICLE_FIELDS}
  query GqlGetArticles {
    getArticles(input: { page: 1, count: 25 }) {
      articles {
        ...SitemapArticleFields
      }
    }
  }
`;
