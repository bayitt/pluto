import { Dispatch } from "react";
import { TAppAction } from "../..";
import { gqlSubscribe } from "./gql";

export const subscribe = async (
  dispatch: Dispatch<TAppAction>,
  variables: { email: string },
  onSubscribe?: () => void
) => {
  dispatch({ type: "SET_LOADING", payload: true });
  try {
    const { data } = await gqlSubscribe({ ...variables });

    data && onSubscribe?.();
  } catch (error) {}

  dispatch({ type: "SET_LOADING", payload: false });
};
