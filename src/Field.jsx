import { useGame } from "./GameContext";

export default function Field() {
  const { score, NUM_HOLES } = useGame();
  const newField = Array(NUM_HOLES).fill(false);
  // Pick a random index for the mole
  let mole = Math.floor(Math.random() * NUM_HOLES);
  newField[mole] = true;

  return (
    <>
      <div className="box">Score: {score}</div>
      <ul className="field">
        {newField.map((hasMole, i) => (
          <Hole key={i} hasMole={hasMole} />
        ))}
      </ul>
    </>
  );
}
function Hole({ hasMole }) {
  const { whackMole } = useGame();
  if (hasMole) return <li onClick={whackMole} className="hole mole"></li>;
  return <li className="hole"></li>;
}

// export default function Field() {
//   const NUM_HOLES = 9;
//   const newField = Array(NUM_HOLES).fill(false);

//   // Pick a random index for the mole
//   let mole = Math.floor(Math.random() * NUM_HOLES);
//   newField[mole] = true;

//   return (
//     <ul className="field">
//       {newField.map((hasMole, i) => (
//         <li key={i} className={`hole${hasMole ? " mole" : ""}`}></li>
//       ))}
//     </ul>
//   );
// }
