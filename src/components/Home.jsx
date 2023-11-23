import "../Home.scss";
import house from "../assets/house.png";
import button from "../assets/icon_play_button_.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="header flex flex-col justify-center items-center">
        <h1>BlurBusters</h1>
        <h2>Can You Guess the Movie ?</h2>
      </div>
      <div className="house-container">
        <img src={house} className="house-frame"></img>
        <Link to="/jeu" className="button-frame">
          {" "}
          <img src={button} />{" "}
        </Link>
      </div>
    </>
  );
}
