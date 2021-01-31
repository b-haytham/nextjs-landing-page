import classes from "../styles/Home.module.css";

import { Player } from "@lottiefiles/react-lottie-player";
import {
	Box,
	Flex,
	Heading,
	useMediaQuery,
	Spacer,
	Text,
	Button,
} from "@chakra-ui/react";
import Landing from "../components/Landing";

export default function Home() {
	const [isLargerThan764] = useMediaQuery("(min-width: 764px)");

	return (
		<>
			<Landing />
		</>
	);
}
