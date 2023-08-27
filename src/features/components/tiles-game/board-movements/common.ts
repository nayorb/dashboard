import { GameBoard, GameTile } from "../TileGame.types";

export const mergeTiles = (board: GameBoard): GameBoard => {
  const newBoard = { ...board };
  const tiles = newBoard.tiles.map((tile) => {
    if (tile.position % 4 !== 0) {
      const leftTile = newBoard.tiles.find((t) => t.position === tile.position - 1);
      if (leftTile && leftTile.value === tile.value) {
        leftTile.value *= 2;
        tile.value = 0;
      }
    }
    return tile;
  });
  newBoard.tiles = tiles;
  return newBoard;
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

export const moveRow = (row: number[]) => {
  // start from the end
  // if the current tile is empty, move to the next one
  // if the current tile is not empty, check the next one
  // if the next one is empty, move the current tile to the next one
  // if the next one is not empty, check if they are equal
  // if they are equal, merge them
  // if they are not equal, move to the next one
  const newRow = [...row];
  for (let i = 3; i >= 0; i--) {
    if (newRow[i] === 0) {
      continue;
    }
    for (let j = i + 1; j < 4; j++) {
      if (newRow[j] === 0) {
        newRow[j] = newRow[i];
        newRow[i] = 0;
        break;
      } else if (newRow[j] === newRow[i]) {
        newRow[j] += 1;
        newRow[i] = 0;
        break;
      }
    }
  }
  return newRow;
};

export const getRow = (board: GameBoard, row: number, direction: "N" | "S" | "E" | "W") => {
  const positions = Array.from(Array(4).keys()).map((i) => {
    switch (direction) {
      case "N":
        return row + i * 4;
      case "S":
        return row + (3 - i) * 4;
      case "E":
        return row * 4 + i;
      case "W":
        return row * 4 + (3 - i);
    }
  });
  return positions.map((position) => {
    const tile = board.tiles.find((t) => t.position === position);
    return tile ? tile.value : 0;
  });
};

export const getTilePosition = (row: number, rowPosition: number, direction: "N" | "S" | "E" | "W") => {
  switch (direction) {
    case "N":
      return row + rowPosition * 4;
    case "S":
      return row + (3 - rowPosition) * 4;
    case "E":
      return row * 4 + rowPosition;
    case "W":
      return row * 4 + (3 - rowPosition);
  }
};

export const moveBoard = (board: GameBoard, direction: "N" | "S" | "E" | "W") => {
  let newBoard = { ...board };
  const tiles: GameTile[] = [];

  for (let i = 0; i < 4; i++) {
    const row = getRow(newBoard, i, direction);
    const newRow = moveRow(row);
    newRow.forEach((value, index) => {
      if (value > 0) {
        const tile = {
          id: getRandomId(),
          value,
          position: getTilePosition(i, index, direction),
        };
        tile.value = value;
        tile.position = getTilePosition(i, index, direction);
        tiles.push(tile);
      }
    });
  }

  newBoard.tiles = tiles;
  newBoard = addNewTile(newBoard);
  return newBoard;
};
