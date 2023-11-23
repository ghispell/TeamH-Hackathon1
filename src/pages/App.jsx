import { useState, useEffect } from "react";
import Home from "../components/Home";
import backgroundVideo from "../assets/video_hackathon.mp4";
import BoutonList from "../components/BoutonList";
import QuizFrame from "../components/QuizFrame";
function App() {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const chrono = setTimeout(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        // ici il faudra ajouter ce qui se passe quand on arrive à 0 seconde sur le chrono, soit on passe direct à la prochaine question, qoit peut etre qu'on laisse le mec cliquer sur next ¯\_(ツ)_/¯
      }
    }, 1000);

    return () => clearTimeout(chrono);
  }, [timer]);

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
