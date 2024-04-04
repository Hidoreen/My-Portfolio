import React from "react";
import CV from "../../assets/CV.pdf";
import './cta.css'

const CTA = () => {
  return (
    <div className="headerBtn">
      <button className="btn downloadBtn">
        <a href={CV} download>
          {" "}
          Download CV
        </a>
      </button>
      <button className="btn">
        <a href="#contact">Let &#39;s talk</a>
      </button>
    </div>
  );
};

export default CTA;
