import { TAppState } from "../..";
import { TCategoryAction } from ".";
import { getCategories } from "./helpers";

export * from "./types";

export const categoryReducer = (state: TAppState, action: TCategoryAction) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return getCategories(state, action.payload);
    default:
      return state;
  }
};
