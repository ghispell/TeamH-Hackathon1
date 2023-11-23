import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import backgroundVideo from "../assets/video_hackathon.mp4";

function Root() {
  return (
    <div className="frame">
      <Navbar />
      <video autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
