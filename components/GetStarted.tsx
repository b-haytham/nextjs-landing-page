import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useHover } from "../utils/useIsHover";

interface GetStartedProps {}

const GetStarted: React.FC<GetStartedProps> = () => {
	const [ref, isHover] = useHover();

	console.log(isHover);

	return (
		<Flex justifyContent="center" marginY={20}>
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
			<Button variant="outline" colorScheme="#FFD700" color="#FFD700">
				Get Started
			</Button>
		</Flex>
	);
};

export default GetStarted;
