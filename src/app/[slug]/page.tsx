import { ArticleContent } from "../../components";
import { getCategories, getArticle } from "../../api";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const categoriesData = getCategories();
  const articleData = getArticle(slug);

  const [categories, article] = await Promise.all([
    categoriesData,
    articleData,
  ]);
  const activeCategoryIndex = categories.findIndex(
    ({ uuid }) => uuid === article.category.uuid
  );
  categories[activeCategoryIndex] = {
    ...categories[activeCategoryIndex],
    is_active: true,
  };

  return <ArticleContent {...article} categories={categories} />;
}
