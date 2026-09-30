import "./Styles/App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CustomCursor />

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;