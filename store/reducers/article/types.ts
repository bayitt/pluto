import { TArticle } from "../..";

export type TArticleAction = {
  type: "GET_ARTICLE" | "GET_ARTICLES";
  payload: TArticle | TArticle[];
};
