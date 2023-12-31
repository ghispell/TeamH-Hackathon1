import "../Home.scss";
import { Link } from "react-router-dom";
import playButton from "../assets/Jouez2.png";

export default function Home() {
  return (
    <>
      <div className="header flex flex-col justify-center items-center">
        <h1>BlurBusters</h1>
        <h2>Can You Guess the Movie ?</h2>
      </div>
      <div className="house-container">
        <Link
          to="/jeu"
          className="play-link button-frame flex justify-center items-center transition"
        >
          <img src={playButton} alt="Play" className="play" />
        </Link>
      </div>
    </>
  );
}
