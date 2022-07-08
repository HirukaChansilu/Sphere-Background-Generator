import React, { useState, useEffect, useRef } from "react";
import Sphere from "./Sphere";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateHues(contentHeight) {
  const finalHues = [];
  const hue = getRandomInt(0, 360);
  console.log("Hue:", hue);
  for (
    let i = 0;
    i <
    getRandomInt(
      Math.round((5 / 1000) * contentHeight),
      Math.round((10 / 1000) * contentHeight)
    );
    i++
  ) {
    finalHues.push(
      getRandomInt(0, 10) === 0
        ? hue + getRandomInt(-45, 45)
        : hue + 180 + getRandomInt(-90, 90)
    );
  }
  return finalHues;
}

function SphereContainer(props) {
  const [height, setHeight] = useState(0);

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  return (
    <div
      className="bg-neutral-900 w-full min-h-screen h-fit absolute inset-0 overflow-hidden"
      ref={ref}
    >
      <div className="relative z-10 insphere-content">{props.content}</div>
      {generateHues(height).map((hue, i) => {
        return <Sphere hue={hue} />;
      })}
    </div>
  );
}

export default SphereContainer;
