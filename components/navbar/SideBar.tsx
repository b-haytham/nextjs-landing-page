import { Tooltip } from "@chakra-ui/react";
import useWindowScroll from "@react-hook/window-scroll";
import React from "react";
import { fallDown as Menu } from "react-burger-menu";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { ThemeType } from "../../context/theme";
import AnimatedListItem from "../Animated/AnimatedListItem";

import ActiveLink from "./ActiveNavLink";

interface SideBarProps {
  theme: ThemeType;
}

const SideBar: React.FC<SideBarProps> = ({ theme }) => {
  const scrollY = useWindowScroll();
  console.log(scrollY);
  return (
    <Menu
      styles={{
        bmMenu: { backgroundColor: theme === "DARK" && "black" },
        bmBurgerButton: { display: scrollY > 0 && "none" },
      }}
      right
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      customBurgerIcon={<GiHamburgerMenu color="#FFD700" />}
      customCrossIcon={
        <ImCross color="#d3aa22" style={{ backgroundColor: "transparent" }} />
      }
    >
      <AnimatedListItem indx={0}>
        <ActiveLink href="/" activeClassName="nav-link-active-side-bar">
          <a className="menu-item">Home</a>
        </ActiveLink>
      </AnimatedListItem>
      <AnimatedListItem indx={0.1}>
        <Tooltip
          label="Not implemented yet"
          hasArrow
          bgColor="#c4302b"
          color="white"
          px={5}
        >
          <div>
            <a className="menu-item">Learn more</a>
          </div>
        </Tooltip>
      </AnimatedListItem>
      <AnimatedListItem indx={0.2}>
        <ActiveLink href="/pricing" activeClassName="nav-link-active-side-bar">
          <a className="menu-item">Pricing</a>
        </ActiveLink>
      </AnimatedListItem>
      <AnimatedListItem indx={0.3}>
        <ActiveLink href="/contact" activeClassName="nav-link-active-side-bar">
          <a className="menu-item">Contact</a>
        </ActiveLink>
      </AnimatedListItem>
      <AnimatedListItem indx={0.4}>
        <ActiveLink href="/about" activeClassName="nav-link-active-side-bar">
          <a className="menu-item">About</a>
        </ActiveLink>
      </AnimatedListItem>
      <AnimatedListItem indx={0.6}>
        <ActiveLink href="/faq" activeClassName="nav-link-active-side-bar">
          <a className="menu-item">FAQ</a>
        </ActiveLink>
      </AnimatedListItem>
    </Menu>
  );
};

export default SideBar;
