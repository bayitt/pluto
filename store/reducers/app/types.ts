import { TArticle, TCategory } from "../..";

export type TAppReducerAction = {
  type: "__NEXT_REDUX_WRAPPER_HYDRATE__";
  payload?: TCategoryPagePayload | TArticlePagePayload;
};

export type TCategoryPagePayload = {
  categories: TCategory[];
  articles: TArticle[];
};

export type TArticlePagePayload = {
  article: TArticle;
};
