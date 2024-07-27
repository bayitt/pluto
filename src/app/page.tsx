import { Nav, Category } from "../components";
import { getCategories, getArticles } from "../api";
import { getMetaInformation } from "../utilities";

export async function generateMetadata() {
  const categories = await getCategories();
  const activeCategoryIndex = categories.findIndex(({ slug }) => slug === "/");
  return getMetaInformation(true, categories[activeCategoryIndex]);
}

export default async function Page() {
  const categoriesData = getCategories();
  const articlesData = getArticles({ page: 1, count: 10 });

  const [categories, { articles, pagination }] = await Promise.all([
    categoriesData,
    articlesData,
  ]);
  const activeCategoryIndex = categories.findIndex(({ slug }) => slug === "/");
  categories[activeCategoryIndex] = {
    ...categories[activeCategoryIndex],
    is_active: true,
  };

  return (
    <>
      <Nav categories={categories} />
      <Category articles={articles} pagination={pagination} />
    </>
  );
}
