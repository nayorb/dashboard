import { GameBoard } from "../TileGame.types";
import { moveBoard } from "./common";

const DIRECTION = "E";

export const moveRight = (board: GameBoard): GameBoard => {
  return moveBoard(board, DIRECTION);
};
