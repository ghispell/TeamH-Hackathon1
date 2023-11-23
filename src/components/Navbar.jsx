import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import volume from "../assets/icon_volume.png";
import song from "../assets/ChristmasSong2.mp3";

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
    <header className="flex flex-start">
      <img
        className={`volume m-3 ${playing ? "sound-up" : "sound-down"}`}
        src={volume}
        alt="logo"
        width={40}
        onClick={playing ? pause : play}
      />
    </header>
  );
}

export default Navbar;
