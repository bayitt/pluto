import { Dispatch } from "react";
import { TAppAction, TCategory } from "../..";
import { gqlGetCategories } from "./gql";

export const getCategories = async (dispatch: Dispatch<TAppAction>) => {
  try {
    const { data, errors } = await gqlGetCategories();

    let categories: TCategory[] = !data || errors ? [] : data?.getCategories;
    const colors = ["#E0E1DD", "#E0D2C3", "#F1DABF", "#C0D6DF"];
    categories = categories.map((category, index) => ({
      ...category,
      color: colors[index],
      slug: "/category" + category.slug,
    }));

    dispatch({
      type: "GET_CATEGORIES",
      payload: [
        {
          uuid: "",
          name: "All Articles",
          slug: "/",
          description: "Quae plerumque",
        },
        ...categories,
      ],
    });
  } catch (error) {
    dispatch({ type: "GET_CATEGORIES", payload: [] });
  }
};
