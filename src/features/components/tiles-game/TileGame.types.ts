export interface GameTile {
  id: string;
  value: number;
  position: number;
}

export interface GameBoard {
  tiles: GameTile[];
}
