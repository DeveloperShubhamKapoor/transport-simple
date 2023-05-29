import { Box, Button, Flex, Heading, Img, Tag, Text } from "@chakra-ui/react";

export const SectionOne = () => {
  return (
    <Box
      w="100%"
      h="auto"
      boxSizing="border-box"
      p="1"
      pb="3%"
      background={"#f9fcff"}
    >
      <Flex p="1" w="100%" flexWrap={{ base: "wrap", lg: "nowrap" }}>
        <Box
          w={{ base: "100%", lg: "50%" }}
          pl={{ base: "4", lg: "10%" }}
          pt={{ base: "5%", lg: "5%" }}
          pr={{ base: "0", lg: "1%" }}
        >
          <Heading color={"blackAlpha.700"} textAlign={"left"}>
            Content fleet management
          </Heading>
          <Heading color={"blackAlpha.700"} textAlign={"left"}>
            Content fleet
          </Heading>
          <Text w={"90%"} color={"#5d5d6e"} pt="3%" pb={"6%"} fontSize={"19px"}>
            TransportSimple has been built with a vision to revolutionise the
            logistics industry globally. It is the perfect one-stop fleet
            management solution suitable for all fleet sizes.
          </Text>
          <Button
            outline={"2px solid #ffa200"}
            mr="20px"
            color={"#ffa200"}
            background={"white"}
            _hover={{ background: " #ffa200", color: "white" }}
          >
            Get Started
          </Button>
          <Button
            outline={"2px solid #ffa200"}
            color={"#ffa200"}
            background={"white"}
            _hover={{ background: " #ffa200", color: "white" }}
          >
            Contact Us
          </Button>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} mb={{ base: "4", lg: "0" }}>
          <Img
            w="100%"
            src="https://www.transportsimple.com/redesign/images/banner.png"
          ></Img>
        </Box>
      </Flex>
    </Box>
  );
};
