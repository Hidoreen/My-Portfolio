import "./header.css";
import CTA from "../cta/cta";
import profile from "../../assets/profile.jpeg";
import {
  FaGithubSquare,
  FaBehanceSquare,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

const Header = () => {
  return (
    <section id="#">
      <header>
        <div className="container header__container">
          <h5>Hello ?, I&#39; m</h5>
          <h1>WANGECHI DOREEN</h1>
          <h5 className="text-light"> a Frontend Developer.</h5>
          <CTA />
          <p className="scrollDown">Scroll Down</p>
          <figure className="myPhoto">
            <img src={profile} alt="My photo" />
          </figure>
          <div className="socials">
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
      </header>
    </section>
  );
};

export default Header;
