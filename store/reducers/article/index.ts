import { TAppState } from "../..";
import { TArticleAction } from "./types";
import { getArticle, getArticles } from "./helpers";

export * from "./types";

export const articleReducer = (state: TAppState, action: TArticleAction) => {
  switch (action.type) {
    case "GET_ARTICLE":
      return getArticle(state, action.payload);
    case "GET_ARTICLES":
      return getArticles(state, action.payload);
  }
};
