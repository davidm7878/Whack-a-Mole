import { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [mole, setMole] = useState();

  const NUM_HOLES = 9;
  const newField = Array(NUM_HOLES).fill(false);

  function moveMole() {
    setMole(
      newField.map((hasMole, i) => (
        <li key={i} className={`hole${hasMole ? " mole" : ""}`}></li>
      ))
    );
  }

  const value = { mole, setMole, moveMole, NUM_HOLES, newField };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === null) {
    throw Error("useGame must be used within GameProvider");
  }
  return context;
}
