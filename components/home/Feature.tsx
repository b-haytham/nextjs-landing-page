import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface FeatureProps {
	imageSrc: string;
	title: string;
	description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, imageSrc }) => {
	return (
		<Flex marginY={15} alignItems="center">
			<Flex flex="1" justifyContent="center" alignItems="center">
				<Image src={imageSrc} width={200} height={200} />
			</Flex>
			<Flex
				flex="2"
				flexDirection="column"
				justifyContent="center"
				alignItems="start"
			>
				<Text fontWeight="bolder" fontFamily="Roboto, sans-serif">
					{title}
				</Text>
				<Text
					paddingRight={20}
					marginTop={5}
					fontFamily="Roboto, sans-serif"
					textAlign="justify"
				>
					{description}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Feature;
