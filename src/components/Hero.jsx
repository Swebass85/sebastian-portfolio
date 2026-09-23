import { useRef } from "react";
import "../Styles/Hero.css";

function Hero() {
  const heroLogoRef = useRef(null);
  const atomWrapperRef = useRef(null);

  /* ========================================
     LOGO FLASHLIGHT POSITION
  ======================================== */

  const handleLogoMouseMove = (event) => {
    const element = heroLogoRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    element.style.setProperty("--mouse-x", `${x}%`);
    element.style.setProperty("--mouse-y", `${y}%`);
  };


  /* ========================================
     SPEED UP ELECTRONS

     Uses Web Animations playbackRate instead
     of changing animation-duration.

     This means the electrons continue from
     their exact current position.
  ======================================== */

  const setElectronSpeed = (speed) => {
    const wrapper = atomWrapperRef.current;

    if (!wrapper) return;

    const electrons =
      wrapper.querySelectorAll(".hero-electron");

    electrons.forEach((electron) => {
      const animations = electron.getAnimations();

      animations.forEach((animation) => {
        animation.playbackRate = speed;
      });
    });
  };


  /* ========================================
     LOGO MOUSE ENTER
  ======================================== */

  const handleLogoMouseEnter = () => {
    if (heroLogoRef.current) {
      heroLogoRef.current.classList.add(
        "hero-logo-active"
      );
    }

    setElectronSpeed(2);
  };


  /* ========================================
     LOGO MOUSE LEAVE
  ======================================== */

  const handleLogoMouseLeave = () => {
    if (heroLogoRef.current) {
      heroLogoRef.current.classList.remove(
        "hero-logo-active"
      );
    }

    setElectronSpeed(1);
  };


  /* ========================================
     ELECTRON PROXIMITY GLOW
  ======================================== */

  const handleAtomMouseMove = (event) => {
    const wrapper = atomWrapperRef.current;

    if (!wrapper) return;

    const electrons =
      wrapper.querySelectorAll(".hero-electron");

    electrons.forEach((electron) => {
      const rect =
        electron.getBoundingClientRect();

      const electronX =
        rect.left + rect.width / 2;

      const electronY =
        rect.top + rect.height / 2;

      const distanceX =
        event.clientX - electronX;

      const distanceY =
        event.clientY - electronY;

      const distance = Math.sqrt(
        distanceX * distanceX +
        distanceY * distanceY
      );

      /*
        Distance in pixels where the glow
        begins reacting to the cursor.
      */

      const glowRadius = 180;

      const glow = Math.max(
        0,
        1 - distance / glowRadius
      );

      electron.style.setProperty(
        "--electron-glow",
        glow
      );
    });
  };


  /* ========================================
     RESET ELECTRON GLOW
  ======================================== */

  const handleAtomMouseLeave = () => {
    const wrapper = atomWrapperRef.current;

    if (!wrapper) return;

    const electrons =
      wrapper.querySelectorAll(".hero-electron");

    electrons.forEach((electron) => {
      electron.style.setProperty(
        "--electron-glow",
        "0"
      );
    });
  };


  return (
    <section className="hero" id="home">

      {/* ========================================
          LOGO + ATOM
      ======================================== */}

      <div
        className="hero-logo-wrapper"
        ref={atomWrapperRef}
        onMouseMove={handleAtomMouseMove}
        onMouseLeave={handleAtomMouseLeave}
      >

        {/* ========================================
            VISIBLE ORBIT RINGS
        ======================================== */}

        <div className="hero-orbit hero-orbit-1" />

        <div className="hero-orbit hero-orbit-2" />

        <div className="hero-orbit hero-orbit-3" />


        {/* ========================================
            ORBIT 1
        ======================================== */}

        <div className="electron-orbit electron-orbit-1">

          <span className="hero-electron electron-a" />

          <span className="hero-electron electron-b" />

        </div>


        {/* ========================================
            ORBIT 2
        ======================================== */}

        <div className="electron-orbit electron-orbit-2">

          <span className="hero-electron electron-a" />

          <span className="hero-electron electron-b" />

        </div>


        {/* ========================================
            ORBIT 3
        ======================================== */}

        <div className="electron-orbit electron-orbit-3">

          <span className="hero-electron electron-a" />

          <span className="hero-electron electron-b" />

        </div>


        {/* ========================================
            SA LOGO
        ======================================== */}

        <div
          className="hero-logo"
          ref={heroLogoRef}
          onMouseMove={handleLogoMouseMove}
          onMouseEnter={handleLogoMouseEnter}
          onMouseLeave={handleLogoMouseLeave}
        >

          <img
            src="/sa-logo.png"
            alt="Sebastian Åkerman logo"
            className="hero-logo-image"
          />

          <img
            src="/sa-logo.png"
            alt=""
            aria-hidden="true"
            className="hero-logo-reflection"
          />

        </div>

      </div>


      {/* ========================================
          HERO TEXT
      ======================================== */}

      <p>Hi, I'm</p>

      <h1>Sebastian Åkerman</h1>

      <h2>
        Full-Stack Developer/UX Designer/Photographer
      </h2>

      <p>
        I build modern and responsive web applications with a focus on React,
        user experience, and clean code.
      </p>


      {/* ========================================
          BUTTONS
      ======================================== */}

      <div className="hero-buttons">

        <a href="#projects">
          View my projects
        </a>

        <a href="#contact">
          Contact me
        </a>

      </div>

    </section>
  );
}

export default Hero;