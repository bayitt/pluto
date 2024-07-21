import { TCategory } from "../../models";

export type NavProps = {
  categories: (TCategory & { is_active?: boolean })[];
};
