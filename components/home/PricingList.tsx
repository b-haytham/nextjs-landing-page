import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";

interface PricingListProps {
	isGreaterThan1000: boolean;
}

const PricingList: React.FC<PricingListProps> = ({ isGreaterThan1000 }) => {
	return (
		<Box>
			<Heading marginY={10} textAlign="center">
				Pricing
			</Heading>
			<Flex
				flexDirection={isGreaterThan1000 ? "row" : "column"}
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
					planName="Pro"
					planPrice={50}
					features={["feature one", "feature two", "feature three"]}
					isPro
				/>
				<PricingCard
					planName="Entreprise"
					planPrice={100}
					features={["feature one", "feature two", "feature three"]}
				/>
			</Flex>
		</Box>
	);
};

export default PricingList;
