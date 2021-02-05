import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useGreaterThan from "../utils/useGreaterThan";
import MeComponent from "./MeComponent";

import { motion } from "framer-motion";
import AnimatedText from "./Animated/AnimatedText";
import AnimatedListItem from "./Animated/AnimatedListItem";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  const isGreaterThan = useGreaterThan(764);
  const { theme } = useContext(ThemeContext);
  return (
    <Flex
      bgColor={theme === "DARK" && "black"}
      flexDirection={!isGreaterThan ? "column-reverse" : "row"}
      minHeight="calc(100vh - 60px)"
      justifyContent="center"
    >
      <Box flex="1">
        <Flex
          flexDirection="column"
          justifyContent="center"
          h="100%"
          paddingLeft={!isGreaterThan ? 0 : 50}
        >
          <Box marginBottom={50}>
            <AnimatedText minHeightPlaceholder={120} componentName="Heading">
              <Heading
                bgGradient="linear(to-l, #ffc400, #277ecf)"
                bgClip="text"
                fontFamily="Anton, sans-serif"
                letterSpacing={4}
                //color="#277ecf"
                fontSize="4rem"
                textAlign={isGreaterThan ? "start" : "center"}
              >
                TECHNOLOGY
              </Heading>
              <Heading
                fontFamily="Anton, sans-serif"
                letterSpacing={4}
                textAlign={isGreaterThan ? "start" : "center"}
              >
                Landing Page
              </Heading>
            </AnimatedText>
          </Box>
          <Box paddingX={isGreaterThan ? 0 : 15}>
            <Text
              fontFamily="Roboto, sans-serif"
              fontWeight="500"
              marginBottom={isGreaterThan ? 10 : 5}
              textAlign="justify"
              color={theme === 'DARK' && '#505c75'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              inventore ullam ab perspiciatis nesciunt assumenda dolores
              pariatur laboriosam aut cupiditate porro deserunt
            </Text>
          </Box>
          <Flex justifyContent={isGreaterThan ? "start" : "center"}>
            <AnimatedListItem minHeightPlaceholder={40} indx={0}>
              <Button
                variant="outline"
                colorScheme="#277ecf"
                color="#277ecf"
                marginRight={5}
              >
                Learn More
              </Button>
            </AnimatedListItem>
            <AnimatedListItem minHeightPlaceholder={40} indx={1}>
              <Button variant="outline" colorScheme="#FFD700" color="#FFD700">
                Get Started
              </Button>
            </AnimatedListItem>
          </Flex>
          {isGreaterThan && <MeComponent isLanding />}
        </Flex>
      </Box>
      <Box
        flex="1"
        borderBottomWidth={theme === "DARK" ? 0 : 1}
        alignSelf="center"
      >
        <AnimatedListItem minHeightPlaceholder={500} indx={0.5}>
          <motion.div
            animate={{
              y: [-10, 10],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Player
              autoplay
              loop
              src="/mobile-technology-animation.json"
              style={{ height: "500px" }}
            />
          </motion.div>
        </AnimatedListItem>
      </Box>
    </Flex>
  );
};

export default Landing;
