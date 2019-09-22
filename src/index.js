import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Creator from "./Creator";
import Palette from "./Palette";
import Data from "./data";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: "viewing"
    };
    this.logInButton = this.logInButton.bind(this);
  }

  logInButton() {
    this.state.mode === "viewing"
      ? this.setState({ mode: "editing" })
      : this.setState({ mode: "viewing" });
  }

  render() {
    const paletteItems = Data.map(item => <Palette data={item} />);

    return (
      <div id="App">
        <Header viewEdit={this.state.mode} logInButton={this.logInButton} />
        {this.state.mode === "editing" ? (
          <Creator />
        ) : (
          <div className="App">{paletteItems}</div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
