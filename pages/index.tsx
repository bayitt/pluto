import { NextPage } from "next";
import { wrapper, getArticles, getCategories } from "../store";

const Index: NextPage = () => {
  return <p>Welcome to Pluto, Pluto is very cool</p>;
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      await Promise.all([
        getCategories(store.dispatch),
        getArticles(store.dispatch, { page: 1, count: 10 }),
      ]);
      return {
        props: { categories: [], articles: [] },
      };
    }
);
