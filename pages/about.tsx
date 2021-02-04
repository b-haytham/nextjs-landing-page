import {
	Box,
	Divider,
	Flex,
	Heading,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import Carousel from "../components/Carousel";
import OurTeam from "../components/OurTeam";
import { ThemeContext } from "../context/ThemeContext";
import useGreaterThan from "../utils/useGreaterThan";
import useRequest from "../utils/useRequest";

export type PoepleType = {
	name: {
		title: string;
		first: string;
		last: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
};

const about = () => {
	const isGreaterThan = useGreaterThan(764)

	const { theme } = useContext(ThemeContext) 

	const {isLoading, data,error} = useRequest({method: 'GET', url: "https://randomuser.me/api/?results=10"})

	
	return (
		<Box bgColor={theme === 'DARK' && 'black'}>
			<Heading paddingY={10} textAlign="center" color={theme === 'DARK' && '#d1d1d1'} >
				About Us
			</Heading>

			<Box minHeight="100vh">
				<Flex
					justifyContent="center"
					alignItems="center"
					paddingBottom={100}
				>
					<Divider w={50} borderColor="#ffd700" borderWidth={1.3} />
					<Text fontFamily="Roboto" fontWeight="bolder" mx={10}>
						Our Story
					</Text>
					<Divider w={50} borderColor="#ffd700" borderWidth={1.3} />
				</Flex>
				<Text fontFamily="Roboto" textAlign="justify" paddingX={20} color={theme === 'DARK' && '#757573'}>
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
				<OurTeam
					peoples={data ? data.results : null}
					isLoading={isLoading}
				/>
			</Box>
		</Box>
	);
};

export default about;
