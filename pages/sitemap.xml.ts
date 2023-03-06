import { GetServerSideProps } from "next";
import { getCategories, getSitemapArticles, TCategory } from "../store";

const Sitemap = () => {};

export default Sitemap;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const categories = await getCategories();
  const articles = await getSitemapArticles();
  const host = process.env.NEXT_PUBLIC_APP_URL as string;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${host}</loc>
        <priority>1</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${categories?.map(({ slug }) => {
        return `
                  <url>
                      <loc>${host}${slug}</loc>
                      <priority>1</priority>
                      <lastmod>${new Date().toISOString()}</lastmod>
                  </url>
              `;
      })}
      ${articles.map(({ slug, updated_at }) => {
        return `
                  <url>
                      <loc>${host}${
          slug.startsWith("/") ? slug : "/" + slug
        }</loc>
                      <priority>1</priority>
                      <lastmod>${updated_at}</lastmod>
                  </url>
              `;
      })}
  </urlset>
`;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: [],
  };
};
