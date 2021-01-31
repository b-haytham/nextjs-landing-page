import { Flex } from "@chakra-ui/react";
import TestimonialCompononent from "./TestimonialCompononent";

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
	return (
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
	);
};

export default Testimonials;
