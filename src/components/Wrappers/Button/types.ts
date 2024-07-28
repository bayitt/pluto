import { ReactNode } from "react";
import { ButtonProps as ChakraButtonProps } from "@chakra-ui/button";

export type ButtonProps = ChakraButtonProps & {
  children: ReactNode;
};
