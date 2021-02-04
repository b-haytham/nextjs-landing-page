import {
  Text,
  Flex,
  Heading,
  Divider,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import AnimatedText from "../components/Animated/AnimatedText";
import ContactWays from "../components/ContactWays";
import GetInTouch from "../components/GetIntouch";
import { ThemeContext } from "../context/ThemeContext";
import useGreaterThan from "../utils/useGreaterThan";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const isGreaterThan = useGreaterThan(764);

  return (
    <Box bgColor={theme === "DARK" && "black"}>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginBottom={50}
      >
        <AnimatedText>
          <Heading
            marginY={10}
            textAlign="center"
            color={theme === "DARK" && "#d1d1d1"}
          >
            Contact Us
          </Heading>
        </AnimatedText>
		<AnimatedText translateX>
        <Flex justifyContent="center" alignItems="center" marginBottom={100}>
          <Divider w={50} borderColor="#ffd700" borderWidth={1.3} />
          <Text
            textAlign="center"
            fontFamily="Roboto"
            fontWeight="bolder"
            mx={10}
          >
            Have a Question or Remark ? Send us a message
          </Text>
          <Divider w={50} borderColor="#ffd700" borderWidth={1.3} />
        </Flex>
		</AnimatedText>
      </Flex>
      <ContactWays />
      <GetInTouch />
    </Box>
  );
};

export default Contact;
