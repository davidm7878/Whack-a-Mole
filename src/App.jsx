import { useGame } from "./GameContext";
import Field from "./Field";
import Start from "./Start";

export default function App() {
  const { playing } = useGame();

  return (
    <>
      <h1>Whack-a-Mole</h1>
      {playing ? (
        <>
          <Field />
        </>
      ) : (
        <Start />
      )}
    </>
  );
}
