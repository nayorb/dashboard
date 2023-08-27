import { useCallback, useEffect, useState } from "react";
import { GameBoard } from "./TileGame.types";
import { moveUp } from "./board-movements/up";
import { moveDown } from "./board-movements/down";
import { moveLeft } from "./board-movements/left";
import { moveRight } from "./board-movements/right";
import { getNewTile } from "./board-movements/common";

export const TILE_SIZE = 128;
export const BOARD_PADDING = 4;
export const TILE_MARGIN = 4;
export const BOARD_SIZE = TILE_SIZE * 4 + BOARD_PADDING * 2 + TILE_MARGIN * 3;

const useBoard = () => {
  const [board, setBoard] = useState<GameBoard>({
    tiles: [getNewTile()],
  });

  const left = useCallback(() => {
    console.log("left");
    setBoard((prevBoard) => moveLeft(prevBoard));
  }, []);

  const right = useCallback(() => {
    console.log("right");
    setBoard((prevBoard) => moveRight(prevBoard));
  }, []);

  const up = useCallback(() => {
    console.log("up");
    setBoard((prevBoard) => moveUp(prevBoard));
  }, []);

  const down = useCallback(() => {
    console.log("down");
    setBoard((prevBoard) => moveDown(prevBoard));
  }, []);

  // attach the functions to the keys
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        left();
      } else if (e.key === "ArrowRight") {
        right();
      } else if (e.key === "ArrowUp") {
        up();
      } else if (e.key === "ArrowDown") {
        down();
      }
    });
  }, [left, right, up, down]);

  return {
    board,
    left,
    right,
    up,
    down,
  };
};

export default useBoard;
