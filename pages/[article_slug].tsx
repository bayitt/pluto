import { NextPage } from "next";
import { Article } from "../components";
import { wrapper, getArticle, getCategories } from "../store";

const ArticlePage: NextPage = () => {
  return <Article />;
};

export default ArticlePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      await Promise.all([
        getCategories(store.dispatch),
        getArticle(store.dispatch, { slug: query?.article_slug as string }),
      ]);
      return {
        props: { categories: [], articles: [] },
      };
    }
);
