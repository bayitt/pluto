import { Dispatch } from "react";
import { TAppAction } from "../..";
import { gqlGetCategories } from "./gql";

export const getCategories = async (dispatch: Dispatch<TAppAction>) => {
  try {
    const { data, errors } = await gqlGetCategories();

    const categories = !data || errors ? [] : data?.getCategories;

    dispatch({
      type: "GET_CATEGORIES",
      payload: [
        { name: "All Articles", slug: "/", description: "SSKSKSKS" },
        ...categories,
      ],
    });
  } catch (error) {
    dispatch({ type: "GET_CATEGORIES", payload: [] });
  }
};
