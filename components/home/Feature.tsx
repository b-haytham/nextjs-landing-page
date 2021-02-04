import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useGreaterThan from "../../utils/useGreaterThan";

interface FeatureProps {
	imageSrc: string;
	title: string;
	description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, imageSrc }) => {
	
	const isGreaterThan = useGreaterThan(764)


	const { theme } = useContext(ThemeContext)

	return (
		<Flex flexDirection={isGreaterThan ? 'row' : 'column'} marginY={15} alignItems="center">
			<Flex  flex="1" justifyContent="center" alignItems="center">
				<img style={{borderRadius:50, padding: 20}}  src={imageSrc} width={300} height={200}  />
			</Flex>
			<Flex
				flex="2"
				flexDirection="column"
				justifyContent="center"
				alignItems={isGreaterThan ? "start" : 'center'}
			>
				<Text fontWeight="bolder" fontFamily="Roboto, sans-serif" color={theme === 'DARK' && '#d1d1d1'}>
					{title}
				</Text>
				<Text
					padding={isGreaterThan ? '0 30px 0 0' : 10}
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
