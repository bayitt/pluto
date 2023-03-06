import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { TAppState, TArticle, TCategory } from "../../store";
import { getMetaInformation } from "./helpers";

export const Meta = () => {
  const { articles, categories } = useSelector<TAppState, TAppState>(
    (state) => state
  );
  const router = useRouter();
  const isCategoryPage =
    router.asPath === "/" || router.asPath.includes("/category/");
  const resource: TCategory | TArticle = isCategoryPage
    ? (categories?.find(
        (category) => category?.slug === router.asPath
      ) as TCategory)
    : (articles as TArticle[])[0];

  const renderMetas = () =>
    getMetaInformation(isCategoryPage, resource)?.map(
      ({ name, value }, index) => {
        if (name === "title") return <title key={index}>{value}</title>;
        else if (name === "description")
          return <meta key={index} name="description" content={value} />;
        else return <meta key={index} property={name} content={value} />;
      }
    );

  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      {renderMetas()}
    </Head>
  );
};
