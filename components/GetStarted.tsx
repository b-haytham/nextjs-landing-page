import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useHover } from "../utils/useIsHover";
import AnimatedListItem from "./Animated/AnimatedListItem";

interface GetStartedProps {}

const GetStarted: React.FC<GetStartedProps> = () => {
  const [ref, isHover] = useHover();

  console.log(isHover);

  return (
    <Flex justifyContent="center" marginY={20}>
      <AnimatedListItem indx={1}>
        <Button
          //@ts-ignore
          ref={ref}
          variant="outline"
          colorScheme="#277ecf"
          color="#277ecf"
          marginRight={5}
        >
          Learn More
        </Button>
      </AnimatedListItem>
      <AnimatedListItem indx={2}>
        <Button variant="outline" colorScheme="#FFD700" color="#FFD700">
          Get Started
        </Button>
      </AnimatedListItem>
    </Flex>
  );
};

export default GetStarted;
