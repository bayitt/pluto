import { TArticleAction } from ".";
import { TAppState, TArticle } from "../..";

export const getArticle = (
  state: TAppState,
  payload: TArticleAction["payload"]
): TAppState => {
  return {
    ...state,
    articles: [payload as TArticle],
  };
};

export const getArticles = (
  state: TAppState,
  payload: TArticleAction["payload"]
): TAppState => {
  return {
    ...state,
    articles:
      state?.pagination?.currentPage === 1
        ? (payload as TArticle[])
        : [...(state?.articles ?? []), ...(payload as TArticle[])],
  };
};
