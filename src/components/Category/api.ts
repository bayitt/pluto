"use server";

import { getArticles, getCategoryArticles } from "../../api";

export const fetchMoreArticles = async (variables: {
  page: number;
  slug?: string;
}) => {
  const { page, slug } = variables;
  const response = slug
    ? await getCategoryArticles({ category_slug: slug, page, count: 10 })
    : await getArticles({ page, count: 10 });

  if (response.pagination.currentPage > 1) return response;
  return null;
};
