import { Text, Flex, Heading, Divider, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContactWays from "../components/ContactWays";
import GetInTouch from "../components/GetIntouch";

const Contact = () => {
	const [greaterThan764, setGreaterThan764] = useState(true);

	const [isLargerThan764] = useMediaQuery("(min-width: 764px)");

	useEffect(() => {
		setGreaterThan764(isLargerThan764);
	}, [isLargerThan764]);

	return (
		<>
			<Flex
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				marginBottom={50}
			>
				<Heading marginY={10} textAlign="center">
					Contact Us
				</Heading>
				<Flex
					justifyContent="center"
					alignItems="center"
					marginBottom={100}
				>
					<Divider w={50} borderColor="#ffd700" borderWidth={1.3} />
					<Text
						textAlign="center"
						fontFamily="Roboto"
						fontWeight="bolder"
						mx={10}
					>
						Have a Question or Remark ? Send us a message
					</Text>
					<Divider w={50} borderColor="#ffd700" borderWidth={1.3} />
				</Flex>
			</Flex>
			<ContactWays />
			<GetInTouch greaterThan764={greaterThan764} />
		</>
	);
};

export default Contact;
