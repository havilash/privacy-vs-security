
import { randomUUID } from "crypto";
import React, { useRef, useEffect, useState } from "react";

const StartBackground = () => {
  // Constants for customization
  const NUM_SQUARES = 100;
  const SIZE_SCALE = 500; // Randomness factor for size
  const SIZE_RANDOMNESS = 200; // Randomness factor for size
  const MIN_COLOR_INTENSITY = 50; // Lightest color
  const MAX_COLOR_INTENSITY = 80; // Darkest color
  const COLOR_RANDOMNESS = 20; // Randomness factor for color

  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Update container size
  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setContainerSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  const generateSquares = () => {
    const squares = [];
    const center = { x: containerSize.width / 2, y: containerSize.height / 2 };
    const max_radius = Math.sqrt(center.x ** 2 + center.y ** 2)

    for (let i = 0; i < NUM_SQUARES; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const scale = i / NUM_SQUARES
      const radius = scale * max_radius;

      const randomX = Math.cos(angle) * radius + center.x;
      const randomY = Math.sin(angle) * radius + center.y;

      console.log(center, max_radius, angle, radius, randomX, randomY)
      // Adjust size and color based on distance
      const size = (1 - scale) * SIZE_SCALE + Math.random() * SIZE_RANDOMNESS

      const colorIntensity = scale * (MAX_COLOR_INTENSITY - MIN_COLOR_INTENSITY)
      //const color = `rgb(${colorIntensity}, ${colorIntensity}, ${colorIntensity})`;

      const color = `hsl(174, 100%, ${Math.round(colorIntensity)}%)`;
      squares.push(
        <div
          key={i}
          style={{
            position: "absolute",
            top: randomY - size / 2,
            left: randomX - size / 2,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            border: "solid 8px var(--body-color)"
          }}
        ></div>
      );
    }

    return squares;
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {containerSize.width > 0 && containerSize.height > 0
        ? generateSquares()
        : null}
    </div>
  );
};

export default StartBackground;

