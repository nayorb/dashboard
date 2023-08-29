import Board from "./components/Board";
import useBoard from "./useBoard";

export interface TilesGameProps {}

const TilesGame = ({}: TilesGameProps) => {
  const { board, left, right, up, down } = useBoard();

  return (
    <div>
      <div>
        {board && <Board board={board} />}
        <button onClick={left}>Left</button>
        <button onClick={right}>Right</button>
        <button onClick={up}>Up</button>
        <button onClick={down}>Down</button>
      </div>
    </div>
  );
};

export default TilesGame;
