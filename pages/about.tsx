import {
	Box,
	Divider,
	Flex,
	Heading,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Carousel from "../components/Carousel";
import OurTeam from "../components/OurTeam";

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
	const [isLoading, setIsLoading] = useState(true);
	const [peoples, setPeoples] = useState(null);
	const [error, setError] = useState(null);

	const [greaterThan764, setGreaterThan764] = useState(true);
	const [isLargerThan764] = useMediaQuery("(min-width: 764px)");

	useEffect(() => {
		setGreaterThan764(isLargerThan764);
	}, [isLargerThan764]);

	useEffect(() => {
		axios
			.get("https://randomuser.me/api/?results=10")
			.then((res) => {
				setIsLoading(false);
				setPeoples(res.data);
			})
			.catch((err) => setError(error));
	}, []);

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
				<OurTeam
					peoples={peoples ? peoples.results : null}
					isLoading={isLoading}
					greaterThan764={greaterThan764}
				/>
			</Box>
		</>
	);
};

export default about;
