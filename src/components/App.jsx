import React, { useState } from "react";
import SphereContainer from "./SphereContainer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [animate, setAnimate] = useState(true);

  return (
    <ParallaxProvider>
      <div>
        <SphereContainer
          animate={animate}
          content={
            <div>
              <div className="flex flex-col h-72">
                <div className="bg-gradient-to-r from-pink-600 to-violet-600 text-white rounded-xl p-10 m-5 sm:m-10 flex flex-col justify-center md:fixed top-5 right-5">
                  <h1 className="text-2xl font-bold">
                    Sphere Background Generator
                  </h1>
                  <p className="text-gray-200 font-light">
                    A Simple tool to create beautiful sphere background each
                    <br /> time randomly.
                  </p>
                  <a
                    className=" bg-stone-700 hover:bg-stone-800 py-3 px-10 sm:w-7/12 mt-8 rounded-xl sm:self-end text-center"
                    href="https://github.com/HirukaChansilu/Sphere-Background-Generator"
                  >
                    View On Github
                  </a>
                  <p className="text-gray-200 font-light sm:self-end mt-1 text-center">
                    A Project by Hiruka Chansilu
                  </p>
                </div>
                <div className="flex flex-col w-40 ml-10 justify-center">
                  <button
                    className="py-2 px-8 my-10 bg-violet-600 hover:bg-violet-900 text-white rounded-lg shadow-2xl"
                    onClick={() => {
                      window.location.reload(false);
                    }}
                  >
                    Refresh
                  </button>
                  <button
                    className="py-2 px-8 mb-10 bg-violet-600 hover:bg-violet-900 text-white rounded-lg shadow-2xl"
                    onClick={() => {
                      animate ? setAnimate(false) : setAnimate(true);
                    }}
                  >
                    Animate
                  </button>
                </div>
              </div>
              <div
                className="w-10 md:w-40 bg-gradient-to-b from-pink-500 to-purple-500 m-10 ml-5 md:ml-10 -mt-10 md:mt-0 p-5 text-transparent md:text-white rounded-lg"
                style={{ height: "3000px" }}
              >
                Placeholder Content
              </div>
            </div>
          }
        />
      </div>
    </ParallaxProvider>
  );
}

export default App;
