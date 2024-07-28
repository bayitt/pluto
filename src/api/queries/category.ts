import { gql } from "@apollo/client";
import { CORE_CATEGORY_FIELDS } from "../../models";

export const GET_CATEGORIES = gql`
  ${CORE_CATEGORY_FIELDS}
  query GqlGetCategories {
    getCategories {
      ...CoreCategoryFields
    }
  }
`;
