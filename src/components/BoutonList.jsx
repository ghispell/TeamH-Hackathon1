import filmsNoel from "../data/data.json";
import Bouton from "./Bouton";
function BoutonList() {
  return (
    <div className="btn-list flex">
      {filmsNoel.slice(0, 4).map((film) => (
        <Bouton key={film.id} film={film} />
      ))}
    </div>
  );
}

export default BoutonList;
