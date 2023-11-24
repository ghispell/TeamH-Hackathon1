import Home from "../components/Home";
import AnimatedPage from "../components/AnimatedPage";
import backgroundVideo from "../assets/video_hackathon.mp4";
import { Link } from "react-router-dom";

function App() {
  return (
    <AnimatedPage>
      <div>
        <Home />
        <video autoPlay muted loop id="myVideo">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
    </AnimatedPage>
  );
}

export default App;
