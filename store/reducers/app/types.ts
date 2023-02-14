import { TArticle, TCategory } from "../..";

export type TAppReducerAction = {
  type: "HYDRATE";
  payload: TCategoryPagePayload | TArticlePagePayload;
};

export type TCategoryPagePayload = {
  categories: TCategory[];
  articles: TArticle[];
};

export type TArticlePagePayload = {
  article: TArticle;
};
