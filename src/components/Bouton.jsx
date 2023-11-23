function Bouton({ film }) {
  return (
    <>
      <button className="response-btn transition">{film.titre}</button>
    </>
  );
}

export default Bouton;
