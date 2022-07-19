import React from 'react';
import { Link } from "react-router-dom"

function Nav() {
  return (
      <nav className="navigation">
        <a href="https://batman.fandom.com/wiki/Batman_Wiki" id="bat-link" target="_blank" rel="noreferrer">
          <h1 className="sect-title">The Dark Coder</h1>
        </a>
        <ul className="flex-row">
        <li className="mx-2">
            <Link to="The-BatMatt-Reaction/about">BatMatt</Link>
          </li>
          <li className="mx-2">
            <Link to="The-BatMatt-Reaction/portfolio">Portfolio</Link>
          </li>
          <li className="mx-2">
            <Link to="The-BatMatt-Reaction/resume">Resume</Link>
          </li>
          <li className="mx-2">
            <Link to="The-BatMatt-Reaction/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  );
}


export default Nav
