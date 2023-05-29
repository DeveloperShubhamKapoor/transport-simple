import { Box, Button, Flex, Heading, Img, Tag, Text } from "@chakra-ui/react";

export const SectionThree = () => {
  return (
    <Box
      w="100%"
      h="auto"
      boxSizing="border-box"
      p="1"
      pb="5%"
      background={"#fdfbf9"}
      display={{ base: 'none', md: 'block' }}
    >
      <Text
        w="28%"
        px="6"
        margin={"auto"}
        textAlign={"center"}
        fontSize={"20px"}
        fontWeight={"medium"}
      >
        There are 3 steps to get
      </Text>
      <Text
        w="24%"
        borderBottom={"3px solid #1D67CD "}
        px="4"
        margin={"auto"}
        textAlign={"center"}
        fontSize={"20px"}
        fontWeight={"medium"}
        mb="5%"
      >
        Worlds most visible platform
      </Text>
      <Flex justifyContent={"space-evenly"} h="500px" align={"center"}>
        <Box
          w="25%"
          height={"400px"}
          borderRadius={"8px"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          position={"relative"}
        >
          <Box
            position={"absolute"}
            background={"#ffa200"}
            color={"whiteAlpha.800"}
            p={"15px"}
            px="20px"
            borderRadius={"50%"}
            left={"38%"}
            top={"-9%"}
            fontSize={"25px"}
          >
            01
          </Box>
          <Heading
            width={"90%"}
            margin={"auto"}
            p={"2px"}
            pt={"25%"}
            fontSize={"17px"}
            textAlign={"center"}
          >
            We will be your Tech partner
          </Heading>
          <Text
            width={"90%"}
            p={"2px"}
            px="12px"
            margin={"auto"}
            mt="20px"
            textAlign={"center"}
          >
            We have 20+ years of industry experience and understand the
            challenges faced by you. Let us manage technology while you expand
            your business!
          </Text>
        </Box>
        <Box
          w="25%"
          height={"450px"}
          borderRadius={"8px"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          position={"relative"}
          top={"-5%"}
        >
          <Box
            position={"absolute"}
            background={"#ffa200"}
            color={"whiteAlpha.800"}
            p={"15px"}
            px="20px"
            borderRadius={"50%"}
            left={"38%"}
            top={"-7%"}
            fontSize={"25px"}
          >
            02
          </Box>
          <Heading
            width={"90%"}
            margin={"auto"}
            p={"2px"}
            pt={"25%"}
            fontSize={"17px"}
            textAlign={"center"}
          >
            Request and Free Trial
          </Heading>
          <Text
            width={"90%"}
            p={"2px"}
            margin={"auto"}
            mt="20px"
            textAlign={"center"}
            px="12px"
          >
            The wait is over, try our software and see the value. No Credit
            Card, No T&C. Start your 14-day trial.
          </Text>
        </Box>
        <Box
          w="25%"
          height={"400px"}
          borderRadius={"8px"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          position={"relative"}
        >
          <Box
            position={"absolute"}
            background={"#ffa200"}
            color={"whiteAlpha.800"}
            p={"15px"}
            px="20px"
            borderRadius={"50%"}
            left={"38%"}
            top={"-8%"}
            fontSize={"25px"}
          >
            03
          </Box>
          <Heading
            width={"90%"}
            margin={"auto"}
            p={"2px"}
            pt={"25%"}
            fontSize={"17px"}
            textAlign={"center"}
          >
            Request and Free Trial
          </Heading>
          <Text
            width={"90%"}
            p={"2px"}
            margin={"auto"}
            mt="20px"
            textAlign={"center"}
            px="12px"
          >
            The wait is over, try our software and see the value. No Credit
            Card, No T&C. Start your 14-day trial.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
