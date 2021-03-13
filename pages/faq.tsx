import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";

import FaqQ from "react-faq-component";
import AnimatedText from "../components/Animated/AnimatedText";
import { ThemeContext } from "../context/ThemeContext";
import useGreaterThan from "../utils/useGreaterThan";

const Faq = () => {
  const { theme } = useContext(ThemeContext);
  const isGreaterThan764 = useGreaterThan(764)

  const styles = {
    bgColor: theme === "DARK" ? "black" : "white",
    rowContentColor: theme === "DARK" ? "grey" : "black",
    rowTitleTextSize: "1.5rem",
    rowTitleColor: "grey",
    rowContentPaddingTop: "10px",
    rowContentPaddingBottom: "50px",
    rowContentPaddingLeft: "10px",
    arrowColor: theme === 'DARK' ? 'white' : 'black'
  };

  return (
    <Box bgColor={theme === "DARK" && "black"}>
      <AnimatedText componentName="Faq Title">
        <Heading
          paddingY={10}
          textAlign="center"
          color={theme === "DARK" && "#d1d1d1"}
        >
          Frequently Asked Questions (FAQ)
        </Heading>
      </AnimatedText>
      <Box minH="100vh" paddingX={isGreaterThan764 ? 20 : 5} paddingY={70}>
        <FaqQ data={data} styles={styles} />
      </Box>
    </Box>
  );
};

const data = {
  title: "How it works",

  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content:
        "Lorem ipsum dolor sit amet, consectetur Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Lorem ipsum dolor sit amet, consectetur Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Lorem ipsum dolor sit amet, consectetur Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam",
    },
    {
      title: "What is the package version",
      content:
        "Lorem ipsum dolor sit amet, consectetur Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "What is the package version",
      content: "v1.0.5",
    },
  ],
};

export default Faq;
