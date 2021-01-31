import classes from "../styles/Home.module.css";

import { useMediaQuery } from "@chakra-ui/react";
import Landing from "../components/Landing";
import Testimonials from "../components/home/Testimonials";
import PricingList from "../components/home/PricingList";
import CompaniesList from "../components/home/CompaniesList";
import { useEffect, useState } from "react";

export default function Home() {
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
		<>
			<Landing isLargerThan764={greaterThan764} />
			<Testimonials isGreaterThan764={greaterThan764} />
			<PricingList isGreaterThan1000={isGreaterThan1000} />
			<CompaniesList />
		</>
	);
}
