import { gql } from "@apollo/client";

export type TCategory = {
  name: string;
  slug: string;
  description: string;
};

export const CORE_CATEGORY_FIELDS = gql`
  fragment CoreCategoryFields on Category {
    name
    slug
    description
  }
`;
