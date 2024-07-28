import { notFound } from "next/navigation";
import { ArticleContent } from "../../components";
import { getCategories, getArticle, getSitemapArticles } from "../../api";
import { getMetaInformation } from "../../utilities";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const article = await getArticle(slug);
  return getMetaInformation(false, article);
}

export async function generateStaticParams() {
  const articles = await getSitemapArticles();
  return articles.map(({ slug }) => ({ slug: slug.slice(1) }));
}

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

  if (!article) return notFound();

  const activeCategoryIndex = categories.findIndex(
    ({ uuid }) => uuid === article.category.uuid
  );
  categories[activeCategoryIndex] = {
    ...categories[activeCategoryIndex],
    is_active: true,
  };

  return <ArticleContent {...article} categories={categories} />;
}
