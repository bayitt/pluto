import { TArticle, TPagination } from "../models";
import { getClient } from "./client";
import {
  GET_ARTICLE,
  GET_ARTICLES,
  GET_ARTICLES_BY_CATEGORY_SLUG,
  GET_SITEMAP_ARTICLES,
} from "./queries";

export const getArticle = async (slug: string): Promise<TArticle> => {
  const parsedSlug = slug.startsWith("/") ? slug : "/" + slug;

  try {
    const { data } = await getClient().query({
      query: GET_ARTICLE,
      variables: { slug: parsedSlug },
    });

    return data?.getArticle;
  } catch {
    return null;
  }
};

export const getArticles = async (variables: {
  page: number;
  count: number;
}): Promise<{ articles: TArticle[]; pagination: TPagination }> => {
  const { data, errors } = await getClient().query({
    query: GET_ARTICLES,
    variables,
  });

  if (!data?.getArticles || errors)
    return { articles: [], pagination: { currentPage: 1, lastPage: 1 } };

  return data?.getArticles;
};

export const getCategoryArticles = async (variables: {
  category_slug: string;
  page: number;
  count: number;
}): Promise<{ articles: TArticle[]; pagination: TPagination }> => {
  variables.category_slug = variables.category_slug.startsWith("/")
    ? variables.category_slug
    : "/" + variables.category_slug;

  try {
    const { data, errors } = await getClient().query({
      query: GET_ARTICLES_BY_CATEGORY_SLUG,
      variables,
    });

    if (!data?.getArticlesByCategorySlug || errors)
      return { articles: [], pagination: { currentPage: 1, lastPage: 1 } };

    return data?.getArticlesByCategorySlug;
  } catch {
    return { articles: [], pagination: { currentPage: 1, lastPage: 1 } };
  }
};

export const getSitemapArticles = async (): Promise<
  { slug: string; updated_at: string }[]
> => {
  const { data, errors } = await getClient().query({
    query: GET_SITEMAP_ARTICLES,
  });

  if (!data?.getArticles || errors) return [];

  return data?.getArticles?.articles;
};
