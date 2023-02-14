import { TAppState } from "../..";
import { hydrateState } from "./helpers";

export * from "./types";

import { TAppReducerAction } from "./types";

export const appReducer = (state: TAppState, action: TAppReducerAction) => {
  switch (action.type) {
    case "HYDRATE":
      return hydrateState(state, action.payload);
    default:
      return state;
  }
};
