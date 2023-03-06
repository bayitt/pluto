import { NextPage } from "next";
import { Category } from "../../components";
import { wrapper, getCategoryArticles, getCategories } from "../../store";

const CategoryPage: NextPage = () => {
  return <Category />;
};

export default CategoryPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query, ...etc }) => {
      const response = await Promise.all([
        getCategories(store.dispatch),
        getCategoryArticles(store.dispatch, {
          category_slug: query?.category_slug as string,
          page: 1,
          count: 10,
        }),
      ]);

      if (!response[1])
        return {
          notFound: true,
        };

      return {
        props: { categories: [], articles: [] },
      };
    }
);
