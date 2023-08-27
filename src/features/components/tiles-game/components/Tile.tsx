export const TILE_VALUES_MAP = {
  0: 0,
  1: 2,
  2: 4,
  3: 8,
  4: 16,
  5: 32,
  6: 64,
  7: 128,
  8: 256,
  9: 512,
  10: 1024,
  11: 2048,
};

export interface TileProps {
  value: number;
}

export const TILE_COLORS_MAP = {
  0: "bg-gray-400",
  2: "bg-amber-50",
  4: "bg-amber-100",
  8: "bg-orange-300",
  16: "bg-orange-400",
  32: "bg-red-400",
  64: "bg-red-500",
  128: "bg-yellow-200",
  256: "bg-yellow-300",
  512: "bg-yellow-400",
  1024: "bg-yellow-500",
  2048: "bg-yellow-600",
};

const getTileColor = (value: number) => {
  const number = TILE_VALUES_MAP[value as keyof typeof TILE_VALUES_MAP];
  return TILE_COLORS_MAP[number as keyof typeof TILE_COLORS_MAP];
};

const Tile = ({ value }: TileProps) => {
  return (
    <div
      className={`flex justify-center items-center w-full h-full rounded-2xl ${getTileColor(
        value,
      )} font-bold text-4xl text-gray-800`}
    >
      {value ? TILE_VALUES_MAP[value as keyof typeof TILE_VALUES_MAP] : ""}
    </div>
  );
};

export default Tile;
