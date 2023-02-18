import { ComponentStyleConfig } from "@chakra-ui/theme";

export const components: { [key: string]: ComponentStyleConfig } = {
  Button: {
    variants: {
      primary: {
        bg: "#143642",
        color: "white",
        fontWeight: "regular",
        borderRadius: 3,
        fontSize: "sm",
      },
    },
    defaultProps: {
      variant: "primary",
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: "workSans",
    },
  },
};
