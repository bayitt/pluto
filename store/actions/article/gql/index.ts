import {
  GET_ARTICLE,
  GET_ARTICLES,
  GET_ARTICLES_BY_CATEGORY_SLUG,
} from "../../..";
import { createClient } from "../../../../utilities";

export const gqlGetArticle = (variables: { slug: string }) =>
  createClient().query({ query: GET_ARTICLE, variables });

export const gqlGetArticles = (variables: { page: number; count: number }) =>
  createClient().query({ query: GET_ARTICLES, variables });

export const gqlGetCategoryArticles = (variables: {
  category_slug: string;
  page: number;
  count: number;
}) => createClient().query({ query: GET_ARTICLES_BY_CATEGORY_SLUG, variables });
