import { GameBoard } from "../TileGame.types";
import { moveBoard } from "./common";

const DIRECTION = "S";

export const moveUp = (board: GameBoard): GameBoard => {
  return moveBoard(board, DIRECTION);
};
