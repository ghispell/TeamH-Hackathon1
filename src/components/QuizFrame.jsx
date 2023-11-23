import { useState, useEffect } from "react";
import Bouton from "./Bouton";
import BoutonList from "./BoutonList";
import filmList from "../data/data.json";
import "../quiz-frame.scss";

export default function QuizFrame() {
  const [filmchoisi, setFilmchoisi] = useState(null);
  const [timerFin, setTimerFin] = useState(false);
  const [boutonlist, setBoutonlist] = useState([]);
  const [timer, setTimer] = useState(5);
  console.log(filmchoisi);
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
      setTimer(5);
    }
  }, [timerFin]);
  /* setBoutonlist((prevBoutonlist) => {
          const newBoutonlist = [...prevBoutonlist];
          newBoutonlist[indexFilmChoisi] = filmchoisi.titre;
          return newBoutonlist;
        }); -DarkPierre*/
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
    <div className="quiz-frame flex justify-center items-center">
      <p>{timer}</p>
      <img src={filmchoisi.image} className="w-40" />
      <div className="quiz-container flex justify-center items-center gap-2">
        <img src="" alt="" />
        {boutonlist.map((element) => (
          <button
            className="border-2 border-black p-2"
            key={element}
            type="button"
          >
            {element}
          </button>
        ))}
      </div>
    </div>
  );
}
