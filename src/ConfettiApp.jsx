import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";

export default function ConfettiApp() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const detectSize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  return <Confetti numberOfPieces={150} width={width} height={height} />;
}
