"use client";

import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { TProvider } from "./types";
import { theme } from "../../theme";

export const Provider: FC<TProvider> = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
