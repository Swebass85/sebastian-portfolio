import { useState } from "react";
import "../Styles/Resume.css";

function Resume() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const resetLanguage = () => {
    setSelectedLanguage(null);
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
              alt="United Kingdom flag"
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
              alt="Swedish flag"
            />
          </div>

          {!selectedLanguage && (
            <div className="language-label swedish-label">
              SVENSKA
            </div>
          )}
        </div>
      </div>

      {/* ========================================
          RETURN TO LANGUAGE SELECTION
      ======================================== */}

      {selectedLanguage && (
        <button
          className="resume-reset"
          onClick={resetLanguage}
          type="button"
        >
          ← Change language
        </button>
      )}
    </section>
  );
}

export default Resume;