import { NextPage } from "next";
import { wrapper, TAppState } from "../store";

const Index: NextPage = () => {
  return <p>Welcome to Pluto, Pluto is very cool</p>;
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      store.dispatch({
        type: "__NEXT_REDUX_WRAPPER_HYDRATE__",
        payload: { categories: [], articles: [] },
      });
      return {
        props: { categories: [], articles: [] },
      };
    }
);
