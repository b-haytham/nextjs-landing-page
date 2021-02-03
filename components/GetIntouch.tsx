import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface GetInTouchProps {
	greaterThan764: boolean;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ greaterThan764 }) => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();

	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<Text fontSize="1.4rem" fontWeight={700} textAlign="center" my={20}>
				Get in Touch
			</Text>
			<Flex
				width="80%"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				padding={greaterThan764 ? "80px" : "50px"}
				borderWidth={1.5}
				borderRadius={10}
				borderColor="#FFD700"
				marginBottom={100}
			>
				<FormControl id="name" isRequired>
					<FormLabel>Your Name</FormLabel>
					<Input placeholder="Name" />
				</FormControl>
				<FormControl id="email" isRequired>
					<FormLabel>Email address</FormLabel>
					<Input placeholder="Email address" />
				</FormControl>
				<FormControl id="message" isRequired>
					<FormLabel>Message</FormLabel>
					<Textarea multiple placeholder="Message" />
				</FormControl>
				<Button
					width={100}
					mt={50}
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
