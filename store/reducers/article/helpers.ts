import { TArticleAction } from ".";
import { TAppState, TArticle } from "../..";

export const getArticle = (
  state: TAppState,
  payload: TArticleAction["payload"]
): TAppState => {
    return {
        ...state,
        articles: [payload as TArticle]
    }
};

export const getArticles = (
  state: TAppState,
  payload: TArticleAction["payload"]
): TAppState => {
    return {
        ...state, 
        articles: payload as TArticle[]
    }
};
