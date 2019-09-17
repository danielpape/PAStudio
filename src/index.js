import React from "react";
import ReactDOM from "react-dom";

import Palette from "./Palette";
import Header from "./Header";
import Data from "./data";

import "./styles.css";

function App() {
  const paletteItems = Data.map(item => <Palette data={item} />);

  return (
    <div id="App">
      <Header />
      <div className="App">{paletteItems}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
