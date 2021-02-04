import { Flex, Text } from "@chakra-ui/react";

import { BsCodeSlash } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface MeComponentProps {
  isLanding?: boolean;
}

const MeComponent: React.FC<MeComponentProps> = ({isLanding}) => {
  const  {theme} =  useContext(ThemeContext)

  return (
    <Flex
      bgColor={theme === 'DARK' ? "black" : 'white'}
      borderRadius={50}
      marginTop={10}
      padding={isLanding ? '5px 0' : "5px 20px"}
      justifyContent={ isLanding ? 'start' : "center"}
      alignItems="center"
    >
      <Text  color={theme === 'DARK' && 'white'} fontFamily="Roboto" fontWeight="bolder" fontSize='15px'>
        This webside is built by `haytham boussarsar`{" "}
      </Text>
      <a
        href="https://github.com/b-haytham/nextjs-landing-page"
        target="_blank"
      >
        <BsCodeSlash
          fontSize="1.3rem"
          color={theme ==='DARK' ? 'white' : "black"}
          style={{ margin: "0 10px" }}
        />
      </a>
      <a href="https://github.com/b-haytham" target="_blank">
        <AiFillGithub fontSize="1.3rem" color={theme === 'DARK' ? 'white' : "black"} />
      </a>
    </Flex>
  );
};

export default MeComponent;
