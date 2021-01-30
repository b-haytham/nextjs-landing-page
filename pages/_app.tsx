import "../styles/globals.css";
import { useState } from "react";
import {
	ChakraProvider,
	theme as chakraTheme,
	useMediaQuery,
} from "@chakra-ui/react";

import { ThemeType } from "../context/theme";

import { ThemeContext } from "../context/ThemeContext";
import SideBar from "../components/navbar/SideBar";

function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState<"DARK" | "LIGHT">("LIGHT");

	const toggleTheme = (theme: ThemeType) => {
		return setTheme((th) => (th === "LIGHT" ? "DARK" : "LIGHT"));
	};

	return (
		<div id="outer-container">
			<SideBar />
			<ChakraProvider theme={chakraTheme}>
				<ThemeContext.Provider value={{ theme, toggleTheme }}>
					<Component {...pageProps} />
				</ThemeContext.Provider>
			</ChakraProvider>
		</div>
	);
}

export default MyApp;
