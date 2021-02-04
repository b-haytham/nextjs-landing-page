import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useGreaterThan from "../utils/useGreaterThan";
import AnimatedText from "./Animated/AnimatedText";

interface GetInTouchProps {}

const GetInTouch: React.FC<GetInTouchProps> = ({}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const { theme } = useContext(ThemeContext);

  const isGreaterThan = useGreaterThan(764);

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Text
        fontSize="1.4rem"
        fontWeight={700}
        textAlign="center"
        my={20}
        color={theme === "DARK" && "#d1d1d1"}
      >
        Get in Touch
      </Text>

      <Flex
        width="80%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={isGreaterThan ? "80px" : "50px"}
        borderWidth={1.5}
        borderRadius={10}
        borderColor="#FFD700"
        marginBottom={100}
      >
        <FormControl id="name" isRequired margin="10px 0">
          <FormLabel fontWeight="bolder" color={theme === "DARK" && "#c9c9bd"}>
            Your Name
          </FormLabel>
          <Input color={theme === "DARK" && "#c9c9bd"} placeholder="Name" />
        </FormControl>
        <FormControl margin="10px 0" id="email" isRequired>
          <FormLabel fontWeight="bolder" color={theme === "DARK" && "#c9c9bd"}>
            Email address
          </FormLabel>
          <Input
            color={theme === "DARK" && "#c9c9bd"}
            placeholder="Email address"
          />
        </FormControl>
        <FormControl margin="10px 0" id="message" isRequired>
          <FormLabel fontWeight="bolder" color={theme === "DARK" && "#c9c9bd"}>
            Message
          </FormLabel>
          <Textarea
            color={theme === "DARK" && "#c9c9bd"}
            multiple
            placeholder="Message"
          />
        </FormControl>
        <Button
          width={150}
          mt={5}
          variant="outline"
          backgroundColor={"#FFD700"}
          color={"white"}
        >
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default GetInTouch;
