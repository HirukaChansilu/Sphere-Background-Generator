import React from "react";
import ReactDOMServer from "react-dom/server";

function encodeSvg(reactElement) {
  return (
    "data:image/svg+xml;base64," +
    btoa(ReactDOMServer.renderToStaticMarkup(reactElement))
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function Sphere(props) {
  const hue = props.hue;
  const sphereSize = getRandomInt(200, 700);
  const styles = {
    top: `${getRandomInt(-10, 90)}%`,
    left: `${getRandomInt(-10, 90)}%`,
    transform: "scale(0%)",
    animation: "appear 0.5s ease-in-out 0.5s 1 normal forwards",
  };
  return (
    <img
      className="sphere absolute inset-0"
      style={styles}
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
              <stop offset="0.8" stopColor={`hsl(${hue}, 70%, 20%)`} />
              <stop offset="1.0" stopColor={`hsl(${hue}, 83%, 10%)`} />
            </radialGradient>
          </defs>
        </svg>
      )}
      alt="Sphere SVG"
    />
  );
}
export default Sphere;
