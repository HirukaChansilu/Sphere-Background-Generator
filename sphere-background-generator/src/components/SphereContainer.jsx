import React from "react";
import Sphere from "./Sphere";

function SphereContainer() {
  const hues = [0, 22, 50, 115, 160, 220, 240, 280, 330];
  return (
    <div className="bg-stone-900 w-full  h-full absolute inset-0 -z-50">
      {hues.map((hue, i) => {
        return <Sphere key={i} hue={hue} />;
      })}
    </div>
  );
}

export default SphereContainer;
