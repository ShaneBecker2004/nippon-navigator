import Header from "../src/components/Common/Header/Header";
import Footer from "../src/components/Common/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
  <>
    <Header /> 
    <Outlet />
    <Footer />
  </>
  )
};

export default Layout;