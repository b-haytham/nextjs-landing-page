import { Flex, Text, Tooltip } from "@chakra-ui/react";

import { BsCodeSlash } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

interface MeComponentProps {
  isLanding?: boolean;
}

const MeComponent: React.FC<MeComponentProps> = ({ isLanding }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Flex
      bgColor={theme === "DARK" ? "black" : "white"}
      borderRadius={50}
      marginTop={10}
      padding={isLanding ? "5px 0" : "5px 20px"}
      justifyContent={isLanding ? "start" : "center"}
      alignItems="center"
    >
      <Text
        color={theme === "DARK" && "white"}
        fontFamily="Roboto"
        fontWeight="bolder"
        fontSize="15px"
      >
        This webside is built by `haytham boussarsar`{" "}
      </Text>
      <Tooltip label="Website source code">
        <motion.a
          href="https://github.com/b-haytham/nextjs-landing-page"
          target="_blank"
          whileHover={{
            scale: 1.3,
          }}
        >
          <BsCodeSlash
            fontSize="1.3rem"
            color={theme === "DARK" ? "white" : "black"}
            style={{ margin: "0 10px" }}
          />
        </motion.a>
      </Tooltip>
      <Tooltip label="My Github Profile">
        <motion.a 
          href="https://github.com/b-haytham" 
          target="_blank"
          whileHover={{
            scale: 1.3
          }}
        >
          <AiFillGithub
            fontSize="1.3rem"
            color={theme === "DARK" ? "white" : "black"}
          />
        </motion.a>
      </Tooltip>
    </Flex>
  );
};

export default MeComponent;
