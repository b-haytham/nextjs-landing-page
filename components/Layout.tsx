import Footer from "./Footer";
import NavBar from "./navbar/NavBar";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="page-wrap">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
