import React from "react";
import Particles from "react-particles-js";

const CoverParticles = () => (
  <Particles
    className="cover"
    params={{
      particles: {
        number: {
          value: 90
        },
        size: {
          value: 3
        }
      },

      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          }
        }
      }
    }}
    style={{
      backgroundColor: "#07AEDF"
    }}
  />
);

export default CoverParticles;
