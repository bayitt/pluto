import { NextPage } from "next";
import { wrapper, getArticle, getCategories } from "../store";

const ArticlePage: NextPage = () => {
  return <p>Article</p>;
};

export default ArticlePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query, ...etc }) => {
      await Promise.all([
        getCategories(store.dispatch),
        getArticle(store.dispatch, { slug: query?.article_slug as string }),
      ]);
      return {
        props: { categories: [], articles: [] },
      };
    }
);
