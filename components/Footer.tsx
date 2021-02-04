//#FFD700
//#FFD700
interface FooterProps {}
import { Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AnimatedListItem from "./Animated/AnimatedListItem";
import { MountLazy } from "./Animated/AnimatedText";
import FooterBottomComponent from "./FooterBottomComponent";

const Footer: React.FC<FooterProps> = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      bgColor="#000000"
      padding={50}
      borderRadius={theme === "DARK" ? 0 : "10px 10px 0 0"}
      boxShadow="5px 9px 50px -23px #FFD700"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom={50}
        wrap="wrap"
      >
        <AnimatedListItem indx={0}>
          <Flex flexDirection="column" margin="10px 15px">
            <Text
              color="#FFD700"
              fontFamily="Roboto"
              fontWeight="bold"
              marginBottom={10}
              fontSize="1.4rem"
            >
              Section
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
          </Flex>
        </AnimatedListItem>
        <AnimatedListItem indx={.2}>
          <Flex flexDirection="column" margin="10px 15px">
            <Text
              color="#FFD700"
              fontFamily="Roboto"
              fontWeight="bold"
              marginBottom={10}
              fontSize="1.4rem"
            >
              Section
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
          </Flex>
        </AnimatedListItem>
        <AnimatedListItem indx={0.4}>
          <Flex flexDirection="column" margin="10px 15px">
            <Text
              color="#FFD700"
              fontFamily="Roboto"
              fontWeight="bold"
              marginBottom={10}
              fontSize="1.4rem"
            >
              Section
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
          </Flex>
        </AnimatedListItem>
        <AnimatedListItem indx={0.6}>
          <Flex flexDirection="column" margin="10px 15px">
            <Text
              color="#FFD700"
              fontFamily="Roboto"
              fontWeight="bold"
              marginBottom={10}
              fontSize="1.4rem"
            >
              Section
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
          </Flex>
        </AnimatedListItem>
        <AnimatedListItem indx={0.8}>
          <Flex flexDirection="column" margin="10px 15px">
            <Text
              color="#FFD700"
              fontFamily="Roboto"
              fontWeight="bold"
              marginBottom={10}
              fontSize="1.4rem"
            >
              Section
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              {" "}
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
          </Flex>
        </AnimatedListItem>
        <AnimatedListItem indx={1}>
          <Flex flexDirection="column" margin="10px 15px">
            <Text
              color="#FFD700"
              fontFamily="Roboto"
              fontWeight="bold"
              marginBottom={10}
              fontSize="1.4rem"
            >
              Section
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
            <Text className="footer-link" cursor="pointer" fontFamily="Roboto">
              Lorem ipsum
            </Text>
          </Flex>
        </AnimatedListItem>
      </Flex>
      <AnimatedListItem indx={0.5}>
        <FooterBottomComponent />
      </AnimatedListItem>
    </Box>
  );
};

export default Footer;
