import React from "react";

import SpaceMarine from "./SpaceMarine";
import PaintSwatch from "./paintSwatch";
import citadelPaint from "./paintData";

class Palette extends React.Component {
  render() {
    const PaletteStyle = {
      display: "flex",
      flexDirection: "column"
    };

    return (
      <div style={PaletteStyle} class="item">
        <SpaceMarine data={this.props.data} />
        <p class="item__ChapterName">{this.props.data.chapterName}</p>
        <PaintSwatch colour={this.props.data.base} />
      </div>
    );
  }
}

export default Palette;
