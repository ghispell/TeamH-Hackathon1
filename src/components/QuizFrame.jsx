import { useState, useEffect } from "react";
import Bouton from "./Bouton";
import filmList from "../data/data.json";
import AnimatedPage from "./AnimatedPage";
import "../quiz-frame.scss";
import houseFrame from "../assets/house.png";
import Santa from "./Santa.jsx";

export default function QuizFrame() {
  const [filmchoisi, setFilmchoisi] = useState(null);
  const [timerFin, setTimerFin] = useState(false);
  const [boutonlist, setBoutonlist] = useState([]);
  const [timer, setTimer] = useState(30);
  const currentCount = timer < 10 ? `00:0${timer}` : `00:${timer}`;

  const [hasClicked, setHasClicked] = useState(false);
  const [score, setScore] = useState(0);
  function melangeTravelo(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    const indexRandom = Math.floor(Math.random() * filmList.length);
    const nouveauFilm = filmList[indexRandom];
    setFilmchoisi(nouveauFilm);
    setBoutonlist(
      melangeTravelo([nouveauFilm.titre, ...nouveauFilm.suggestions])
    );
    if (timer === 0) {
      setTimerFin(false);
      setTimer(30);
      setHasClicked(false);
    }
  }, [timerFin]);

  useEffect(() => {
    if (timer > 0) {
      const chrono = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(chrono);
    } else {
      setTimerFin(true);
    }
  }, [timer]);
  if (!filmchoisi) {
    return <p>Chargement</p>;
  }
  return (
    <AnimatedPage>
      <div className="quiz-frame flex justify-center items-center flex-col">
        <p className="timer">{currentCount}</p>
        <p>Score : {score}</p>
        <div className="quiz-container">
          <img
            src={filmchoisi.image}
            className="w-50 h-80 movie-img animate-blur"
          />
          <img src={houseFrame} alt="HOUSE" className="houseFrame" />
          <div className="btn-list flex">
            {boutonlist.map((element) => (
              <Bouton
                key={element}
                titre={element}
                filmchoisi={filmchoisi.titre}
                setTimer={setTimer}
                hasClicked={hasClicked}
                setHasClicked={setHasClicked}
                timer={timer}
                setScore={setScore}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
