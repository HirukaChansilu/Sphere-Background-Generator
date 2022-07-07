import React from "react";
import Sphere from "./Sphere";

function SphereContainer() {
  const hues = [0, 22, 50, 115, 160, 220, 240, 280, 330];
  return (
    <div className="bg-stone-900 w-100% min-h-screen relative inset-0">
      {hues.map((hue) => {
        return <Sphere hue={hue} />;
      })}
    </div>
  );
}

export default SphereContainer;
