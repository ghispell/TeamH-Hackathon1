function Bouton({ film }) {
  return (
    <>
      <button className="text-white border-2 bg-[#2e6365] p-2 rounded-xl">
        {film.titre}
      </button>
    </>
  );
}

export default Bouton;
