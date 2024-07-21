import { TArticle } from "../models";
import { getClient } from "./client";
import { GET_ARTICLES } from "./queries";

export const getArticles = async (variables: {
  page: number;
  count: number;
}): Promise<TArticle[]> => {
  const { data, errors } = await getClient().query({
    query: GET_ARTICLES,
    variables,
  });

  if (!data?.getArticles || errors) return [];

  return data?.getArticles;
};
