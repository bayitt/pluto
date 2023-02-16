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
} from "./reducers";

export type TAppState = {
  categories?: TCategory[];
  articles?: TArticle[];
};

export type TAppAction = TAppReducerAction | TArticleAction | TCategoryAction;

const stateReducer = combineReducers({
  appReducer,
  articleReducer,
  categoryReducer,
});

const makeStore = (context: Context) => createStore(stateReducer, {});

export const wrapper = createWrapper<Store<TAppState>>(makeStore, {
  debug: true,
});
