import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "./Footer";
function App({ children }) {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
