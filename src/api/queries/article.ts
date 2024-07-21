import { gql } from "@apollo/client";
import { CORE_ARTICLE_FIELDS } from "../../models";

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
