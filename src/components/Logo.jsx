import { useRef } from "react";
import "../Styles/Logo.css";
import logo from "../Public/sa-logo.webp";

function Logo() {
  const logoRef = useRef(null);

  const handleMouseMove = (event) => {
    const element = logoRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    element.style.setProperty("--mouse-x", `${x}%`);
    element.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleMouseEnter = () => {
    if (logoRef.current) {
      logoRef.current.classList.add("logo-active");
    }
  };

  const handleMouseLeave = () => {
    if (logoRef.current) {
      logoRef.current.classList.remove("logo-active");
    }
  };

  return (
    <a href="#home" className="brand">
      <div
        className="logo-shield"
        ref={logoRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Normal logo */}
        <img
          src={logo}
          alt="Sebastian Åkerman logo"
          className="logo-image"
        />

        {/* Metallic reflection copy */}
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="logo-reflection-image"
        />
      </div>

      <span className="brand-name">
        sebastianakerman<span>.se</span>
      </span>
    </a>
  );
}

export default Logo;