import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import PricingCard from "./PricingCard";

interface PricingListProps {}

const PricingList: React.FC<PricingListProps> = () => {
	const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
	return (
		<Box>
			<Heading marginY={10} textAlign="center">
				Pricing
			</Heading>
			<Flex
				flexDirection={isLargerThan1000 ? "row" : "column"}
				alignItems="center"
				marginTop={20}
				justifyContent="space-evenly"
			>
				<PricingCard
					planName="Free Plan"
					planPrice={0}
					features={["feature one", "feature two", "feature three"]}
				/>
				<PricingCard
					planName="Free Plan"
					planPrice={50}
					features={["feature one", "feature two", "feature three"]}
					isPro
				/>
				<PricingCard
					planName="Free Plan"
					planPrice={100}
					features={["feature one", "feature two", "feature three"]}
				/>
			</Flex>
		</Box>
	);
};

export default PricingList;
