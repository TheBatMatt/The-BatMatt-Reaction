import React from 'react'
import TedImage from "../../assets/port-images/TedJ.jpg";

function About() {

  return (
    <section id="about" className="my-5" >
      <div className ="about-sect-pics">
        <h1 id="about-title" className="sect-title">The BatMatt</h1>
        <img src={TedImage} className="my-2" id="TedIMG" alt="cover" />
      </div>
      <p className="about-para">
          I am Ted Matthew. I typically go by Matt, which is my middlename. As you can see by my react portfolio 
          I am a life-long Batman fan, thus I have dubbed myself "The BatMatt". I think it has a nice ring to it!  
          Anyways, I receieved my Coding Certificat from Michigan State University, graduating on July 14th, 2020.
          My goal is to specialize in building React pages actually! I am a hard working, dedicted individual who 
          loves to learn, and am driven to be the best at what I do. I love creating something out of nothing, so 
          coding is a natural fit for me! My end goal is to be a seasoned front-end developer because I love 
          desiging different UI's, but am willing to branch out and learn everything and anything, including back-end, 
          which I do know some! Check out the links at the bottom for my LinkedIn, Github and even my Facebook if you 
          want to learn more about the man behind the mask!
      </p>
    </section>
  )
};

export default About