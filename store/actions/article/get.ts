import { Dispatch } from "react";
import { TAppAction } from "../..";
import { gqlGetArticles } from "./gql";

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
