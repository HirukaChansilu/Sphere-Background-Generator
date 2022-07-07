import React from "react";
import "./App.css";
import SphereContainer from "./SphereContainer";

function App() {
  return (
    <div>
      <SphereContainer
        content={<div className="w-1/12" style={{ height: "2000px" }}></div>}
      />
    </div>
  );
}

export default App;
