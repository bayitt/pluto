import { Dispatch } from "react";
import { TAppAction, TCategory } from "../..";
import { capitalize } from "../../../utilities";
import { gqlGetCategories } from "./gql";

export const getCategories = async (dispatch?: Dispatch<TAppAction>) => {
  try {
    const { data, errors } = await gqlGetCategories();

    let categories: TCategory[] = !data || errors ? [] : data?.getCategories;
    const colors = ["#E0E1DD", "#E0D2C3", "#F1DABF", "#C0D6DF"];
    categories = categories.map((category, index) => ({
      ...category,
      name: capitalize(category.name),
      color: colors[index],
      slug: "/category" + category.slug,
    }));

    dispatch?.({
      type: "GET_CATEGORIES",
      payload: [
        {
          uuid: "",
          name: "All Articles",
          slug: "/",
          description:
            "Documenting everything I am learning and building. One article at a time.",
        },
        ...categories,
      ],
    });

    return categories;
  } catch (error) {
    console.log(error);
    dispatch?.({ type: "GET_CATEGORIES", payload: [] });
  }
};
