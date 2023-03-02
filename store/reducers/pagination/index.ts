import { TAppState } from "../..";
import { TPaginationAction } from "./types";

export * from "./types";

export const paginationReducer = (
  state: TAppState,
  action: TPaginationAction
): TAppState => {
  switch (action.type) {
    case "SET_PAGINATION":
      return {
        ...state,
        pagination: action.payload,
      };
    default:
      return state;
  }
};
