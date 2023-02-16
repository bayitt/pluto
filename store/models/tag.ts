import { gql } from "@apollo/client";

export type TTag = {
  name: string;
};

export const CORE_TAG_FIELDS = gql`
  fragment CoreTagFields on Tag {
    name
  }
`;
