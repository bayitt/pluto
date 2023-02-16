import { GET_ARTICLES } from "../../..";
import { createClient } from "../../../../utilities";

export const gqlGetArticles = (variables: { page: number; count: number }) =>
  createClient().query({ query: GET_ARTICLES, variables });
