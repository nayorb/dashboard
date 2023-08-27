import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 800;
const ELLIPSE_WIDTH = 50;
const ELLIPSE_HEIGHT = 50;
const STEP = 10;

const normalizeDiagonalVelocity = ({ x, y }: { x: number; y: number }) => {
  const diagonalVelocity = Math.sqrt(x ** 2 + y ** 2);

  if (diagonalVelocity > STEP) {
    const ratio = STEP / diagonalVelocity;
    return { x: x * ratio, y: y * ratio };
  }

  return { x, y };
};

const moveEllipse = (p5: p5Types, position: { x: number; y: number }) => {
  let x = position.x;
  let y = position.y;

  const velocity = {
    x: 0,
    y: 0,
  };

  if (p5.keyIsDown(p5.LEFT_ARROW)) {
    velocity.x -= STEP;
  }

  if (p5.keyIsDown(p5.RIGHT_ARROW)) {
    velocity.x += STEP;
  }

  if (p5.keyIsDown(p5.UP_ARROW)) {
    velocity.y -= STEP;
  }

  if (p5.keyIsDown(p5.DOWN_ARROW)) {
    velocity.y += STEP;
  }

  const normalizedVelocity = normalizeDiagonalVelocity(velocity);

  const newPosition = {
    x: x + normalizedVelocity.x,
    y: y + normalizedVelocity.y,
  };

  return newPosition;
};

const TestP5Page = () => {
  const [position, setPosition] = React.useState<{ x: number; y: number }>({
    x: CANVAS_WIDTH / 2 - ELLIPSE_WIDTH / 2,
    y: CANVAS_HEIGHT / 2 - ELLIPSE_HEIGHT / 2,
  });

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);

    if (p5.mouseIsPressed) {
      p5.fill(255);
    } else {
      p5.fill(120);
    }

    const newPosition = moveEllipse(p5, position);
    setPosition(newPosition);
    p5.ellipse(newPosition.x, newPosition.y, ELLIPSE_WIDTH, ELLIPSE_HEIGHT);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default TestP5Page;
