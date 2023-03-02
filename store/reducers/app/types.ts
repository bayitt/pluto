import { TArticle, TCategory } from "../..";

export type TAppReducerAction = {
  type: "__NEXT_REDUX_WRAPPER_HYDRATE__" | "SET_LOADING";
  payload?: TCategoryPagePayload | TArticlePagePayload | boolean;
};

export type TCategoryPagePayload = {
  categories: TCategory[];
  articles: TArticle[];
};

export type TArticlePagePayload = {
  article: TArticle;
};
