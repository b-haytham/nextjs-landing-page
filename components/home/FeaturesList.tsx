import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AnimatedListItem from "../Animated/AnimatedListItem";
import AnimatedText from "../Animated/AnimatedText";
import Feature from "./Feature";

interface FeatureListProps {}

const FeatureList: React.FC<FeatureListProps> = ({}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box bgColor={theme === "DARK" ? "black" : "white"}>
      <Heading
        marginY={10}
        textAlign="center"
        color={theme === "DARK" && "#d1d1d1"}
      >
        Features We Provide
      </Heading>

      <Flex flexDirection={"column"} alignItems="center" marginTop={20}>
        {features.map((f, indx) => (
          <Feature
            key={indx}
            imageSrc={f}
            title={`Feature ${indx + 1}`}
            description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Facilis, eius!Lorem, ipsum dolor sit amet consectetur
							adipisiit amet consectetur adipisicing elit. Facilis, eius`}
          />
        ))}
      </Flex>
    </Box>
  );
};

const features = [
  "/features/data.png",
  "/features/hiring.png",
  "/features/opinion.png",
  "/features/site.png",
];

export default FeatureList;
