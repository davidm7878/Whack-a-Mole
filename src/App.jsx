import { useState } from "react";
import { useGame } from "./GameContext";
import { GameProvider } from "./GameContext";

export default function App() {
  const [started, setStarted] = useState(false);

  const playGame = function () {
    setStarted(true);
  };
  return (
    <div>
      {!started ? (
        <section className="start">
          <h1>Whack-a-Mole</h1>
          <p>Welcome to Whack a Mole!</p>
          <p>Whack a mole to earn points</p>
          <p>How many can you get?</p>
          <button className="button" onClick={playGame}>
            Play
          </button>
          <h2>High Scores</h2>
        </section>
      ) : (
        <div className="fieldPage">
          <h1>Whack-a-Mole</h1>
          <button onClick={() => setStarted(false)}>Restart</button>
        </div>
      )}
    </div>
  );
}
