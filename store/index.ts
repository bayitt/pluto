export * from "./actions";
export * from "./models";
export * from "./queries";

import { legacy_createStore as createStore, Store } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import { TCategory, TArticle } from ".";
import { combineReducers } from "../utilities";
import {
  appReducer,
  TAppReducerAction,
  articleReducer,
  TArticleAction,
  categoryReducer,
  TCategoryAction,
  paginationReducer,
  TPaginationAction,
} from "./reducers";

export type TPagination = {
  currentPage: number;
  lastPage: number;
};

export type TAppState = {
  loading?: boolean;
  categories?: TCategory[];
  articles?: TArticle[];
  pagination?: TPagination;
};

export type TAppAction =
  | TAppReducerAction
  | TArticleAction
  | TCategoryAction
  | TPaginationAction;

const stateReducer = combineReducers({
  appReducer,
  articleReducer,
  categoryReducer,
  paginationReducer,
});

const makeStore = (context: Context) => createStore(stateReducer, {});

export const wrapper = createWrapper<Store<TAppState>>(makeStore, {
  debug: true,
});
