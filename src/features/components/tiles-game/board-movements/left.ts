import { GameBoard } from "../TileGame.types";
import { moveBoard } from "./common";

const DIRECTION = "W";

export const moveLeft = (board: GameBoard): GameBoard => {
  return moveBoard(board, DIRECTION);
};
