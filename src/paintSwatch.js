import React from "react";

class PaintSwatch extends React.Component {
  constructor() {
    super();
  }

  render() {
    const SwatchStyle = {
      width: 16,
      height: 16,
      backgroundColor: this.props.colour
    };

    return <div style={SwatchStyle} />;
  }
}

export default PaintSwatch;
