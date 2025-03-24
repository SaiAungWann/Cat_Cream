import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// ..

function ClientSideLayout() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out-back",
      delay: 100,
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default ClientSideLayout;
