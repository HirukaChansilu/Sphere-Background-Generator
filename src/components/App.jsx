import React from "react";
import "./App.css";
import Sphere from "./Sphere";
import SphereContainer from "./SphereContainer";

function App() {
  return (
    <div>
      <SphereContainer
        content={<div className="w-1/12" style={{ height: "200px" }}></div>}
      />
      {/* <Sphere hue={180} /> */}
    </div>
  );
}

export default App;
