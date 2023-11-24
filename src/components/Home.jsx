import "../Home.scss";
import { Link } from "react-router-dom";
import playButton from "../assets/Jouez2.png";
import { motion, useIsPresent } from "framer-motion";

export default function Home() {
  const isPresent = useIsPresent();
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
          {/* <img src={playButton} alt="bouton play" /> */}
        </Link>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </div>
    </>
  );
}
