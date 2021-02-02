import {
	Avatar,
	Box,
	Flex,
	Heading,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

interface TestimonialCompononentProps {
	imageSrc: string;
	name: string;
	job: string;
	right?: boolean;
	isGreaterThan764: boolean;
}

const getFlexDirection = (isLarger: boolean, right?: boolean) => {
	if (isLarger) {
		if (right) {
			return "row-reverse";
		} else {
			return "row";
		}
	} else {
		return "column";
	}
};

const TestimonialCompononent: React.FC<TestimonialCompononentProps> = ({
	imageSrc,
	name,
	job,
	right,
	isGreaterThan764,
}) => {
	return (
		<Flex
			flexDirection={getFlexDirection(isGreaterThan764, right)}
			marginTop={10}
			overflow="hidden"
		>
			{!isGreaterThan764 && (
				<Box borderTopRadius={15} h={5} bgColor="#d6a400" />
			)}
			{isGreaterThan764 && (
				<Box
					w={5}
					borderRadius={right ? "15px 0 0 15px" : "0 15px 15px 0"}
					bgColor="#d6a400"
				/>
			)}
			<Flex
				flex="1"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				marginTop={isGreaterThan764 ? 0 : 10}
			>
				<Avatar size="2xl" name={name} src={imageSrc} />
				<Text>{name}</Text>
				<Text fontWeight="bolder">{job}</Text>
			</Flex>
			<Flex
				alignItems="center"
				flex="2"
				padding={!isGreaterThan764 ? "20px 40px" : "0 100px 0 70px"}
			>
				<Text fontFamily="Roboto, sans-serif" textAlign="justify">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Facilis, eius!Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Facilis, eius! Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Facilis, eius!Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Facilis, eius!
				</Text>
			</Flex>
		</Flex>
	);
};

export default TestimonialCompononent;
