import "./Styles/App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;