import type { NextPage } from "next";

import Hero from "../components/Sections/Hero/Hero";

import { Container, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Container maxW={'1111px'}>
        <Hero />
      </Container>
    </>
  );
};

export default Home;
