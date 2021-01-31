import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
	return (
		<Flex minHeight="calc(100vh - 70px)" justifyContent="center">
			<Box flex="1">
				<Flex
					flexDirection="column"
					justifyContent="center"
					h="100%"
					paddingLeft={50}
				>
					<Box marginBottom={50}>
						<Heading
							fontFamily="Anton, sans-serif"
							letterSpacing={4}
							color="#277ecf"
							fontSize="4rem"
						>
							TECHNOLOGY
						</Heading>
						<Heading
							fontFamily="Anton, sans-serif"
							letterSpacing={4}
						>
							Landing Page
						</Heading>
					</Box>
					<Box>
						<Text
							fontFamily="Roboto, sans-serif"
							fontWeight="500"
							marginBottom={10}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Deleniti inventore ullam ab perspiciatis
							nesciunt assumenda dolores pariatur laboriosam aut
							cupiditate porro deserunt
						</Text>
					</Box>
					<Flex>
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
