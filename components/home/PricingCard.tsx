import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";

interface PricingCardProps {
	planName: string;
	planPrice: number;
	features: string[];
	isPro?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
	planName,
	planPrice,
	isPro,
	features,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<ReactCardFlip
			cardStyles={{
				front: {
					minWidth: 300,
					borderRadius: 20,
					border: !isPro ? "1px solid #FFD700" : "1px solid #277ecf",
					margin: "10px 0",
					boxShadow: !isPro
						? "-2px -1px 12px 0px #FFD700"
						: "-2px -1px 12px 0px #277ecf",
					overflow: "hidden",
				},
				back: {
					backgroundColor: isPro ? "#277ecf" : "#FFD700",
					nimWidth: 300,
					borderRadius: 20,
					margin: "10px 0",
					boxShadow: !isPro
						? "-2px -1px 12px 0px #FFD700"
						: "-2px -1px 12px 0px #277ecf",
					overflow: "hidden",
				},
			}}
			isFlipped={isFlipped}
			flipDirection="vertical"
		>
			<Box key={1}>
				<Box bgColor={isPro ? "#277ecf" : "#FFD700"} h={10} />
				<Flex
					flexDirection="column"
					minHeight={400}
					alignItems="center"
					justifyContent="space-evenly"
				>
					<Text
						fontFamily="Fredoka One, cursive;"
						fontSize="1.4rem"
						textAlign="center"
					>
						{planName}
					</Text>
					<Box>
						<Text>
							<span
								style={{
									fontSize: "3rem",
									fontWeight: "bold",
								}}
							>
								{planPrice}
							</span>
							/m
						</Text>
					</Box>
					<Flex flexDirection="column" justifyContent="space-between">
						<Button
							onClick={() => setIsFlipped(true)}
							marginY={5}
							variant="solid"
							color="#fff"
							colorScheme={isPro ? "#277ecf" : "#FFD700"}
							bgColor={isPro ? "#277ecf" : "#FFD700"}
						>
							See Features
						</Button>
						<Button
							variant="outline"
							colorScheme={isPro ? "#277ecf" : "#FFD700"}
							color={isPro ? "#277ecf" : "#FFD700"}
						>
							Subscribe
						</Button>
					</Flex>
				</Flex>
			</Box>

			<Box key={2} minWidth={300}>
				<Box h={10} />
				<Flex
					flexDirection="column"
					minHeight={400}
					alignItems="center"
					justifyContent="space-evenly"
				>
					<Text
						fontFamily="Fredoka One, cursive"
						fontSize="1.4rem"
						textAlign="center"
					>
						Features
					</Text>

					<Box>
						{features.map((f) => (
							<Text
								fontFamily="Roboto, sans-serif"
								fontWeight="bolder"
								textAlign="center"
								color="white"
								marginY={5}
							>
								{f}
							</Text>
						))}
					</Box>

					<Button
						onClick={() => setIsFlipped(false)}
						marginY={5}
						variant="outline"
						color="white"
						colorScheme="white"
					>
						See Price
					</Button>
				</Flex>
			</Box>
		</ReactCardFlip>
	);
};

export default PricingCard;
