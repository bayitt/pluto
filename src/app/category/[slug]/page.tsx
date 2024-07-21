import { Nav, Category } from "../../../components";
import { getCategories, getCategoryArticles } from "../../../api";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const categoriesData = getCategories();
  const articlesData = getCategoryArticles({
    category_slug: slug,
    page: 1,
    count: 10,
  });

  const [categories, { articles }] = await Promise.all([
    categoriesData,
    articlesData,
  ]);
  const activeCategoryIndex = categories.findIndex(
    ({ slug: category_slug }) => category_slug === `/category/${slug}`
  );
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
