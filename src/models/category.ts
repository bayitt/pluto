import { gql } from "@apollo/client";

export type TCategory = {
  uuid: string;
  name: string;
  slug: string;
  description: string;
  color: string;
};

export const CORE_CATEGORY_FIELDS = gql`
  fragment CoreCategoryFields on Category {
    uuid
    name
    slug
    description
    color
  }
`;
