import { Dispatch } from "react";
import { TAppAction } from "../..";
import { gqlGetArticle, gqlGetArticles, gqlGetCategoryArticles } from "./gql";

export const getArticle = async (
  dispatch: Dispatch<TAppAction>,
  variables: { slug: string }
) => {
  try {
    const { data, errors } = await gqlGetArticle({
      slug: variables.slug.startsWith("/") ? variables.slug : variables.slug,
    });
    const articles =
      !data || errors
        ? []
        : [
            {
              ...data?.getArticle,
            },
          ];

    dispatch({ type: "GET_ARTICLES", payload: articles });
  } catch (error) {
    dispatch({ type: "GET_ARTICLES", payload: [] });
  }
};

export const getArticles = async (
  dispatch: Dispatch<TAppAction>,
  variables: { page: number; count: number }
) => {
  dispatch({ type: "SET_LOADING", payload: true });
  try {
    const { data, errors } = await gqlGetArticles({ ...variables });

    const articles = !data || errors ? [] : data?.getArticles?.articles;
    const pagination = data?.getArticles?.pagination ?? {
      currentPage: 1,
      lastPage: 1,
    };

    dispatch({ type: "SET_PAGINATION", payload: pagination });
    dispatch({ type: "GET_ARTICLES", payload: articles });
  } catch (error) {
    dispatch({ type: "GET_ARTICLES", payload: [] });
  }
  dispatch({ type: "SET_LOADING", payload: false });
};

export const getCategoryArticles = async (
  dispatch: Dispatch<TAppAction>,
  variables: { category_slug: string; page: number; count: number }
) => {
  dispatch({ type: "SET_LOADING", payload: true });

  try {
    const { data, errors } = await gqlGetCategoryArticles({
      ...variables,
      category_slug: variables.category_slug.startsWith("/")
        ? variables.category_slug
        : "/" + variables.category_slug,
    });

    const articles =
      !data || errors ? [] : data?.getArticlesByCategorySlug?.articles;
    const pagination = data?.getArticlesByCategorySlug?.pagination ?? {
      currentPage: 1,
      lastPage: 1,
    };

    dispatch({ type: "SET_PAGINATION", payload: pagination });
    dispatch({ type: "GET_ARTICLES", payload: articles });
  } catch (error) {
    dispatch({ type: "GET_ARTICLES", payload: [] });
  }

  dispatch({ type: "SET_LOADING", payload: false });
};
