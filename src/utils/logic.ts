import {
  BoardType,
  symbolToTurn,
  turnToSymbol,
} from "../components/board/Board.types";

const constructCounter = (arr: string[]) => {
  const counter = arr.reduce((ctr, cellValue) => {
    if (ctr[cellValue]) {
      ctr[cellValue] += 1;
    } else {
      ctr[cellValue] = 1;
    }
    return ctr;
  }, {});
  return counter;
};

const checkCounterForWinner = (counter) => {
  if (Object.keys(counter).length === 1) {
    const key = Object.keys(counter)[0];
    if (["x", "o"].includes(key)) {
      return { finished: true, winner: symbolToTurn[key] };
    }
  }
  return null;
};

export interface ConclusionState {
  finished: boolean;
  winner: string | null;
}

export const isGameFinished = (board: BoardType): ConclusionState => {
  // check row wins
  for (let i = 0; i < 3; i++) {
    let row = [board[i][0], board[i][1], board[i][2]];
    let counter = constructCounter(row);
    const conclusion = checkCounterForWinner(counter);
    if (conclusion) {
      return conclusion;
    }
  }

  // check column wins
  for (let i = 0; i < 3; i++) {
    let column = [board[0][i], board[1][i], board[2][i]];
    let counter = constructCounter(column);
    let conclusion = checkCounterForWinner(counter);
    if (conclusion) {
      return conclusion;
    }
  }

  // check diagonal wins
  let diagonal = [board[0][0], board[1][1], board[2][2]];
  let counter = constructCounter(diagonal);
  let conclusion = checkCounterForWinner(counter);
  if (conclusion) {
    return conclusion;
  }

  diagonal = [board[0][2], board[1][1], board[2][0]];
  counter = constructCounter(diagonal);
  conclusion = checkCounterForWinner(counter);
  if (conclusion) {
    return conclusion;
  }

  // incomplete
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      if (board[rowIdx][colIdx] === "") {
        return { finished: false, winner: null };
      }
    }
  }

  // draw state
  return { finished: true, winner: "draw" };
};
