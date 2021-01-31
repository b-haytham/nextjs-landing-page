import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import TestimonialCompononent from "./TestimonialCompononent";

interface TestimonialsProps {
	isGreaterThan764: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ isGreaterThan764 }) => {
	return (
		<Box>
			<Heading marginY={10} textAlign="center">
				Testimonials
			</Heading>
			<Flex flexDirection="column">
				<TestimonialCompononent
					isGreaterThan764={isGreaterThan764}
					imageSrc="https://bit.ly/code-beast"
					name="Christian Nwamba"
					job="Digital Marketing"
				/>
				<TestimonialCompononent
					isGreaterThan764={isGreaterThan764}
					imageSrc="https://bit.ly/prosper-baba"
					name="Prosper Otemuyiwa"
					job="CEO"
					right
				/>
				<TestimonialCompononent
					isGreaterThan764={isGreaterThan764}
					imageSrc="https://bit.ly/ryan-florence"
					name="Ryan Florence"
					job="Computer Science"
				/>
			</Flex>
		</Box>
	);
};

export default Testimonials;
