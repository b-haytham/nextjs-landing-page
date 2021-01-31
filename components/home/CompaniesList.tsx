import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Company from "./Company";

interface CompaniesListProps {}

const CompaniesList: React.FC<CompaniesListProps> = () => {
	return (
		<Box>
			<Heading marginY={10} textAlign="center">
				Compamies Working With us
			</Heading>
			<Flex
				justifyContent="space-evenly"
				alignItems="center"
				padding="20px"
				wrap="wrap"
			>
				{images.map((img, indx) => (
					<Company key={indx} src={img} width={100} height={100} />
				))}
			</Flex>
		</Box>
	);
};

const images = [
	"/companies/bmw-logo.png",
	"/companies/netflix.png",
	"/companies/microsoft.png",
	"/companies/facebook.png",
	"/companies/mercedes.png",
	"/companies/apple.png",
	"/companies/airbnb.png",
];

export default CompaniesList;
