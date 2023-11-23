import Bouton from "./Bouton";
import BoutonList from "./BoutonList";
import "../quiz-frame.scss";

export default function QuizFrame() {
  return (
    <div className="quiz-frame flex justify-center items-center">
      <div className="quiz-container">
        <BoutonList />
      </div>
    </div>
  );
}
