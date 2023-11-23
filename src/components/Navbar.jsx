import { Link } from "react-router-dom";
import { useState } from "react";
import volume from "../assets/icon_volume.png";

function Navbar() {
  return (
    <header className="flex flex-start">
      <img
        className={`volume m-3 ${playing ? "sound-up" : "sound-down"}`}
        src={volume}
        alt="logo"
        width={40}
      />
    </header>
  );
}

export default Navbar;
