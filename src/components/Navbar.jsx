import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import volumeOn from "../assets/volume-on.png";
import volumeOff from "../assets/volume-off.png";
import song from "../assets/ChristmasSong2.mp3";
import logo from "../assets/logo.png";

function Navbar() {
  const [playing, setPlaying] = useState(false);
  let music = new Audio(song);
  music.volume = 0.05;
  const audioRef = useRef(music);

  function play() {
    setPlaying(true);
    audioRef.current.play();
    audioRef.current.loop;
  }

  function pause() {
    setPlaying(false);
    audioRef.current.pause();
  }
  return (
    <header className="flex justify-between">
      <Link to="/">
        <img src={logo} className="h-32" />
      </Link>
      <img
        className={`volume m-3 ${
          playing ? "sound-up" : "sound-down"
        } h-14 w-14`}
        src={`${playing ? volumeOn : volumeOff}`}
        alt="logo"
        width={40}
        onClick={playing ? pause : play}
      />
    </header>
  );
}

export default Navbar;
