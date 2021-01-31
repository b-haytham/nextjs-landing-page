import NavBar from "./navbar/NavBar";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div id="page-wrap">
			<NavBar />
			{children}
		</div>
	);
};

export default Layout;
