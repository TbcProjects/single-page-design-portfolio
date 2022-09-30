import { Container, Flex } from "@chakra-ui/react";
import SiteButton from "../Elements/Button/SiteButton";
import BrandLogo from "../Elements/Logos/BrandLogo";

const Header = () => {
  return (
    <Container p="16px">
      <Flex justify={"space-between"}>
        <BrandLogo w={"48px"} h={"48px"} />
        <SiteButton href="/" label="Free Consultation" variant="primary" size={'md'} />
      </Flex>
    </Container>
  );
};

export default Header;
