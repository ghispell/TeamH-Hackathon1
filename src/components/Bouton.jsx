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
      setEstLeBonFilm(() => "bg-green-500");
    } else {
      setEstLeBonFilm(() => "bg-red-500");
    }
  };
  return (
    <>
      <button
        disabled={hasClicked}
        className={`border-2 border-black p-2 ${estLeBonFilm} ${
          hasClicked && titre === filmchoisi && "bg-green-400"
        }`}
        onClick={() => {
          handleClick();
          setScore((prev) => (titre === filmchoisi ? prev + timer : prev));
          setTimer(() => 2);
          setHasClicked(() => true);
        }}
      >
        {titre}
      </button>
    </>
  );
}

export default Bouton;
