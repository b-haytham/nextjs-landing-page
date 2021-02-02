import { Flex } from "@chakra-ui/react";
import ActiveLink from "./ActiveNavLink";

interface NavLinksProps {}

const NavLinks: React.FC<NavLinksProps> = ({}) => {
	return (
		<div className="nv-links">
			<ActiveLink href="/" activeClassName="nav-link-active">
				<a className="nv-link">Home</a>
			</ActiveLink>
			<ActiveLink href="/learn-more" activeClassName="nav-link-active">
				<a className="nv-link">Learn more</a>
			</ActiveLink>
			<ActiveLink href="/pricing" activeClassName="nav-link-active">
				<a className="nv-link">Pricing</a>
			</ActiveLink>
			<ActiveLink href="/contact" activeClassName="nav-link-active">
				<a className="nv-link">Contact</a>
			</ActiveLink>
			<ActiveLink href="/about" activeClassName="nav-link-active">
				<a className="nv-link">About</a>
			</ActiveLink>
			<ActiveLink href="/faq" activeClassName="nav-link-active">
				<a className="nv-link">FAQ</a>
			</ActiveLink>
		</div>
	);
};

export default NavLinks;
