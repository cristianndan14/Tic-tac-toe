import { WINNER_COMBOS } from "../constansts";

export const checkWinnerFrom = (boardtoCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para checkear si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardtoCheck[a] &&
      boardtoCheck[a] === boardtoCheck[b] &&
      boardtoCheck[a] === boardtoCheck[c]
    ) {
      return boardtoCheck[a];
    }
  }
  // si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay más espacios vacíos en el tablero
  return newBoard.every((square) => square != null);
};
