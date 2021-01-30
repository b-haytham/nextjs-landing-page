import dynamic from "next/dynamic";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { Flex, useMediaQuery } from "@chakra-ui/react";

import NavLinks from "./NavLinks";

import Logo from "./Logo";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "2px 15px",
				borderBottomWidth: 1,
				borderBottomColor: "#d6a400",
			}}
		>
			<Logo />
			<NavLinks />
		</div>
	);
};

export default NavBar;
