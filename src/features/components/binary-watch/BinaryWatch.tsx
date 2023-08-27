import React, { useEffect } from "react";
import BinaryWatchRow from "./sub-components/BinaryWatchRow";

export type BinaryNumber = 1 | 0;

export interface BinaryWatchState {
  hours1: number;
  hours2: number;
  minutes1: number;
  minutes2: number;
  seconds1: number;
  seconds2: number;
}

const initialState: BinaryWatchState = {
  hours1: 0,
  hours2: 0,
  minutes1: 0,
  minutes2: 0,
  seconds1: 0,
  seconds2: 0,
};

const toBinary = (num: number, arraySize: number = 4): BinaryNumber[] => {
  const binaryString = num.toString(2);
  const binaryArray = binaryString.split("").map((char) => parseInt(char));

  while (binaryArray.length < arraySize) {
    binaryArray.unshift(0);
  }

  return binaryArray.reverse() as BinaryNumber[];
};

const HOUR_COLOR = "#2E282A";
const MINUTE_COLOR = "#3C896D";
const SECOND_COLOR = "#CA5310";

const BinaryWatch = () => {
  const [state, setState] = React.useState<BinaryWatchState>(initialState);
  const [intervalId, setIntervalId] = React.useState<NodeJS.Timer | null>(null);
  const [showNumbers, setShowNumbers] = React.useState<boolean>(false);

  useEffect(() => {
    setIntervalId(
      setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        setState({
          hours1: Math.floor(hours / 10),
          hours2: hours % 10,
          minutes1: Math.floor(minutes / 10),
          minutes2: minutes % 10,
          seconds1: Math.floor(seconds / 10),
          seconds2: seconds % 10,
        });
      }, 1000),
    );

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "#F2F2F2",
      }}
    >
      <BinaryWatchRow
        numbers={toBinary(state.hours1, 2)}
        color={HOUR_COLOR}
        fullNumber={showNumbers ? state.hours1 : undefined}
      />
      <BinaryWatchRow
        numbers={toBinary(state.hours2, 4)}
        color={HOUR_COLOR}
        fullNumber={showNumbers ? state.hours2 : undefined}
      />
      <div style={{ marginTop: 20 }} />
      <BinaryWatchRow
        numbers={toBinary(state.minutes1, 3)}
        color={MINUTE_COLOR}
        fullNumber={showNumbers ? state.minutes1 : undefined}
      />
      <BinaryWatchRow
        numbers={toBinary(state.minutes2, 4)}
        color={MINUTE_COLOR}
        fullNumber={showNumbers ? state.minutes2 : undefined}
      />
      <div style={{ marginTop: 20 }} />
      <BinaryWatchRow
        numbers={toBinary(state.seconds1, 3)}
        color={SECOND_COLOR}
        fullNumber={showNumbers ? state.seconds1 : undefined}
      />
      <BinaryWatchRow
        numbers={toBinary(state.seconds2, 4)}
        color={SECOND_COLOR}
        fullNumber={showNumbers ? state.seconds2 : undefined}
      />

      <div style={{ marginTop: 20 }}>
        <label
          className="switch"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 32,
            color: HOUR_COLOR,
          }}
        >
          {showNumbers ? "Hide Numbers" : "Show Numbers"}
          <input
            type="checkbox"
            checked={showNumbers}
            onChange={() => setShowNumbers(!showNumbers)}
            style={{
              margin: 5,
              width: 50,
              height: 50,
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default BinaryWatch;
