import { NextPage } from "next";
import { Category } from "../components";
import { wrapper, getArticles, getCategories } from "../store";

const Index: NextPage = () => {
  return <Category />;
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
        props: {
          categories: [],
          articles: [],
          loading: false,
          pagination: { currentPage: 1, lastPage: 1 },
        },
      };
    }
);
