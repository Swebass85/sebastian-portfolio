import { useEffect, useState } from "react";
import "../Styles/CustomCursor.css";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [visible, setVisible] = useState(false);
  const [clickable, setClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      /* ========================================
         CHECK IF CURSOR IS OVER CLICKABLE ITEM
      ======================================== */

      const target = event.target;

      const clickableElement = target.closest(
        `
        a,
        button,
        input,
        select,
        textarea,
        [role="button"],
        [role="link"],
        [onclick],
        .clickable
        `
      );

      setClickable(Boolean(clickableElement));
    };

    const handleMouseLeave = () => {
      setVisible(false);
      setClickable(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, []);

  return (
    <div
      className={`
        custom-cursor
        ${visible ? "cursor-visible" : ""}
        ${clickable ? "cursor-clickable" : ""}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-atom">
        <span className="cursor-orbit cursor-orbit-1" />
        <span className="cursor-orbit cursor-orbit-2" />
        <span className="cursor-orbit cursor-orbit-3" />
      </div>

      <span className="cursor-dot" />
    </div>
  );
}

export default CustomCursor;