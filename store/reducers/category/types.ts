import { TCategory } from "../..";

export type TCategoryAction = {
  type: "GET_CATEGORIES";
  payload: TCategory[];
};
