import { gql } from "@apollo/client";

export const SUBSCRIBE = gql`
  mutation GqlSubscribe($email: String!) {
    subscribe(email: $email) {
      uuid
    }
  }
`;
