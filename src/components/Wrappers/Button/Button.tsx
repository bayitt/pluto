import { FC } from "react";
import { useFormStatus } from "react-dom";
import { Button as ChakraButton } from "@chakra-ui/button";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  const { pending } = useFormStatus();

  return (
    <ChakraButton {...rest} isLoading={pending}>
      {children}
    </ChakraButton>
  );
};
