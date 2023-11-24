import { useState } from "react";

function Bouton({
  titre,
  filmchoisi,
  setTimer,
  hasClicked,
  setHasClicked,
  setScore,
  timer,
}) {
  const [estLeBonFilm, setEstLeBonFilm] = useState("");
  const handleClick = () => {
    if (titre === filmchoisi) {
      setEstLeBonFilm(() => "good");
    } else {
      setEstLeBonFilm(() => "bad");
    }
  };
  return (
    <>
      <button
        disabled={hasClicked}
        className={`response-btn  ${estLeBonFilm} ${
          hasClicked && titre === filmchoisi && "good"
        }`}
        onClick={() => {
          handleClick();
          setScore((prev) => (titre === filmchoisi ? prev + timer : prev));
          setTimer(() => 2);
          setHasClicked(() => true);
        }}
      >
        <p>{titre}</p>
      </button>
    </>
  );
}

export default Bouton;
