import { useState } from "react";

function Bouton({
  titre,
  filmchoisi,
  setTimer,
  hasClicked,
  setHasClicked,
  setScore,
  timer,
  setBlur,
}) {
  const [estLeBonFilm, setEstLeBonFilm] = useState("");
  const handleClick = () => {
    if (titre === filmchoisi) {
      setEstLeBonFilm(() => "right");
    } else {
      setEstLeBonFilm(() => "wrong");
    }
  };
  if (hasClicked === true) {
    setBlur(null);
  }

  return (
    <>
      <button
        disabled={hasClicked}
        className={`response-btn  ${estLeBonFilm} ${
          hasClicked && titre === filmchoisi && "right"
        }`}
        onClick={() => {
          handleClick();
          setScore((prev) => (titre === filmchoisi ? prev + 1 : prev));
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
