import { gql } from "@apollo/client";
import { CORE_ARTICLE_FIELDS } from "..";

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