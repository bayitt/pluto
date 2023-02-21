import { Dispatch } from "react";
import { TAppAction } from "../..";
import { gqlGetArticles, gqlGetCategoryArticles } from "./gql";

export const getArticles = async (
  dispatch: Dispatch<TAppAction>,
  variables: { page: number; count: number }
) => {
  try {
    const { data, errors } = await gqlGetArticles({ ...variables });

    const articles = !data || errors ? [] : data?.getArticles?.articles;

    dispatch({ type: "GET_ARTICLES", payload: articles });
  } catch (error) {
    dispatch({ type: "GET_ARTICLES", payload: [] });
  }
};

export const getCategoryArticles = async (
  dispatch: Dispatch<TAppAction>,
  variables: { category_slug: string; page: number; count: number }
) => {
  try {
    const { data, errors } = await gqlGetCategoryArticles({
      ...variables,
      category_slug: variables.category_slug.startsWith("/")
        ? variables.category_slug
        : "/" + variables.category_slug,
    });

    const articles =
      !data || errors ? [] : data?.getArticlesByCategorySlug?.articles;

    dispatch({ type: "GET_ARTICLES", payload: articles });
  } catch (error) {
    dispatch({ type: "GET_ARTICLES", payload: [] });
  }
};
