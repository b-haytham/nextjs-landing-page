import classes from "../styles/Home.module.css";

import { Box, useMediaQuery } from "@chakra-ui/react";
import Landing from "../components/Landing";
import Testimonials from "../components/home/Testimonials";
import PricingList from "../components/home/PricingList";
import CompaniesList from "../components/home/CompaniesList";
import { useContext, useEffect, useState } from "react";
import GetStarted from "../components/GetStarted";
import FeatureList from "../components/home/FeaturesList";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {

	const { theme } = useContext(ThemeContext)

	const [greaterThan764, setGreaterThan764] = useState(true);

	const [isLargerThan764] = useMediaQuery("(min-width: 764px)");

	const [isGreaterThan1000, setIsGreaterThan1000] = useState(true);
	const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

	useEffect(() => {
		setIsGreaterThan1000(isLargerThan1000);
	}, [isLargerThan1000]);

	useEffect(() => {
		setGreaterThan764(isLargerThan764);
	}, [isLargerThan764]);

	return (
		<Box bgColor={theme === 'DARK' ? 'black' : 'white'}>
			<Landing  />
			<FeatureList  />
			<Testimonials  />
			<GetStarted />
			<PricingList showTitle  />
			<CompaniesList />
		</Box>
	);
}
