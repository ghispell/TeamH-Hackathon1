import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="frame">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
