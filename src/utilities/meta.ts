import type { Metadata } from "next";
import { TCategory, TArticle } from "../models";

export const getMetaInformation = (
  isCategoryPage: boolean,
  resource: TCategory | TArticle
): Metadata => {
  const icons = {
    icon: "https://res.cloudinary.com/olamileke/image/upload/v1722177338/noir/assets/noir_icon_ohve2g.png",
  };
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
  const image = isCategoryPage ? "" : (resource as TArticle)?.featured_image;
  const openGraph = {
    title,
    description,
    url,
    siteName: "Olamileke's Blog",
    images: [{ url: image, width: 800, height: 600 }],
    type: "website",
  };
  const twitter = {
    title,
    description,
    url,
    creator: "@f_olamileke",
    card: "summary_large_image",
    images: [image],
  };

  const metadata: Metadata = { icons, title, description, openGraph, twitter };

  if (isCategoryPage) {
    metadata["openGraph"] = {
      ...metadata["openGraph"],
      publishedTime: (resource as TArticle)?.created_at,
      modifiedTime: (resource as TArticle)?.updated_at as string,
    } as any;
  }

  return metadata;
};
