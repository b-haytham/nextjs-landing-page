import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Feature from "./Feature";

interface FeatureListProps {
	isGreaterThan764: boolean;
}

const FeatureList: React.FC<FeatureListProps> = ({ isGreaterThan764 }) => {
	return (
		<Box>
			<Heading marginY={10} textAlign="center">
				Features We Provide
			</Heading>
			<Flex flexDirection={"column"} alignItems="center" marginTop={20}>
				{features.map((f, indx) => (
					<Feature
						key={indx}
						imageSrc={f}
						title={`Feature ${indx + 1}`}
						description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Facilis, eius!Lorem, ipsum dolor sit amet consectetur
							adipisiit amet consectetur adipisicing elit. Facilis, eius`}
					/>
				))}
			</Flex>
		</Box>
	);
};

const features = [
	"/features/data.png",
	"/features/hiring.png",
	"/features/opinion.png",
	"/features/site.png",
];

export default FeatureList;
