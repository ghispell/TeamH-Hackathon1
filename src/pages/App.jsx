
import Home from "../components/Home";
import backgroundVideo from "../assets/video_hackathon.mp4";


function App() {
 
  return (
    <div>
      <Home />
      <video autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
