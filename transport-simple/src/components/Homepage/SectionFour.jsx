import { Box, Button, Heading, Text } from "@chakra-ui/react";

export const SectionFour = () => {
  return (
    <Box
      w="100%"
      h="320px"
      p="3"
      pt={"5%"}
      boxSizing="border-box"
      background="#468fec"
    >
      <Heading
        w="80%"
        m="auto"
        textAlign={"center"}
        fontSize={"22px"}
        fontWeight={"medium"}
        color={"white"}
      >
        {" "}
        Be more efficient and profitable with TransportSimple
      </Heading>
      <Text
        w="65%"
        pt="2%"
        m="auto"
        textAlign={"center"}
        fontSize={"20px"}
        color={"white"}
      >
        We offer solution to streamline operations and accounts, resulting in
        enhanced productivity increased profits, scalability and ease in daily
        operations. We've been building a solution to revolutionize the
        logistics industry globally.
      </Text>
      <Button
        display={"block"}
        textAlign={"center"}
        m="auto"
        mt="25px"
        color={"white"}
        background={"#ffa200"}
      >
        Book a demo
      </Button>
    </Box>
  );
};
