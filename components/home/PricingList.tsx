import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import PricingCard from "./PricingCard";

interface PricingListProps {
	
	showTitle?: boolean;
}

const PricingList: React.FC<PricingListProps> = ({
	
	showTitle,
}) => {

	const { theme } = useContext(ThemeContext)

	return (
		<Box>
			{showTitle && (
				<Heading marginY={10} textAlign="center" color={theme === 'DARK' && '#d1d1d1'}>
					Pricing
				</Heading>
			)}
			<Flex
				alignItems="center"
				marginTop={20}
				justifyContent="space-evenly"
				wrap="wrap"
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
