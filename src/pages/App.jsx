import Home from "../components/Home";
import backgroundVideo from "../assets/video_hackathon.mp4";
import BoutonList from "../components/BoutonList";
import QuizFrame from "../components/QuizFrame";
function App() {
  return (
    <div>
      <Home />
      <video autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <p>{timer}</p>
      <p>Template SACOD</p>
    </div>
  );
}

export default App;
