import React from "react";

import SpaceMarine from "./SpaceMarine";

class Palette extends React.Component {
  render() {
    const PaletteStyle = {
      display: "flex",
      flexDirection: "column"
    };

    return (
      <div style={PaletteStyle} class="item">
        <SpaceMarine data={this.props.data} />
        <p>Chapter name: {this.props.data.chapterName}</p>
      </div>
    );
  }
}

export default Palette;
