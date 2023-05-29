import { Box, Button, Flex, Heading, Img, Tag, Text } from "@chakra-ui/react";

export const SectionTwo = () => {
  return (
    <Box w="100%" h="auto" boxSizing="border-box" p="1">
      <Flex p="1" w="100%" flexWrap={{ base: "wrap", lg: "nowrap" }}>
        <Box
          w={{ base: "100%", lg: "50%" }}
          pl={{ base: "4", lg: "10%" }}
          pt={{ base: "5%", lg: "5%" }}
          pr={{ base: "0", lg: "1%" }}
        >
          <Text
            pl="5px"
            borderLeft={"4px solid #1D67CD"}
            fontSize={"13px"}
            fontWeight={"medium"}
            textTransform={"uppercase"}
          >
            Know about <span style={{ color: "#1D67CD" }}>Transportsimple</span>
          </Text>
          <Heading
            pl="5px"
            borderLeft={"4px solid #1D67CD"}
            fontSize={"28px"}
            color={"blackAlpha.700"}
            textAlign={"left"}
          >
            At our company, we specialize in providing comprehensive
          </Heading>
          <Text w={"90%"} color="#5d5d6e" pt="3%" pb={"6%"} fontSize={"19px"}>
            TransportSimple has been built with a vision to revolutionise the
            logistics industry globally. It is the perfect one-stop fleet
            management solution suitable for all fleet sizes.TransportSimple has
            been built with a vision to revolutionise the logistics industry
            globally. It is the perfect one-stop fleet management solution
            suitable for all fleet sizes.
          </Text>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} mb={{ base: "4", lg: "0" }}>
          <Img
            w="100%"
            src="https://www.transportsimple.com/redesign/images/save-time.gif"
          ></Img>
        </Box>
      </Flex>
    </Box>
  );
};
