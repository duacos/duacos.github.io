import React from "react";
import CoverParticles from "./Particles";

const Header = () => (
  <header>
    <CoverParticles />

    <div className="header-text">
      <h1>
        Hello! I'm <span>Jorge Durango</span>
      </h1>
      <h3>Freelance Web Developer</h3>
    </div>
  </header>
);

export default Header;
