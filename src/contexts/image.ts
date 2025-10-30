import { createContext } from "react";

export const ImageContext = createContext({
  images: {},
  addImage: (image: string) => {},
});
