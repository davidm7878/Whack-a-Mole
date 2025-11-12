export default function Start() {
  return (
    <section className="start">
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points</p>
      <p>How many can you get?</p>
      <button className="button" onClick={playGame}>
        Play
      </button>
      <h2>High Scores</h2>
    </section>
  );
}
