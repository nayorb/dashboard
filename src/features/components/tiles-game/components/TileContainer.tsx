import Tile from "./Tile";
import { GameTile } from "../TileGame.types";
import { TILE_SIZE, TILE_MARGIN, BOARD_PADDING } from "../useBoard";

export interface TileContainerProps {
  tile: GameTile;
}

const getTileCoords = (position: number) => {
  const left =
    position % 4 === 0 ? BOARD_PADDING : (position % 4) * TILE_SIZE + TILE_MARGIN * (position % 4) + BOARD_PADDING;
  const top =
    Math.floor(position / 4) === 0
      ? BOARD_PADDING
      : Math.floor(position / 4) * TILE_SIZE + TILE_MARGIN * Math.floor(position / 4) + BOARD_PADDING;

  return {
    left,
    top,
  };
};

const TileContainer = ({ tile }: TileContainerProps) => {
  const { top, left } = getTileCoords(tile.position);

  return (
    <div
      className={`w-full h-full bg-white rounded-2xl absolute`}
      style={{
        top: 0,
        left: 0,
        width: TILE_SIZE,
        height: TILE_SIZE,
        transform: `translate(${left}px, ${top}px)`,
        transition: "all 0.2s ease-in-out",
      }}
    >
      <Tile value={tile.value} />
    </div>
  );
};

export default TileContainer;
