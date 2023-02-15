export * from "./models";

import { legacy_createStore as createStore, Store } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import { TCategory, TArticle } from ".";
import { combineReducers } from "../utilities";
import { appReducer, TAppReducerAction } from "./reducers";

export type TAppState = {
  categories?: TCategory[];
  articles?: TArticle[];
};

export type TAppAction = TAppReducerAction;

const stateReducer = combineReducers({ appReducer });

const makeStore = (context: Context) => createStore(stateReducer, {});

export const wrapper = createWrapper<Store<TAppState>>(makeStore, {
  debug: true,
});
