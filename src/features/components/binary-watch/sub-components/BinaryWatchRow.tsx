import React from "react";
import BinaryWatchSquare from "./BinaryWatchSquare";

export interface BinaryWatchRowProps {
  numbers: (1 | 0)[];
  color?: string;
  fullNumber?: number;
}

const BinaryWatchRow = ({ numbers, color = "#000", fullNumber }: BinaryWatchRowProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse",
      }}
    >
      {fullNumber !== undefined && <BinaryWatchSquare innerText={fullNumber.toString()} number={0} color={color} />}
      {numbers.map((number, index) => {
        return <BinaryWatchSquare number={number} key={index} color={color} />;
      })}
    </div>
  );
};

export default BinaryWatchRow;
