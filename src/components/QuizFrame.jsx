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
  const currentCount = timer < 10 ? `00 : 0${timer}` : `00 : ${timer}`;

  const [hasClicked, setHasClicked] = useState(false);
  const [score, setScore] = useState(0);

  const [nbQuestion, setNbQuestion] = useState(0);

  function melangeTravelo(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const [blur, setBlur] = useState("animate-blur");

  useEffect(() => {
    const indexRandom = Math.floor(Math.random() * filmList.length);
    const nouveauFilm = filmList[indexRandom];
    setFilmchoisi(nouveauFilm);
    setBoutonlist(
      melangeTravelo([nouveauFilm.titre, ...nouveauFilm.suggestions])
    );
    if (timer === 0) {
      setBlur("animate-blur");
      setNbQuestion((prev) => prev + 1);
      setTimerFin(false);
      setTimer(30);
      setHasClicked(false);
    }
  }, [timerFin]);

  /*  useEffect(() => {
    if()
  }, [nbQuestion]); */
  useEffect(() => {
    if (timer > 0) {
      setBlur("animate-blur");
      const chrono = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(chrono);
    } else {
      setTimerFin(true);
      setBlur(null);
    }
  }, [timer]);
  if (!filmchoisi) {
    return <p>Chargement</p>;
  }
  return (
    <AnimatedPage>
      <div className="quiz-frame flex justify-center items-center flex-col">
        <div className="quiz-container">
          {timer <= 25 && timer >= 10 && <Santa response={filmchoisi} />}
          {nbQuestion > 10 || <p className="timer ">{currentCount}</p>}
          {nbQuestion > 10 || (
            <p className="score items-center justify-center flex">
              Score : {score}
            </p>
          )}
          {nbQuestion > 10 ? (
            <>
              <p className="finish flex justify-center">
                Fin de la partie, votre score est de : <br />
                <br /> {score}
              </p>

              <button
                onClick={() => window.location.reload()}
                className="restart transition"
              >
                Rejouer?
              </button>

              <img src={houseFrame} alt="HOUSE" className="houseFrame" />
            </>
          ) : (
            <>
              <p className="nb-question">Question {nbQuestion} /10</p>
              <img src={filmchoisi.image} className={`movie-img ${blur}`} />
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
                    setBlur={setBlur}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        {/* <div>
          <img src={path} alt="" className="path" />
        </div>  */}
      </div>
    </AnimatedPage>
  );
}
