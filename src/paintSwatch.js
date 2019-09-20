import React from "react";

class PaintSwatch extends React.Component {
  constructor() {
    super();
  }

  render() {
    const SwatchStyle = {
      width: 16,
      height: 16,
      margin: 2,
      backgroundColor: this.props.colour,
      display: "inline-block"
    };

    return <div style={SwatchStyle} />;
  }
}

export default PaintSwatch;
