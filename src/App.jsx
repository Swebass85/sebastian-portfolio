import "./Styles/App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CustomCursor from "./components/CustomCursor";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <CustomCursor />

      <div className="background-video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      </div>

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;