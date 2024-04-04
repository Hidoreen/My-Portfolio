import "./footer.css";

import {
  FaGithubSquare,
  FaBehanceSquare,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import Copyright from "./year";


const Footer = () => {
  return (
    <section id="footer">
      <footer className="container container_footer">
        <div className="footer-content">
          {" "}
          <a href="#" className="footer-logo">
            WANGECHI
          </a>

          <ul className="portfolio-footer-icons">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#portfolio">Projects</a></li>
          </ul>
      
          <div className="footer-icons">
            <a href="https://github.com/Hidoreen" target="_blank">
              <FaGithubSquare />
            </a>
            <a href="https://www.behance.net/doreenwangeci" target="_blank">
              <FaBehanceSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/doreen-wangechi/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://medium.com/@hellowangechi" target="_blank">
              <FaMedium />
            </a>
        </div>
        </div>
        <Copyright/>
      </footer>
    </section>
  );
};

export default Footer;
