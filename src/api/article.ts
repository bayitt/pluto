import { TArticle } from "../models";
import { getClient } from "./client";
import { GET_ARTICLES, GET_ARTICLES_BY_CATEGORY_SLUG } from "./queries";

export const getArticles = async (variables: {
  page: number;
  count: number;
}): Promise<{ articles: TArticle[] }> => {
  const { data, errors } = await getClient().query({
    query: GET_ARTICLES,
    variables,
  });

  if (!data?.getArticles || errors) return { articles: [] };

  return data?.getArticles;
};

export const getCategoryArticles = async (variables: {
  category_slug: string;
  page: number;
  count: number;
}) => {
  variables.category_slug = variables.category_slug.startsWith("/")
    ? variables.category_slug
    : "/" + variables.category_slug;
  const { data, errors } = await getClient().query({
    query: GET_ARTICLES_BY_CATEGORY_SLUG,
    variables,
  });

  if (!data?.getArticlesByCategorySlug || errors) return { articles: [] };

  return data?.getArticlesByCategorySlug;
};
