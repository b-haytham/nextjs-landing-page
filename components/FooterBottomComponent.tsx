import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import {
	AiFillInstagram,
	AiFillYoutube,
	AiFillTwitterSquare,
	AiFillFacebook,
} from "react-icons/ai";

import MeComponent from "./MeComponent";

interface FooterBottomComponentProps {}

const FooterBottomComponent: React.FC<FooterBottomComponentProps> = () => {
	return (
		<Flex flexDirection="column" alignItems="center">
			<Flex>
				<AiFillFacebook fontSize="2rem" />
				<AiFillInstagram fontSize="2rem" />
				<AiFillTwitterSquare fontSize="2rem" />
				<AiFillYoutube fontSize="2rem" />
			</Flex>
			<MeComponent />
		</Flex>
	);
};

export default FooterBottomComponent;
