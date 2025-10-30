"use client";

import { FC, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ImageContext } from "../../contexts";
import { TProvider } from "./types";
import { theme } from "../../theme";

export const Provider: FC<TProvider> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>({});

  const addImage = (image: string) => {
    setImages((images) => ({
      ...images,
      [image]: String(Math.random() * 1000),
    }));
  };

  return (
    <ChakraProvider theme={theme}>
      <ImageContext.Provider value={{ images, addImage }}>
        {children}
      </ImageContext.Provider>
    </ChakraProvider>
  );
};
