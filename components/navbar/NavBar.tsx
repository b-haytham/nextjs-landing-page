import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import NavLinks from "./NavLinks";

import Logo from "./Logo";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2px 15px",
        borderBottomWidth: 1,
        borderBottomColor: "#FFD700",
        backgroundColor: theme === "DARK" ? "black" : "white",
      }}
    >
      <Logo />
      <NavLinks />
    </div>
  );
};

export default NavBar;
