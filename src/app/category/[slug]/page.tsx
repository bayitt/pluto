import { notFound } from "next/navigation";
import { Nav, Category } from "../../../components";
import { getCategories, getCategoryArticles } from "../../../api";
import { getMetaInformation } from "../../../utilities";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const categories = await getCategories();
  const activeCategoryIndex = categories.findIndex(
    ({ slug: category_slug }) => category_slug === `/category/${slug}`
  );
  return getMetaInformation(true, categories[activeCategoryIndex]);
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories
    .filter(({ slug }) => slug !== "/")
    .map(({ slug }) => ({ slug: slug.split("/category")[1].slice(1) }));
}

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

  const [categories, { articles, pagination }] = await Promise.all([
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

  if (articles.length === 0) return notFound();

  return (
    <>
      <Nav categories={categories} />
      <Category articles={articles} pagination={pagination} />
    </>
  );
}
