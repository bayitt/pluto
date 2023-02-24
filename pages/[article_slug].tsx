import { NextPage } from "next";
import { Article } from "../components";
import { wrapper, getArticle, getCategories } from "../store";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

const ArticlePage: NextPage = () => {
  return <Article />;
};

export default ArticlePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query, ...etc }) => {
      const markdownToHtml = async (markdown: string) => {
        const result = await remark()
          .use(html, { sanitize: false })
          .use(prism)
          .process(markdown);
        return result.toString();
      };

      await Promise.all([
        getCategories(store.dispatch),
        getArticle(
          store.dispatch,
          { slug: query?.article_slug as string },
          markdownToHtml
        ),
      ]);
      return {
        props: { categories: [], articles: [] },
      };
    }
);
