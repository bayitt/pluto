export * from "./models";

import { TCategory, TArticle } from ".";
import { TAppReducerAction } from "./reducers";

export type TAppState = {
  categories?: TCategory[];
  articles?: TArticle[];
};

export type TAppAction = TAppReducerAction;
