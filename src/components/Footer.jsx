import "../Styles/Footer.css";
import logo from "../assets/sa-logo.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-brand" aria-label="Back to top">
          <img
            src={logo}
            alt="Sebastian Åkerman"
            className="footer-logo"
          />

          <span>Sebastian Åkerman</span>
        </a>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Sebastian Åkerman
        </p>
      </div>
    </footer>
  );
}

export default Footer;