import { useGame } from "./GameContext";

export default function Field() {
  // const NUM_HOLES = 9;
  // const newField = Array(NUM_HOLES).fill(false);
  const { newField, NUM_HOLES, moveMole } = useGame();

  // Pick a random index for the mole
  let mole = Math.floor(Math.random() * NUM_HOLES);
  newField[mole] = true;

  return (
    
  );
}
