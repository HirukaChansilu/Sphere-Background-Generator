import React from "react";
import Sphere from "./Sphere";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateHues() {
  const avaliableHues = [0, 22, 50, 115, 160, 220, 240, 280, 330];
  const finalHues = [];
  for (let i = 0; i < getRandomInt(6, 12); i++) {
    finalHues.push(avaliableHues[getRandomInt(0, avaliableHues.length)]);
  }
  return finalHues;
}

function SphereContainer(props) {
  const hues = generateHues();
  return (
    <div className="bg-neutral-900 w-full min-h-screen h-fit absolute inset-0 overflow-hidden">
      <div className="relative z-10">{props.content}</div>
      {hues.map((hue, i) => {
        return <Sphere key={i} hue={hue} />;
      })}
    </div>
  );
}

export default SphereContainer;
