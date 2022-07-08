import React, { useState, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { Parallax } from "react-scroll-parallax";
import { Buffer } from "buffer";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateHues(contentHeight) {
  const finalHues = [];
  const hue = getRandomInt(0, 360);
  // console.log("Hue:", hue);
  for (
    let i = 0;
    i <
    getRandomInt(
      Math.round((5 / 1000) * contentHeight),
      Math.round((8 / 1000) * contentHeight)
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

function encodeSvg(reactElement) {
  return (
    "data:image/svg+xml;base64," +
    Buffer.from(
      ReactDOMServer.renderToStaticMarkup(reactElement),
      "utf8"
    ).toString("base64")
  );
}

function SphereBackground(props) {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      setDimensions({
        height: ref.current.offsetHeight,
        width: ref.current.offsetWidth,
      });
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#171717",
        width: "100%",
        minHeight: "100vh",
        height: "fit-content",
        position: "absolute",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        overflow: "hidden",
      }}
      ref={ref}
    >
      <div style={{ position: "relative", zIndex: "10" }}>{props.content}</div>
      {generateHues(dimensions.height).map((hue, i) => {
        const sphereSize =
          dimensions.width > 800
            ? getRandomInt(
                (200 / 1500) * dimensions.width,
                (700 / 1500) * dimensions.width
              )
            : getRandomInt(
                (400 / 700) * dimensions.width,
                (700 / 700) * dimensions.width
              );
        const styles = {
          position: "absolute",
          bottom: "0px",
          right: "0px",
          top: `${getRandomInt(-10, 98)}%`,
          left: `${getRandomInt(-10, 98)}%`,
        };
        return (
          <Parallax key={i} speed={getRandomInt(-90, -50)} style={styles}>
            <img
              style={
                props.animate
                  ? {
                      filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
                      transform: "scale(0%)",
                      opacity: 0,
                      animation: `appear 0.5s ease-in-out 0.25s 1 forwards, grow ${getRandomInt(
                        6,
                        12
                      )}s ease-in-out 1s infinite both`,
                      WebkitAnimation: `appear 0.5s ease-in-out 0.25s 1 forwards, grow ${getRandomInt(
                        6,
                        12
                      )}s ease-in-out 1s infinite both`,
                    }
                  : {
                      filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
                      transform: "scale(0%)",
                      opacity: 0,
                      animation: "appear 0.5s ease-in-out 0.25s 1 forwards",
                      WebkitAnimation:
                        "appear 0.5s ease-in-out 0.25s 1 forwards",
                    }
              }
              src={encodeSvg(
                <svg
                  width={sphereSize}
                  height={sphereSize}
                  viewBox={`0 0 ${sphereSize} ${sphereSize}`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx={sphereSize / 2}
                    cy={sphereSize / 2}
                    r={sphereSize / 2}
                    fill="url(#paint0_radial_6_117)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_6_117"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform={`translate(${
                        (128.5 / 400) * sphereSize
                      } ${(109.5 / 400) * sphereSize}) rotate(${
                        (50.6653 / 400) * sphereSize
                      }) scale(${(311.588 / 400) * sphereSize})`}
                    >
                      <stop offset="0.0" stopColor={`hsl(${hue}, 100%, 65%)`} />
                      <stop offset="0.5" stopColor={`hsl(${hue}, 50%, 40%)`} />
                      <stop offset="0.8" stopColor={`hsl(${hue}, 70%, 28%)`} />
                      <stop offset="1.0" stopColor={`hsl(${hue}, 83%, 23%)`} />
                    </radialGradient>
                  </defs>
                </svg>
              )}
              alt="Sphere SVG"
            />
          </Parallax>
        );
      })}
    </div>
  );
}

export default SphereBackground;
