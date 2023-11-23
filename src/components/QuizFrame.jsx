import { useState, useEffect } from "react";
import Bouton from "./Bouton";
import filmList from "../data/data.json";
import "../quiz-frame.scss";

export default function QuizFrame() {
  const [filmchoisi, setFilmchoisi] = useState(null);
  const [timerFin, setTimerFin] = useState(false);
  const [boutonlist, setBoutonlist] = useState([]);
  const [timer, setTimer] = useState(30);
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
    <div className="quiz-frame flex gap-4 justify-center items-center">
      <p>{timer}</p>
      <p>Score : {score}</p>
      <img src={filmchoisi.image} className="w-40 animate-blur" />
      <div className="quiz-container flex justify-center items-center gap-2">
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
  );
}
