import { Player, Controls } from "@lottiefiles/react-lottie-player";
import santa from "../assets/santa.json";
import drapeau from "../assets/drapeau.json";
import { motion } from "framer-motion";

function Santa({ response }) {
  return (
    <>
      <motion.div
        initial={{ transform: "translateX(-110vw) rotate(20deg)" }}
        animate={{ transform: "translateX(110vw) rotate(20deg)" }}
        transition={{ duration: 10 }}
        className="santa"
      >
        <Player
          autoplay
          loop
          src={santa}
          style={{ height: "500px", width: "500px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </motion.div>
      <motion.div
        initial={{ transform: "translateX(-135vw)" }}
        animate={{ transform: "translateX(120vw)" }}
        transition={{ duration: 13.3 }}
        className="santa flag"
      >
        <Player
          autoplay
          loop
          src={drapeau}
          /* style={{ height: "500px", width: "500px" }} */
        >
          <p className="synopsis">{response.synopsis}</p>
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </motion.div>
    </>
  );
}

export default Santa;
