import React from "react";
import ReactDOMServer from "react-dom/server";
import { Parallax } from "react-scroll-parallax";
import { Buffer } from "buffer";

function encodeSvg(reactElement) {
  return (
    "data:image/svg+xml;base64," +
    Buffer.from(
      ReactDOMServer.renderToStaticMarkup(reactElement),
      "utf8"
    ).toString("base64")
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function Sphere(props) {
  const hue = props.hue;
  const sphereSize =
    props.dimensions.width > 800
      ? getRandomInt(
          (200 / 1500) * props.dimensions.width,
          (700 / 1500) * props.dimensions.width
        )
      : getRandomInt(
          (400 / 700) * props.dimensions.width,
          (700 / 700) * props.dimensions.width
        );
  const styles = {
    top: `${getRandomInt(-10, 98)}%`,
    left: `${getRandomInt(-10, 98)}%`,
  };
  return (
    <Parallax
      speed={getRandomInt(-90, -50)}
      className="absolute inset-0"
      style={styles}
    >
      <img
        className="drop-shadow-2xl"
        style={
          props.animate
            ? {
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
                transform: "scale(0%)",
                opacity: 0,
                animation: "appear 0.5s ease-in-out 0.25s 1 forwards",
                WebkitAnimation: "appear 0.5s ease-in-out 0.25s 1 forwards",
              }
        }
        src={encodeSvg(
          <svg
            className="sphere"
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
                gradientTransform={`translate(${(128.5 / 400) * sphereSize} ${
                  (109.5 / 400) * sphereSize
                }) rotate(${(50.6653 / 400) * sphereSize}) scale(${
                  (311.588 / 400) * sphereSize
                })`}
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
}
export default Sphere;
