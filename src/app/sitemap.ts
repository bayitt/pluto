import { MetadataRoute } from "next";
import { getCategories, getSitemapArticles } from "../api";

export default async function sitemap() {
  const categories = await getCategories();
  const articles = await getSitemapArticles();

  let maps: MetadataRoute.Sitemap = [];

  maps = maps.concat(
    categories.map(({ slug }) => ({
      url: process.env.APP_URL + slug,
      lastModified: new Date(),
      priority: 1,
    }))
  );

  maps = maps.concat(
    articles.map(({ slug, updated_at }) => ({
      url: process.env.APP_URL + slug,
      lastModified: updated_at,
      priority: 1,
    }))
  );

  return maps;
}
