import { useState, useEffect } from "react";
import filmsNoel from "../Data/data.json";

function App() {
  const [timer, setTimer] = useState(30);
  console.log(filmsNoel);

  /*  useEffect(() => {
    const chrono = setTimeout(() => {
      if (timer > 0) {
        setTimer((prev) => {
          prev = prev - 1;
        });
      } else {
        // ici il faudra ajouter ce qui se passe quand on arrive à 0 seconde sur le chrono, soit on passe direct à la prochaine question, qoit peut etre qu'on laisse le mec cliquer sur next ¯\_(ツ)_/¯
      }
    }, 1000);

    return () => clearTimeout(chrono);
  }, [timer]); */
  return (
    <div>
      <p>Template SACOD</p>
    </div>
  );
}

export default App;
