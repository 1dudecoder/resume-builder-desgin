import React from "react";
import Certificate from "./left/Certificate";
import Exper from "./left/Exper";
import Key from "./left/Key";
import Name from "./left/Name";
import "./Resume.css";
import About from "./right/About";
import Career from "./right/Career";
import Education from "./right/Education";
import Skills from "./right/Skills";
import Tech from "./right/Tech";

function Resume() {
  return (
    <div className="resume">
      <div className="outer">
        <div className="userName">
          <Name />
          <Exper />
          <Key />
          <Certificate />

        </div>

        <div className="about-me">
          <About />
          <Career />  
          <Tech />
          <Skills />
          <Skills />
          <Skills />
          <Education />

        </div>


      </div>
    </div>
  );
}

export default Resume;
