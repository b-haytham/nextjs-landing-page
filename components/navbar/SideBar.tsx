import React, { useContext, useEffect } from "react";
import { fallDown as Menu } from "react-burger-menu";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { ThemeType } from "../../context/theme";
import { ThemeContext } from "../../context/ThemeContext";

import ActiveLink from "./ActiveNavLink";

interface SideBarProps {
  theme: ThemeType;
}

const SideBar: React.FC<SideBarProps> = ({ theme }) => {
  console.log(theme);

  return (
    <Menu
      styles={{ bmMenu: { backgroundColor: theme === "DARK" && "black" } }}
      right
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      customBurgerIcon={<GiHamburgerMenu color="#FFD700" />}
      customCrossIcon={
        <ImCross color="#d3aa22" style={{ backgroundColor: "transparent" }} />
      }
    >
      <ActiveLink href="/" activeClassName="nav-link-active-side-bar">
        <a className="menu-item">Home</a>
      </ActiveLink>
      <ActiveLink href="/learn-more" activeClassName="nav-link-active-side-bar">
        <a className="menu-item">Learn more</a>
      </ActiveLink>
      <ActiveLink href="/pricing" activeClassName="nav-link-active-side-bar">
        <a className="menu-item">Pricing</a>
      </ActiveLink>
      <ActiveLink href="/contact" activeClassName="nav-link-active-side-bar">
        <a className="menu-item">Contact</a>
      </ActiveLink>
      <ActiveLink href="/about" activeClassName="nav-link-active-side-bar">
        <a className="menu-item">About</a>
      </ActiveLink>
      <ActiveLink href="/faq" activeClassName="nav-link-active-side-bar">
        <a className="menu-item">FAQ</a>
      </ActiveLink>
    </Menu>
  );
};

export default SideBar;
