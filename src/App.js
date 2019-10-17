import React from "react";
import "normalize.css";
import "./App.sass";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class App extends React.Component {
  state = {
    toggleMenu: false
  };

  menuButtonClick() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation
          handleClick={this.menuButtonClick.bind(this)}
          toggle={this.state.toggleMenu}
        />

        <div className="content">
          <div className="page-group">
            <h1 className="page-group-title">Latest Projects</h1>
            <div className="project-item box-item">
              <div className="project-name">
                <h2>
                  CodeTuts <span>{'<type = "Website"/>'}</span>
                </h2>
              </div>
              <div className="project-description">
                <p>
                  Everybody is blogging this days, so Why not me? Check out my
                  latest content.
                </p>
              </div>
            </div>

            <div className="project-item box-item">
              <div className="project-name">
                <h2>
                  The Guarded <span>{'<type = "Website demo"/>'}</span>
                </h2>
              </div>
              <div className="project-description">
                <p>
                  Based on the popular newspaper "The Guardian", this demo
                  includes some of the changes I would make to improve the
                  design.
                </p>
              </div>
            </div>
          </div>

          <div className="page-group">
            <h1 className="page-group-title">Skills</h1>

            <div className="progress-bars">
              <div className="progress">
                <CircularProgressbar
                  value={90}
                  text={`HTML`}
                  styles={buildStyles({
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    pathColor: `rgba(11, 177, 94)`,
                    textColor: "#6d6d6d",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7"
                  })}
                />
              </div>

              <div className="progress">
                <CircularProgressbar
                  value={80}
                  text={`CSS`}
                  styles={buildStyles({
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    pathColor: `rgba(58, 130, 130)`,
                    textColor: "#6d6d6d",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7"
                  })}
                />
              </div>
              <div className="progress">
                <CircularProgressbar
                  value={70}
                  text={`JS`}
                  styles={buildStyles({
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    pathColor: `rgba(222, 156, 11)`,
                    textColor: "#6d6d6d",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7"
                  })}
                />
              </div>

              <div className="progress">
                <CircularProgressbar
                  value={80}
                  text={`React`}
                  styles={buildStyles({
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    pathColor: `rgba(11, 148, 222, 1)`,
                    textColor: "#6d6d6d",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7"
                  })}
                />
              </div>

              <div className="progress">
                <CircularProgressbar
                  value={70}
                  text={`Redux`}
                  styles={buildStyles({
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    pathColor: `rgba(11, 148, 238, 1)`,
                    textColor: "#6d6d6d",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7"
                  })}
                />
              </div>
              <div className="progress">
                <CircularProgressbar
                  value={60}
                  text={`Rails`}
                  styles={buildStyles({
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    pathColor: `rgba(235, 101, 91, 1)`,
                    textColor: "#6d6d6d",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7"
                  })}
                />
              </div>

              <div className="progress">
                <CircularProgressbar
                  value={40}
                  text={`Ruby`}
                  styles={buildStyles({
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    pathColor: `rgba(255, 101, 91, 1)`,
                    textColor: "#6d6d6d",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7"
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
