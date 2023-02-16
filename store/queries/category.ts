import { gql } from "@apollo/client";
import { CORE_CATEGORY_FIELDS } from "..";

export const GET_CATEGORIES = gql`
  ${CORE_CATEGORY_FIELDS}
  query GqlGetCategories {
    getCategories {
      ...CoreCategoryFields
    }
  }
`;
