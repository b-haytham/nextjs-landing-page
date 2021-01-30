import NavBar from "../components/navbar/NavBar";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useMediaQuery } from "@chakra-ui/react";

export default function Home() {
	return (
		<div id="page-wrap">
			<NavBar />
			<Player
				autoplay
				loop
				src="/mobile-technology-animation.json"
				style={{ height: "300px", width: "300px" }}
			/>
			<div style={{ height: 400 }} />
		</div>
	);
}
