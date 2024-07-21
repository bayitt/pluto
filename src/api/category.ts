import { TCategory } from "../models";
import { getClient } from "./client";
import { GET_CATEGORIES } from "./queries";

const capitalize = (param: string) => {
  const paramSplits = param
    .split(" ")
    .map(
      (paramSlice) =>
        paramSlice.charAt(0).toUpperCase() + paramSlice.slice(1).toLowerCase()
    );
  return paramSplits.join(" ");
};

export const getCategories = async (): Promise<
  (TCategory & { is_active: boolean })[]
> => {
  const { data, errors } = await getClient().query({ query: GET_CATEGORIES });

  if (!data?.getCategories || errors) return [];

  let categories = data.getCategories;
  const colors = ["#E0E1DD", "#E0D2C3", "#F1DABF", "#C0D6DF"];
  categories = categories.map((category, index) => ({
    ...category,
    name: capitalize(category.name),
    color: colors[index],
    slug: "/category" + category.slug,
  }));

  categories.unshift({ name: "All Articles", slug: "/", uuid: "" });

  return categories;
};
