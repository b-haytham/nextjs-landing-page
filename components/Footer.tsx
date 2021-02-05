//#FFD700
//#FFD700
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useGreaterThan from "../utils/useGreaterThan";
import AnimatedListItem from "./Animated/AnimatedListItem";
import FooterBottomComponent from "./FooterBottomComponent";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { theme } = useContext(ThemeContext);

  const isGreaterThan = useGreaterThan(764)

  return (
    <Box
      bgColor="#000000"
      padding={isGreaterThan ? 50 : '50px 10px'}
      borderRadius={theme === "DARK" ? 0 : "10px 10px 0 0"}
      boxShadow="5px 9px 50px -23px #FFD700"
    >
      {/* <Flex
        justifyContent={isGreaterThan ? "space-between": 'space-evenly'}
        alignItems="center"
        marginBottom={50}
        wrap="wrap"
      > */}
      <SimpleGrid columns={isGreaterThan ? 4 : 2}   marginBottom={50}>
        <AnimatedListItem indx={0}>
          <Flex flexDirection="column" margin="10px 15px" alignItems={!isGreaterThan && 'center'}>
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
        <AnimatedListItem indx={0.2}>
          <Flex flexDirection="column" margin="10px 15px" alignItems={!isGreaterThan && 'center'}>
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
          <Flex flexDirection="column" margin="10px 15px" alignItems={!isGreaterThan && 'center'}>
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
          <Flex flexDirection="column" margin="10px 15px" alignItems={!isGreaterThan && 'center'}>
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
          <Flex flexDirection="column" margin="10px 15px" alignItems={!isGreaterThan && 'center'}>
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
          <Flex flexDirection="column" margin="10px 15px" alignItems={!isGreaterThan && 'center'}>
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
        </SimpleGrid>
      {/* </Flex> */}
      <AnimatedListItem indx={0.5}>
        <FooterBottomComponent />
      </AnimatedListItem>
    </Box>
  );
};

export default Footer;
