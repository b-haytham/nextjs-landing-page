import { Flex, Tooltip } from "@chakra-ui/react";
import AnimatedListItem from "../Animated/AnimatedListItem";
import ActiveLink from "./ActiveNavLink";

interface NavLinksProps {}

const NavLinks: React.FC<NavLinksProps> = ({}) => {
  return (
    <div className="nv-links">
      <AnimatedListItem indx={0}>
        <ActiveLink href="/" activeClassName="nav-link-active">
          <a className="nv-link">Home</a>
        </ActiveLink>
      </AnimatedListItem>
      <AnimatedListItem indx={0.1}>
        <Tooltip label='Not implemented yet' bgColor='#c4302b' hasArrow>
          <div style={{ cursor: "pointer" }}>
            <a className="nv-link">Learn more</a>
          </div>
        </Tooltip>
      </AnimatedListItem>
      <AnimatedListItem indx={0.2}>
        <ActiveLink href="/pricing" activeClassName="nav-link-active">
          <a className="nv-link">Pricing</a>
        </ActiveLink>
      </AnimatedListItem>
      <AnimatedListItem indx={0.3}>
        <ActiveLink href="/contact" activeClassName="nav-link-active">
          <a className="nv-link">Contact</a>
        </ActiveLink>
      </AnimatedListItem>
      <AnimatedListItem indx={0.4}>
        <ActiveLink href="/about" activeClassName="nav-link-active">
          <a className="nv-link">About</a>
        </ActiveLink>
      </AnimatedListItem>
      <AnimatedListItem indx={0.5}>
        <ActiveLink href="/faq" activeClassName="nav-link-active">
          <a className="nv-link">FAQ</a>
        </ActiveLink>
      </AnimatedListItem>
    </div>
  );
};

export default NavLinks;
