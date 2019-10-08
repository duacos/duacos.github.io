import React from "react";
import "normalize.css";
import "./App.sass";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

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

        <div className="content">hello</div>
      </div>
    );
  }
}
