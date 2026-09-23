import { useEffect, useRef, useState } from "react";
import "../Styles/Skills.css";
import logo from "../Public/sa-logo.webp";

const technicalSkills = [
  { name: "UX / UI", value: 95 },
  { name: "HTML / CSS", value: 90 },
  { name: "Git / GitHub", value: 90 },
  { name: "JavaScript", value: 80 },
  { name: "Express", value: 80 },
  { name: "React", value: 70 },
  { name: "Firebase", value: 70 },
  { name: "Node.js", value: 65 },
];

const professionalSkills = [
  { name: "English", value: 100 },
  { name: "Swedish", value: 100 },
  { name: "Punctuality", value: 100 },
  { name: "Team Player", value: 100 },
  { name: "Reliability", value: 100 },
  { name: "Driver's License (B)", value: 100 },
];

function SkillBar({ name, value, isVisible, delay }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrame;
    let timeout;
    let startTime;

    // Reset number to zero
    setDisplayValue(0);

    if (!isVisible) {
      return;
    }

    const duration = 1400;
    const delayMilliseconds = delay * 100;

    timeout = setTimeout(() => {
      const animateNumber = (time) => {
        if (!startTime) {
          startTime = time;
        }

        const progress = Math.min((time - startTime) / duration, 1);

        // Smooth easing
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setDisplayValue(Math.round(value * easedProgress));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateNumber);
        }
      };

      animationFrame = requestAnimationFrame(animateNumber);
    }, delayMilliseconds);

    return () => {
      clearTimeout(timeout);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, value, delay]);

  return (
    <div className="skill">
      <div className="skill-info">
        <span>{name}</span>
        <span>{displayValue}%</span>
      </div>

      <div className="skill-track">
        <div
          className={`skill-progress ${
            isVisible ? "skill-progress-active" : ""
          }`}
          style={{
            "--skill-width": `${value}%`,
            "--skill-delay": `${delay * 100}ms`,
          }}
        >
          {/* SA logo follows the end of the progress bar */}
          <img
            src={logo}
            alt=""
            className="skill-logo"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skillsRef = useRef(null);
  const restartTimeoutRef = useRef(null);

  const restartAnimation = () => {
    // Reset bars and numbers
    setIsVisible(false);

    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
    }

    // Wait so the browser renders the bars at 0
    restartTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };

  // Start animation when Skills enters the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  // Restart animation whenever Skills is clicked in the navbar
  useEffect(() => {
    const skillsLink = document.querySelector('a[href="#skills"]');

    if (!skillsLink) {
      return;
    }

    const handleSkillsClick = () => {
      restartAnimation();
    };

    skillsLink.addEventListener("click", handleSkillsClick);

    return () => {
      skillsLink.removeEventListener("click", handleSkillsClick);

      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="skills-content">
        <p className="section-label">SKILLS</p>

        <h2>Skills & experience.</h2>

        <p className="skills-intro">
          A snapshot of my technical experience and professional strengths.
        </p>

        {/* TECHNICAL SKILLS */}

        <div className="skills-category">
          <h3>Technical Skills</h3>

          <div className="skills-list">
            {technicalSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                value={skill.value}
                isVisible={isVisible}
                delay={index}
              />
            ))}
          </div>
        </div>

        {/* PROFESSIONAL SKILLS */}

        <div className="skills-category">
          <h3>Professional Skills</h3>

          <div className="skills-list">
            {professionalSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                value={skill.value}
                isVisible={isVisible}
                delay={technicalSkills.length + index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;