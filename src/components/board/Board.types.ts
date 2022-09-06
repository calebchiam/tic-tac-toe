export type BoardType = Record<number, Record<number, string>>;

export interface BoardProps {
  gameActive: boolean;
  board: BoardType;
  setBoard: any;
  playerTurn: number;
  changePlayerTurn: VoidFunction;
}

export const turnToSymbol = {
  0: "x",
  1: "o",
};

export const symbolToTurn = {
  x: "0",
  o: "1",
};
