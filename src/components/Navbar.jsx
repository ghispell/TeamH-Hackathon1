import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex flex-start">
      <img
        id="volume"
        src="../../public/icon_volume.png"
        className="m-3"
        alt="logo"
        width={40}
      />
    </header>
  );
}

export default Navbar;
