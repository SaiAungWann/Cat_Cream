import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "./Footer";
function ClientSideLayout({ children }) {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default ClientSideLayout;
