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
  (TCategory & { is_active?: boolean })[]
> => {
  const { data, errors } = await getClient().query({ query: GET_CATEGORIES });

  if (!data?.getCategories || errors) return [];

  const categories = JSON.parse(
    JSON.stringify(
      data.getCategories.map(({ name, ...rest }) => ({
        ...rest,
        name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
      }))
    )
  );

  categories.unshift({ name: "All Articles", slug: "/", uuid: "", color: "" });

  return categories;
};
