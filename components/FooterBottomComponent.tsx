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
				<AiFillFacebook
					style={{ margin: "0 10px" }}
					className="fb-icon"
					fontSize="2rem"
				/>
				<AiFillInstagram
					style={{ margin: "0 10px" }}
					className="inst-icon"
					fontSize="2rem"
				/>
				<AiFillTwitterSquare
					style={{ margin: "0 10px" }}
					className="twitt-icon"
					fontSize="2rem"
				/>
				<AiFillYoutube
					style={{ margin: "0 10px" }}
					className="yt-icon"
					fontSize="2rem"
				/>
			</Flex>
			<MeComponent />
		</Flex>
	);
};

export default FooterBottomComponent;
