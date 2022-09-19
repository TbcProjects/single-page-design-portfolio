import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    fontSize: "16px",
    w: "228px",
    h: "56px",
    py: "14px",
    borderRadius: "28px",
  },
  sizes: {},
  variants: {
    primary: {
      color: "light_cream",
      bg: "black",
      _hover: {
        bg: "light_red",
      },
    },
    secondary: {
      color: "light_cream",
      bg: "galactic_blue",
      _hover: {
        bg: "summer_yellow",
      },
    },
  },
};

export default Button;
