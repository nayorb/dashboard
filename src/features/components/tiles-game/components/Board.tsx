import TileContainer from "./TileContainer";
import { GameBoard } from "../TileGame.types";
import { BOARD_PADDING, BOARD_SIZE, TILE_MARGIN } from "../useBoard";

export interface BoardProps {
  board: GameBoard;
}

const Board = ({ board }: BoardProps) => {
  const allTiles = Array.from({ length: 16 }, (_, index) => index);

  return (
    <div
      className="grid grid-cols-4 grid-rows-4 bg-gray-500 rounded-2xl relative"
      style={{
        width: BOARD_SIZE,
        height: BOARD_SIZE,
        padding: BOARD_PADDING,
        gap: TILE_MARGIN,
      }}
    >
      {allTiles.map((tile) => (
        <div className="w-full h-full bg-white rounded-2xl" />
      ))}
      {board.tiles.map((tile) => (
        <TileContainer tile={tile} key={tile.id} />
      ))}
    </div>
  );
};

export default Board;
