import Bouton from "./Bouton";
import { useEffect, useState } from "react";
import BoutonList from "./BoutonList";
import "../quiz-frame.scss";
import houseFrame from "../assets/house.png";

export default function QuizFrame() {
  const [timer, setTimer] = useState(30);
  const currentCount = timer < 10 ? `00:0${timer}` : `00:${timer}`;
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
    <div className="quiz-frame flex justify-center items-center flex-col">
      <div>
        <p className="timer">{currentCount}</p>
      </div>
      <div className="quiz-container">
        <img src={houseFrame} alt="HOUSE" className="houseFrame" />
        <BoutonList />
      </div>
    </div>
  );
}
