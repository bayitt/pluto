import { TCategory } from "../models";
import { capitalize } from "../utilities";
import { getClient } from "./client";
import { GET_CATEGORIES } from "./queries";

export const getCategories = async (): Promise<
  (TCategory & { is_active?: boolean })[]
> => {
  const { data, errors } = await getClient().query({
    query: GET_CATEGORIES,
    context: { fetchOptions: { cache: "force-cache" } },
  });

  if (!data?.getCategories || errors) return [];

  const categories = JSON.parse(
    JSON.stringify(
      data.getCategories.map(({ name, slug, ...rest }) => ({
        ...rest,
        name: capitalize(name),
        slug: `/category${slug}`,
      }))
    )
  );

  categories.unshift({ name: "All Articles", slug: "/", uuid: "", color: "" });

  return categories;
};
