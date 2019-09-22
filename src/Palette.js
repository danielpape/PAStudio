import React from "react";

import SpaceMarine from "./SpaceMarine";
import PaintSwatch from "./paintSwatch";

class Palette extends React.Component {
  render() {
    const PaletteStyle = {
      display: "flex",
      flexDirection: "column"
    };

    const colours = [
      this.props.data.base,
      this.props.data.leftPauldren,
      this.props.data.pauldrenBorder,
      this.props.data.rightPauldren,
      this.props.data.aquila,
      this.props.data.belt
    ];

    const uniqueColours = [...new Set(colours)];
    const Swatches = uniqueColours.map(colour => (
      <PaintSwatch colour={colour} />
    ));
    console.log(colours);
    return (
      <div style={PaletteStyle} class="item">
        <SpaceMarine data={this.props.data} />
        <p class="item__ChapterName">{this.props.data.chapterName}</p>
        <div class="item__swatches">{Swatches}</div>
      </div>
    );
  }
}

export default Palette;
