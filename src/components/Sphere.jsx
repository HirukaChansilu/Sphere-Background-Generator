import React from "react";
import ReactDOMServer from "react-dom/server";

function encodeSvg(reactElement) {
  return (
    "data:image/svg+xml;base64," +
    btoa(ReactDOMServer.renderToStaticMarkup(reactElement))
  );
}

function Sphere(props) {
  const hue = props.hue;

  return (
    <img
      className="absolute inset-0"
      src={encodeSvg(
        <svg
          className="sphere"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="url(#paint0_radial_6_117)" />
          <defs>
            <radialGradient
              id="paint0_radial_6_117"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(128.5 109.5) rotate(50.6653) scale(311.588)"
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
