import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

const BrandLogo = (props: BoxProps) => {
  return (
    <Box {...props}>
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path fill="#030303" d="M0 0h64v64H0z" />
          <circle stroke="#FFF7F0" stroke-width="4" cx="32" cy="32" r="14" />
        </g>
      </svg>
    </Box>
  );
};

export default BrandLogo;
