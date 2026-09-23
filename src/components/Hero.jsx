import { useRef } from "react";
import "../Styles/Hero.css";
import logo from "../assets/sa-logo.webp";

function Hero() {
  const heroLogoRef = useRef(null);

  const handleMouseMove = (event) => {
    const element = heroLogoRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    element.style.setProperty("--mouse-x", `${x}%`);
    element.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleMouseEnter = () => {
    if (heroLogoRef.current) {
      heroLogoRef.current.classList.add("hero-logo-active");
    }
  };

  const handleMouseLeave = () => {
    if (heroLogoRef.current) {
      heroLogoRef.current.classList.remove("hero-logo-active");
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-logo-wrapper">
        <div
          className="hero-logo"
          ref={heroLogoRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Normal logo */}
          <img
            src={logo}
            alt="Sebastian Åkerman logo"
            className="hero-logo-image"
          />

          {/* Shimmer copy */}
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="hero-logo-reflection"
          />
        </div>
      </div>

      <p>Hi, I'm</p>

      <h1>Sebastian Åkerman</h1>

      <h2>Full-Stack Developer/UX Designer/Photographer</h2>

      <p>
        I build modern and responsive web applications with a focus on React,
        user experience, and clean code.
      </p>

      <div className="hero-buttons">
        <a href="#projects">View my projects</a>
        <a href="#contact">Contact me</a>
      </div>
    </section>
  );
}

export default Hero;