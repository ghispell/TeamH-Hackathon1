import { Link } from "react-router-dom";
import volume from "../assets/icon_volume.png";

function Navbar() {
  return (
    <header className="flex flex-start">
      <img
        id="volume"
        src={volume}
        className="m-3"
        alt="logo"
        width={40}
      />
    </header>
  );
}

export default Navbar;
