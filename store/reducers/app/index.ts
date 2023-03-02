import { HYDRATE } from "next-redux-wrapper";
import { TAppState } from "../..";
import { hydrateState } from "./helpers";

export * from "./types";

import { TAppReducerAction } from "./types";

export const appReducer = (
  state: TAppState,
  action: TAppReducerAction
): TAppState => {
  switch (action.type) {
    case HYDRATE:
      return hydrateState(state, action.payload);
    case "SET_LOADING":
      return { ...state, loading: action.payload as boolean };
    default:
      return state;
  }
};
