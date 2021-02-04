import { Box } from "@chakra-ui/react";
import { useContext } from "react";

import { Player } from "@lottiefiles/react-lottie-player";

import { ThemeContext } from "../context/ThemeContext";

const Custom404 = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box bgColor={theme === "DARK" && "black"}>
      <Box minH="calc(100vh - 60px)">
        <Player
          autoplay
          loop
          src="/404-animation.json"
          style={{ width: "80%" }}
        />
      </Box>
    </Box>
  );
};

export default Custom404;
