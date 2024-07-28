import { TArticle, TCategory } from "../../models";

export type ArticleContentProps = TArticle & {
  categories: TCategory[];
};
