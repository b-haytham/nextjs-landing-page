import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PricingList from "../components/home/PricingList";
import PricingTable from "../components/PricingTable";

const Pricing = () => {
	const [isGreaterThan1000, setIsGreaterThan1000] = useState(true);
	const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

	useEffect(() => {
		setIsGreaterThan1000(isLargerThan1000);
	}, [isLargerThan1000]);

	return (
		<>
			<Flex
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				marginBottom={50}
			>
				<Heading marginY={10} textAlign="center">
					Pricing Guide
				</Heading>
				<Text fontWeight={300} textAlign="center" maxW={300}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Totam placeat dolorem harum aliquam, nulla ad perf ?
				</Text>
			</Flex>
			<PricingList isGreaterThan1000={isGreaterThan1000} />
			<PricingTable isGreaterThan1000={isLargerThan1000} />
		</>
	);
};

export default Pricing;
