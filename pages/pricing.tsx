import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import PricingList from "../components/home/PricingList";
import PricingTable from "../components/PricingTable";
import { ThemeContext } from "../context/ThemeContext";
import useGreaterThan from "../utils/useGreaterThan";

const Pricing = () => {
	const isGreaterThan = useGreaterThan(1000)

	const { theme } = useContext(ThemeContext)

	return (
		<Box bgColor={theme === 'DARK' ? 'black' : 'white'}>
			<Flex
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				marginBottom={50}
			>
				<Heading marginY={10} textAlign="center" color={theme === 'DARK' && '#d1d1d1'}>
					Pricing Guide
				</Heading>
				<Text fontWeight={300} textAlign="center" maxW={300}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Totam placeat dolorem harum aliquam, nulla ad perf ?
				</Text>
			</Flex>
			<PricingList  />
			<PricingTable  />
		</Box>
	);
};

export default Pricing;
