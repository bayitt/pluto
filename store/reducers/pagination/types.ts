import { TPagination } from "../..";

export type TPaginationAction = {
  type: "SET_PAGINATION";
  payload: TPagination;
};
