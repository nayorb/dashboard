import { useCallback, useEffect, useState } from "react";
import { GameBoard } from "./TileGame.types";
import { getNewTile, moveBoard } from "./board-movements/common";

export const TILE_SIZE = 128;
export const BOARD_PADDING = 4;
export const TILE_MARGIN = 4;
export const BOARD_SIZE = TILE_SIZE * 4 + BOARD_PADDING * 2 + TILE_MARGIN * 3;

const useBoard = () => {
  const [listener, setListener] = useState<((e: KeyboardEvent) => void) | null>(null);
  const [board, setBoard] = useState<GameBoard>({
    tiles: [getNewTile()],
  });

  const left = useCallback(() => {
    setBoard((prevBoard: GameBoard) => moveBoard(prevBoard, "W"));
  }, []);

  const right = useCallback(() => {
    setBoard((prevBoard: GameBoard) => moveBoard(prevBoard, "E"));
  }, []);

  const up = useCallback(() => {
    setBoard((prevBoard: GameBoard) => moveBoard(prevBoard, "N"));
  }, []);

  const down = useCallback(() => {
    setBoard((prevBoard: GameBoard) => moveBoard(prevBoard, "S"));
  }, []);

  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (!e) return;
      if (e.key === "ArrowLeft") {
        left();
      } else if (e.key === "ArrowRight") {
        right();
      } else if (e.key === "ArrowUp") {
        up();
      } else if (e.key === "ArrowDown") {
        down();
      }
    },
    [left, right, up, down],
  );

  // attach the functions to the keys
  useEffect(() => {
    if (listener === null) {
      setListener(keyDownHandler);
      window.addEventListener("keydown", keyDownHandler);
      console.log("adding listener");
    }

    return () => {
      if (listener !== null) {
        window.removeEventListener("keydown", listener);
      }
    };
  }, [left, right, up, down]);

  return {
    board,
    left,
    right,
    up,
    down,
    keyDownHandler,
  };
};

export default useBoard;
