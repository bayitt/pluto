import {
  TAppReducerAction,
  TArticlePagePayload,
  TCategoryPagePayload,
} from ".";
import { TAppState } from "../..";

export const hydrateState = (
  state: TAppState,
  payload: TAppReducerAction["payload"]
): TAppState => {
  if ((payload as TCategoryPagePayload)?.categories)
    return { ...state, ...payload };

  return { ...state, articles: [(payload as TArticlePagePayload).article] };
};
