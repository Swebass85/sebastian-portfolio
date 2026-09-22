import "../Styles/Header.css";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <Logo />

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;