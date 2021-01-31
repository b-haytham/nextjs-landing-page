import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

interface LandingProps {
	isLargerThan764: boolean;
}

const Landing: React.FC<LandingProps> = ({ isLargerThan764 }) => {
	console.log(isLargerThan764);
	return (
		<Flex
			flexDirection={!isLargerThan764 ? "column-reverse" : "row"}
			minHeight="calc(100vh - 60px)"
			justifyContent="center"
		>
			<Box flex="1">
				<Flex
					flexDirection="column"
					justifyContent="center"
					h="100%"
					paddingLeft={!isLargerThan764 ? 0 : 50}
				>
					<Box marginBottom={50}>
						<Heading
							bgGradient="linear(to-l, #ffc400, #277ecf)"
							bgClip="text"
							fontFamily="Anton, sans-serif"
							letterSpacing={4}
							//color="#277ecf"
							fontSize="4rem"
							textAlign={isLargerThan764 ? "start" : "center"}
						>
							TECHNOLOGY
						</Heading>
						<Heading
							fontFamily="Anton, sans-serif"
							letterSpacing={4}
							textAlign={isLargerThan764 ? "start" : "center"}
						>
							Landing Page
						</Heading>
					</Box>
					<Box paddingX={isLargerThan764 ? 0 : 15}>
						<Text
							fontFamily="Roboto, sans-serif"
							fontWeight="500"
							marginBottom={isLargerThan764 ? 10 : 5}
							textAlign="justify"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Deleniti inventore ullam ab perspiciatis
							nesciunt assumenda dolores pariatur laboriosam aut
							cupiditate porro deserunt
						</Text>
					</Box>
					<Flex justifyContent={isLargerThan764 ? "start" : "center"}>
						<Button
							variant="outline"
							colorScheme="#277ecf"
							color="#277ecf"
							marginRight={5}
						>
							Learn More
						</Button>
						<Button
							variant="outline"
							colorScheme="#d6a400"
							color="#d6a400"
						>
							Get Started
						</Button>
					</Flex>
				</Flex>
			</Box>
			<Box flex="1" borderBottomWidth={1} alignSelf="center">
				<Player
					autoplay
					loop
					src="/mobile-technology-animation.json"
					style={{ height: "500px" }}
				/>
			</Box>
		</Flex>
	);
};

export default Landing;
