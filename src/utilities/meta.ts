import type { Metadata } from "next";
import { TCategory, TArticle } from "../models";

export const getMetaInformation = (
  isCategoryPage: boolean,
  resource: TCategory | TArticle
): Metadata => {
  const title = isCategoryPage
    ? (resource as TCategory)?.name === "All Articles"
      ? "Olamileke's Blog"
      : "Olamileke's Blog - " + (resource as TCategory)?.name
    : (resource as TArticle)?.title;
  const description = isCategoryPage
    ? (resource as TCategory)?.description
    : (resource as TArticle)?.content?.slice(0, 155)?.replace(/<[^>]+>/g, "") +
      "...";
  const url =
    (process.env.APP_URL ?? "") +
    (resource?.slug?.startsWith("/") ? resource?.slug : "/" + resource?.slug);
  //   const image =
  //   const openGraph = { title, description, url, siteName: "Olamileke's Blog", images: [{  }] }

  const metas = [
    {
      name: "title",
      value: isCategoryPage
        ? (resource as TCategory)?.name === "All Articles"
          ? "Olamileke's Blog"
          : "Olamileke's Blog - " + (resource as TCategory)?.name
        : (resource as TArticle)?.title,
    },
    {
      name: "description",
      value: isCategoryPage
        ? (resource as TCategory)?.description
        : (resource as TArticle)?.content
            ?.slice(0, 155)
            ?.replace(/<[^>]+>/g, "") + "...",
    },
    {
      name: "og:type",
      value: "website",
    },
    {
      name: "og:site_name",
      value: "Olamileke's Blog",
    },
    {
      name: "og:title",
      value: isCategoryPage
        ? (resource as TCategory)?.name
        : (resource as TArticle)?.title,
    },
    {
      name: "og:description",
      value: isCategoryPage
        ? (resource as TCategory)?.description
        : (resource as TArticle)?.content
            ?.slice(0, 155)
            ?.replace(/<[^>]+>/g, "") + "...",
    },
    {
      name: "og:image",
      value: isCategoryPage ? "" : (resource as TArticle)?.featured_image,
    },
    {
      name: "og:url",
      value:
        (process.env.NEXT_PUBLIC_APP_URL ?? "") +
        (resource?.slug?.startsWith("/")
          ? resource?.slug
          : "/" + resource?.slug),
    },
    {
      name: "twitter:title",
      value: isCategoryPage
        ? (resource as TCategory)?.name
        : (resource as TArticle)?.title,
    },
    {
      name: "twitter:description",
      value: isCategoryPage
        ? (resource as TCategory)?.description
        : (resource as TArticle)?.content
            ?.slice(0, 155)
            ?.replace(/<[^>]+>/g, "") + "...",
    },
    {
      name: "twitter:image",
      value: isCategoryPage ? "" : (resource as TArticle)?.featured_image,
    },
    {
      name: "twitter:url",
      value:
        (process.env.NEXT_PUBLIC_APP_URL ?? "") +
        resource?.slug?.startsWith("/")
          ? resource?.slug
          : "/" + resource?.slug,
    },
    {
      name: "twitter:card",
      value: "summary_large_image",
    },
    {
      name: "twitter:site",
      value: "@f_olamileke",
    },
  ];

  if (!isCategoryPage) {
    metas.push({
      name: "article:published_time",
      value: (resource as TArticle)?.created_at,
    });
    metas.push({
      name: "article:modified_time",
      value: (resource as TArticle)?.updated_at as string,
    });
  }

  return {};
};
