import "../Styles/About.css";

import profile from "../Public/profile.webp";
import music from "../Public/music.webp";
import football from "../Public/football.webp";
import photo from "../Public/photo.webp";

function About() {
  const handleImageMove = (event) => {
    const wrapper = event.currentTarget;
    const image = wrapper.querySelector(".about-image");

    if (!image) return;

    const rect = wrapper.getBoundingClientRect();

    // Cursor position inside the circle
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Convert cursor position to values between 0 and 1
    const xPercent = mouseX / rect.width;
    const yPercent = mouseY / rect.height;

    // Small movement opposite to cursor direction
    const moveX = (0.5 - xPercent) * 30;
    const moveY = (0.5 - yPercent) * 30;

    image.style.transform = `
      translate(${moveX}px, ${moveY}px)
      scale(1.35)
    `;
  };

  const handleImageLeave = (event) => {
    const wrapper = event.currentTarget;
    const image = wrapper.querySelector(".about-image");

    if (!image) return;

    // Every image returns to exactly the same centered position
    image.style.transform = "translate(0px, 0px) scale(1)";
  };

  return (
    <section className="about" id="about">
      <div className="about-content">

        {/* LEFT SIDE - TEXT */}

        <div className="about-text">
          <p className="section-label">ABOUT ME</p>

          <h2>
            From IT and business to UX and modern web development.
          </h2>

          <p>
            I'm a Full-Stack Development student with a strong focus on
            frontend development and React. My path into development combines
            technology, design, business, and creative work.
          </p>

          <p>
            I previously worked as an IT consultant before transitioning into
            UX and digital design. In 2019, I studied Digital Media Creative at
            Hyper Island, where I developed my skills in user experience,
            digital design, and creative problem solving.
          </p>

          <p>
            Today, I'm studying Frontend Development at EC Utbildning, with
            graduation planned for 2027. I'm developing my skills in modern
            frontend and full-stack technologies while building real-world
            projects with React, JavaScript, Node.js, databases, APIs, and
            modern development workflows.
          </p>

          <p>
            I also have a background in business, having studied Business
            Administration at the University of Scranton in the United States.
            This combination allows me to approach development from both a
            technical and business perspective.
          </p>

          <p>
            When I'm not writing code, there's a good chance you'll find me on
            a stage with a guitar in my hands or on a football pitch chasing a
            ball. I'm also a musician, and performing live is one of my biggest
            passions. I love the energy of connecting with an audience — it's a
            very different kind of problem solving than development, but just
            as rewarding.
          </p>
        </div>

        {/* RIGHT SIDE - IMAGES */}

        <div className="about-images">

          {/* PROFILE */}

          <div className="about-image-wrapper featured">
            <img
              src={profile}
              alt="Sebastian"
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* MUSIC */}

          <div
            className="about-image-wrapper interactive"
            onMouseMove={handleImageMove}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={music}
              alt="Sebastian performing music"
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* FOOTBALL */}

          <div
            className="about-image-wrapper interactive"
            onMouseMove={handleImageMove}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={football}
              alt="Sebastian playing football"
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* PHOTOGRAPHY */}

          <div
            className="about-image-wrapper interactive"
            onMouseMove={handleImageMove}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={photo}
              alt="Sebastian working with photography"
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;