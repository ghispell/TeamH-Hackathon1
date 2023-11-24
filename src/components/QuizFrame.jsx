import { useState, useEffect } from "react";
import Bouton from "./Bouton";
import filmList from "../data/data.json";
import "../quiz-frame.scss";
import houseFrame from "../assets/house.png";
import Santa from "./Santa.jsx";

export default function QuizFrame() {
  const [filmchoisi, setFilmchoisi] = useState(null);
  const [timerFin, setTimerFin] = useState(false);
  const [boutonlist, setBoutonlist] = useState([]);
  const [timer, setTimer] = useState(30);
  const currentCount = timer < 10 ? `00:0${timer}` : `00:${timer}`;

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
    <div className="quiz-frame flex justify-center items-center flex-col">
      <div>
        <p className="timer">{currentCount}</p>
      </div>
      <div className="quiz-container">

        {timer <= 20 && <Santa response={filmchoisi} />}


        <img src={filmchoisi.image} className="w-50 h-80 movie-img" />

        <img src={houseFrame} alt="HOUSE" className="houseFrame" />
        <div className="btn-list flex">
          {boutonlist.map((element) => (
            <Bouton key={element} titre={element} />
          ))}
        </div>
      </div>
    </div>
  );
}
