import NextLink from "next/link";

import { Button, ButtonProps } from "@chakra-ui/react";

interface SiteButtonProps extends ButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

const SiteButton = ({ href, label, variant }: SiteButtonProps) => {
  return (
    <NextLink href={href} passHref>
      <Button variant={variant}>{label}</Button>
    </NextLink>
  );
};

export default SiteButton;
