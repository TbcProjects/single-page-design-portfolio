import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import styles from "./styles";
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import layerStyles from "./foundations/layerStyles";
import textStyles from "./foundations/textStyles";

const overrides = {
  config,
  styles,
  breakpoints,
  colors,
  fonts,
  layerStyles,
  textStyles,
  components: {},
};

const theme = extendTheme(overrides);

export default theme;
