import { GameBoard, GameTile } from "../TileGame.types";
import { moveRow } from "./moveRow";

export type DIRECTION = "N" | "S" | "E" | "W";

export const POSITION_0 = 0;
export const POSITION_1 = 1;
export const POSITION_2 = 2;
export const POSITION_3 = 3;
export const POSITION_4 = 4;
export const POSITION_5 = 5;
export const POSITION_6 = 6;
export const POSITION_7 = 7;
export const POSITION_8 = 8;
export const POSITION_9 = 9;
export const POSITION_10 = 10;
export const POSITION_11 = 11;
export const POSITION_12 = 12;
export const POSITION_13 = 13;
export const POSITION_14 = 14;
export const POSITION_15 = 15;

export const DIRECTION_POSITIONS: Record<DIRECTION, number[][]> = {
  S: [
    [POSITION_0, POSITION_4, POSITION_8, POSITION_12],
    [POSITION_1, POSITION_5, POSITION_9, POSITION_13],
    [POSITION_2, POSITION_6, POSITION_10, POSITION_14],
    [POSITION_3, POSITION_7, POSITION_11, POSITION_15],
  ],
  N: [
    [POSITION_12, POSITION_8, POSITION_4, POSITION_0],
    [POSITION_13, POSITION_9, POSITION_5, POSITION_1],
    [POSITION_14, POSITION_10, POSITION_6, POSITION_2],
    [POSITION_15, POSITION_11, POSITION_7, POSITION_3],
  ],
  E: [
    [POSITION_0, POSITION_1, POSITION_2, POSITION_3],
    [POSITION_4, POSITION_5, POSITION_6, POSITION_7],
    [POSITION_8, POSITION_9, POSITION_10, POSITION_11],
    [POSITION_12, POSITION_13, POSITION_14, POSITION_15],
  ],
  W: [
    [POSITION_3, POSITION_2, POSITION_1, POSITION_0],
    [POSITION_7, POSITION_6, POSITION_5, POSITION_4],
    [POSITION_11, POSITION_10, POSITION_9, POSITION_8],
    [POSITION_15, POSITION_14, POSITION_13, POSITION_12],
  ],
};

export const addNewTile = (board: GameBoard): GameBoard => {
  const newBoard = { ...board };
  const allPositions = Array.from(Array(16).keys());
  const emptyPositions = allPositions.filter((position) => {
    const tile = newBoard.tiles.find((t) => t.position === position);
    return !tile || tile.value === 0;
  });
  const randomPosition = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
  const newTile = getNewTile();
  newTile.position = randomPosition;
  newBoard.tiles.push(newTile);
  return newBoard;
};

export const getRandomId = () => Math.random().toString(36).substr(2, 9);
export const getRandomValue = () => (Math.random() > 0.5 ? 1 : 2);
export const getRandomPosition = () => Math.floor(Math.random() * 16);

export const getNewTile = () => ({
  id: getRandomId(),
  value: getRandomValue(),
  position: getRandomPosition(),
});

export const moveBoard = (board: GameBoard, direction: "N" | "S" | "E" | "W") => {
  let newBoard = { ...board };
  const newTiles: GameTile[] = [];

  DIRECTION_POSITIONS[direction].forEach((row) => {
    const positions = row;
    const tiles = positions.map((position) => {
      const tile = newBoard.tiles.find((t) => t.position === position);
      return tile ?? null;
    });
    const movedTiles = moveRow(tiles);
    movedTiles.forEach((moveTile, i) => {
      if (moveTile) {
        const tile: GameTile = { ...moveTile, position: 0 };
        tile.position = positions[i];
        newTiles.push(tile);
      }
    });
  });

  newBoard.tiles = newTiles;

  newBoard = addNewTile(newBoard);

  return newBoard;
};
