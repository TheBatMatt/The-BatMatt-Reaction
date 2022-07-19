import React from 'react';

import MovieGenieImage from "../../assets/port-images/Neon Movie.jpg";
import PlannerImage from "../../assets/port-images/planner.jpg";
import ReelMeInImage from "../../assets/port-images/reelmein.jpg";
import RiddleImage from "../../assets/port-images/riddle.jpg";
import TeamProImage from "../../assets/port-images/teaprofile.jpg";
import EyeEmployeeImage from "../../assets/port-images/watchtower.jpg";
import TRex from "../../assets/port-images/TRex.jpg"

function Projects() {
  return (
    <section id="portfolio">
      <section className="my-5" >
      <p className="about-para">
          <h1 className="sect-title">Welcome to the Code Cave!</h1>
            The Code Cave, as I so rightfully call it, is my curret work lineup.
            Complete school assignments, but I plan on adding on own original work 
            in due time. I hope to eventually branch into games as well, but as I'm 
            still in the learning process these thigs take time. Below are 6 of my 
            proudest projects- visit my github with the link in the footer to see more!
        </p>
      </section>
  
      <div id= "projects" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src={RiddleImage}
              alt="Riddler's Game"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/TheBatMatt/The-Riddler-s-Game" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://TheBatMatt.github.io/The-Riddler-s-Game/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card">
            <img
              src={TeamProImage}
              alt="Profile Generator"
              className="card-img-top"
            />
            <div className="card-body">
            <a href="https://pure-scrubland-65338.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
              <a href="https://github.com/TheBatMatt/Team-Profile-Generator" target="_blank" rel="noreferrer">
                <button>GitHub</button>
                </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img 
              src={TRex}
              alt="DDAA"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://github.com/jjakobsons87/dino-adoption" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://delusionaldinos.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card">
            <img
              src={MovieGenieImage}
              alt="Movie Genie"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://github.com/TheBatMatt/Movie-Genie" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://TheBatMatt.github.io/Movie-Genie/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src={PlannerImage}
              alt="Workday Planner"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://github.com/TheBatMatt/Work-Day-Scheduler" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://TheBatMatt.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src={ReelMeInImage}
              alt="Reel Me In"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://github.com/SergieoL/Reel-Me-In" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://id.heroku.com/login" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Projects;