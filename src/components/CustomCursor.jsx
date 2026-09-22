import { useEffect, useState } from "react";
import "../Styles/CustomCursor.css";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="react-cursor"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <svg
        className="react-cursor-svg"
        viewBox="-15 -15 30 30"
        aria-hidden="true"
      >
        {/* FIXED REACT ATOM RINGS */}
        <g className="react-cursor-rings">
          <ellipse cx="0" cy="0" rx="11" ry="4.5" />

          <ellipse
            cx="0"
            cy="0"
            rx="11"
            ry="4.5"
            transform="rotate(60)"
          />

          <ellipse
            cx="0"
            cy="0"
            rx="11"
            ry="4.5"
            transform="rotate(120)"
          />
        </g>

        {/* ELECTRON 1 */}
        <ellipse
          className="electron-path electron-path-1"
          cx="0"
          cy="0"
          rx="11"
          ry="4.5"
          pathLength="100"
        />

        {/* ELECTRON 2 */}
        <ellipse
          className="electron-path electron-path-2"
          cx="0"
          cy="0"
          rx="11"
          ry="4.5"
          pathLength="100"
          transform="rotate(60)"
        />

        {/* ELECTRON 3 */}
        <ellipse
          className="electron-path electron-path-3"
          cx="0"
          cy="0"
          rx="11"
          ry="4.5"
          pathLength="100"
          transform="rotate(120)"
        />

        {/* FIXED CENTER DOT */}
        <circle
          className="react-cursor-center"
          cx="0"
          cy="0"
          r="2.3"
        />
      </svg>
    </div>
  );
}

export default CustomCursor;