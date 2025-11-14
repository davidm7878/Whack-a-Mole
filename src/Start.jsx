import { useGame } from "./GameContext";

export default function Start() {
  const { start } = useGame();
  return (
    <>
      <section className="start">
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points</p>
        <p>How many can you get?</p>
        <button className="button" onClick={start}>
          Play
        </button>
        <h2>High Scores</h2>
      </section>
    </>
  );
}
