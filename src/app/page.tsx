import { Nav, Category } from "../components";
import { getCategories, getArticles } from "../api";

export default async function Page() {
  const categoriesData = getCategories();
  const articlesData = getArticles({ page: 1, count: 10 });

  const [categories, { articles }] = await Promise.all([
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
      <Category articles={articles} />
    </>
  );
}
