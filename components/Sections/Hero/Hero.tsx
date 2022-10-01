import { Container, Box, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container maxW={"1111px"} p={"80px 0"}>
      <Box textAlign={"center"} maxW={"752px"} m="0 auto">
        <Text as="h1" textStyle={"h1"}>
          Design solutions made easy
        </Text>
        <Text textStyle={"body"} p="20px 23px 0">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </Text>
      </Box>
    </Container>
  );
};

export default Hero;
