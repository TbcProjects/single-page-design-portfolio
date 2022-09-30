import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    fontSize: "16px",
    minH: "56px",
    py: "14px",
    borderRadius: "28px",
  },
  sizes: {
    md: {
      minW: "176px",
      minH: "44px",
    },
    lg: {
      minW: "228px",
      minH: "56px",
    },
  },
  variants: {
    primary: {
      color: "light_cream",
      bg: "black",
      _hover: {
        bg: "galactic_blue",
      },
    },
    secondary: {
      color: "light_cream",
      bg: "light_red",
      _hover: {
        bg: "summer_yellow",
      },
    },
  },
};

export default Button;
