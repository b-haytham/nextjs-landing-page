import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "../components/Carousel";

const about = () => {
	return (
		<>
			<Heading marginY={10} textAlign="center">
				About Us
			</Heading>

			<Box minHeight="100vh">
				<Flex
					justifyContent="center"
					alignItems="center"
					marginBottom={100}
				>
					<Divider w={50} borderColor="#ffd700" borderWidth={1.3} />
					<Text fontFamily="Roboto" fontWeight="bolder" mx={10}>
						Our Story
					</Text>
					<Divider w={50} borderColor="#ffd700" borderWidth={1.3} />
				</Flex>
				<Text fontFamily="Roboto" textAlign="justify" paddingX={20}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Facilis, eius!Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Facilis, eius! Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Facilis, eius!Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Facilis, eius!
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Facilis, eius!Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Facilis, eius! Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Facilis, eius!Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Facilis, eius!
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Facilis, eius!Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Facilis, eius! Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Facilis, eius!Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Facilis, eius!
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Facilis, eius!Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Facilis, eius! Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Facilis, eius!Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Facilis, eius!
				</Text>
				<Carousel />
			</Box>
		</>
	);
};

export default about;
