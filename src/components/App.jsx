import React from "react";
import "./App.css";
import SphereContainer from "./SphereContainer";

function App() {
  return (
    <div>
      <SphereContainer />
      <div className="w-1/12 bg-purple-400" style={{ height: "2000px" }}></div>
    </div>
  );
}

export default App;
