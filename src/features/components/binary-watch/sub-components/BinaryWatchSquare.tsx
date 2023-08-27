import React from "react";

export interface BinaryWatchSquareProps {
  number: 1 | 0;
  color?: string;
  innerText?: string;
}

const isOdd = (num: number) => num % 2 === 1;

const SIZE = 60;

const BinaryWatchSquare = ({ number, color = "#000", innerText }: BinaryWatchSquareProps) => {
  let outerSize = parseInt((SIZE * 1.1).toFixed(0));

  if (isOdd(outerSize)) {
    outerSize += 1;
  }

  return (
    <div
      style={{
        width: outerSize,
        height: outerSize,
        border: innerText ? "" : `1px solid ${color}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
      }}
    >
      {number === 1 && (
        <div
          style={{
            width: SIZE,
            height: SIZE,
            backgroundColor: color,
          }}
        />
      )}
      {innerText && (
        <div
          style={{
            fontSize: SIZE,
            color: color,
          }}
        >
          {innerText}
        </div>
      )}
    </div>
  );
};

export default BinaryWatchSquare;
