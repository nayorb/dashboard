import { GameBoard } from "../TileGame.types";
import { moveBoard } from "./common";

const DIRECTION = "N";

export const moveDown = (board: GameBoard): GameBoard => {
  return moveBoard(board, DIRECTION);
};
