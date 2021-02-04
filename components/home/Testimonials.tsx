import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import TestimonialCompononent from "./TestimonialCompononent";

interface TestimonialsProps {

}

const Testimonials: React.FC<TestimonialsProps> = ({  }) => {

	const { theme } = useContext(ThemeContext)

	return (
		<Box>
			<Heading marginY={10} textAlign="center" color={theme === 'DARK' && '#d1d1d1'} >
				Testimonials
			</Heading>
			<Flex flexDirection="column">
				<TestimonialCompononent
					
					imageSrc="https://bit.ly/code-beast"
					name="Christian Nwamba"
					job="Digital Marketing"
				/>
				<TestimonialCompononent
					
					imageSrc="https://bit.ly/prosper-baba"
					name="Prosper Otemuyiwa"
					job="CEO"
					right
				/>
				<TestimonialCompononent
					
					imageSrc="https://bit.ly/ryan-florence"
					name="Ryan Florence"
					job="Computer Science"
				/>
			</Flex>
		</Box>
	);
};

export default Testimonials;
