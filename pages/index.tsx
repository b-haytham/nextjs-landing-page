import classes from "../styles/Home.module.css";

import { useMediaQuery } from "@chakra-ui/react";
import Landing from "../components/Landing";
import Testimonials from "../components/home/Testimonials";
import PricingList from "../components/home/PricingList";

export default function Home() {
	const [isLargerThan764] = useMediaQuery("(min-width: 764px)");

	return (
		<>
			<Landing isLargerThan764={isLargerThan764} />
			<Testimonials />
			<PricingList />
		</>
	);
}
