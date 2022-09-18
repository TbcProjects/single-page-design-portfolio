import type { NextPage } from "next";

import { Container, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Text as="h1" textStyle="h1" textAlign={"center"}>
          Single page portfolio
        </Text>
        <Text as="h2" textStyle="h2">
          Single page portfolio
        </Text>
        <Text as="h3" textStyle="h3">
          Single page portfolio
        </Text>
        <Text textStyle="body">Single page portfolio</Text>
      </Container>
      <Container bg={"black"}>
        <Text as="h1" textStyle="h1" textAlign={"center"}>
          Single page portfolio
        </Text>
        <Text as="h2" textStyle="h2">
          Single page portfolio
        </Text>
        <Text as="h3" textStyle="h3">
          Single page portfolio
        </Text>
        <Text textStyle="body">Single page portfolio</Text>
      </Container>
    </>
  );
};

export default Home;
