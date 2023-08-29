import { GameTile } from "../TileGame.types";

export type GameTileToMove = Pick<GameTile, "id" | "value">;

export const moveRow = (row: (GameTileToMove | null)[], initialIndex?: number): (GameTileToMove | null)[] => {
  const index = initialIndex ?? row.length - 1;
  let nextIndex = index - 1;

  if (index === 0) {
    return row;
  }

  const newRow: (GameTileToMove | null)[] = [...row];

  const currentTile = newRow[index];

  let nextTileIndex: number | null = null;
  let nextTile: GameTileToMove | null = null;

  for (let i = index - 1; i >= 0; i--) {
    nextTile = newRow[i];
    if (nextTile !== null) {
      nextTileIndex = i;
      break;
    }
  }

  let hasNextTile = false;
  if (nextTile !== null && nextTileIndex !== null) {
    nextTileIndex = nextTileIndex!;
    nextTile = nextTile!;
    hasNextTile = true;
  } else {
    return newRow;
  }

  if (currentTile === null && hasNextTile) {
    newRow[index] = nextTile;
    newRow[nextTileIndex] = null;
    nextIndex = index;
  }

  if (currentTile !== null && hasNextTile) {
    if (currentTile.value === nextTile.value) {
      newRow[index] = { value: nextTile.value + 1, id: nextTile.id };
      newRow[nextTileIndex] = null;
    }
  }

  return moveRow(newRow, nextIndex);
};
