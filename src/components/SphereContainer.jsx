import React from "react";
import Sphere from "./Sphere";

function SphereContainer(props) {
  const hues = [0, 22, 50, 115, 160, 220, 240, 280, 330];
  return (
    <div className="bg-stone-900 w-full min-h-screen h-fit absolute inset-0">
      <div className="relative z-10">{props.content}</div>
      {hues.map((hue, i) => {
        return <Sphere key={i} hue={hue} />;
      })}
    </div>
  );
}

export default SphereContainer;
