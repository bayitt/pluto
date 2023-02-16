import { GET_CATEGORIES } from "../../..";
import { createClient } from "../../../../utilities";

export const gqlGetCategories = () =>
  createClient().query({ query: GET_CATEGORIES });
