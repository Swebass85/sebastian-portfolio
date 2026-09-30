import { useState } from "react";
import "../Styles/Resume.css";

function Resume() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const switchLanguage = (event) => {
    event.stopPropagation();

    setSelectedLanguage((currentLanguage) =>
      currentLanguage === "english" ? "swedish" : "english"
    );
  };

  return (
    <section id="resume">
      <div
        className={`resume-container ${
          selectedLanguage ? `selected-${selectedLanguage}` : ""
        }`}
      >
        {/* ========================================
            ENGLISH RESUME
        ======================================== */}

        <div
          className="resume-layer resume-english"
          onClick={() => selectLanguage("english")}
        >
          <img
            src="/resumeenglish.png"
            alt="Sebastian Åkerman English Resume"
            className="resume-image"
          />

          <div className="flag-overlay english-flag">
            <img
              src="/Flag_of_the_United_Kingdom.webp"
              alt=""
            />
          </div>

          {!selectedLanguage && (
            <div className="language-label english-label">
              ENGLISH
            </div>
          )}
        </div>

        {/* ========================================
            SWEDISH RESUME
        ======================================== */}

        <div
          className="resume-layer resume-swedish"
          onClick={() => selectLanguage("swedish")}
        >
          <img
            src="/resumeswedish.png"
            alt="Sebastian Åkerman Swedish Resume"
            className="resume-image"
          />

          <div className="flag-overlay swedish-flag">
            <img
              src="/Flag_of_Sweden.webp"
              alt=""
            />
          </div>

          {!selectedLanguage && (
            <div className="language-label swedish-label">
              SVENSKA
            </div>
          )}
        </div>

        {/* ========================================
            LANGUAGE SWITCH BUTTON

            English CV -> show Swedish flag
            Swedish CV -> show British flag
        ======================================== */}

        {selectedLanguage && (
          <button
            className="resume-language-switch"
            onClick={switchLanguage}
            type="button"
            aria-label={
              selectedLanguage === "english"
                ? "Switch to Swedish resume"
                : "Switch to English resume"
            }
          >
            <img
              src={
                selectedLanguage === "english"
                  ? "/Flag_of_Sweden.webp"
                  : "/Flag_of_the_United_Kingdom.webp"
              }
              alt={
                selectedLanguage === "english"
                  ? "Switch to Swedish"
                  : "Switch to English"
              }
            />
          </button>
        )}
      </div>
    </section>
  );
}

export default Resume;