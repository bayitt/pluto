import { ComponentStyleConfig } from "@chakra-ui/theme";

export const components: { [key: string]: ComponentStyleConfig } = {
  Button: {
    baseStyle: {
      fontWeight: "regular",
      borderRadius: 3,
      fontSize: "sm",

      _focus: {
        boxShadow: "none",
      },
    },
    variants: {
      primary: {
        bg: "whaleBlue",
        color: "white",

        _loading: {
          opacity: 1,

          _hover: {
            bg: "whaleBlue",
          },
        },
      },
      secondary: {
        border: "1px solid",
        borderColor: "whaleBlue",
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
