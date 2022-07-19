import React from 'react';
import BatImage from "../../assets/resume/batmanresumeimage.jpg";
import TedResume from "../../assets/resume/Ted Resume.pdf"

function Resume() {
  return (
    <section id="resume">
      <div className ="about-para">
        <h1 className="sect-title">I am development... I am the coder... I AM BATMATT!</h1>
        <p>
          Click on the image below to download my current Resume!
        </p>
      </div>
      <a href={TedResume} download="Ted Resume">
        <img id="batman-image" src={BatImage} className="my-2" alt="cover"></img>
      </a>
    </section>
  );
}

export default Resume;