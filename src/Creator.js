import React from "react";
import SpaceMarine from "./SpaceMarine";
import citadelPaint from "./paintData";
import PaintSwatch from "./paintSwatch";

class Creator extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        base: citadelPaint.base.CeramiteWhite,
        chestPlate: citadelPaint.base.CeramiteWhite,
        aquila: citadelPaint.layer.UlthuanGrey,
        leftPauldren: citadelPaint.base.CeramiteWhite,
        rightPauldren: citadelPaint.base.CeramiteWhite,
        pauldrenBorder: citadelPaint.layer.UlthuanGrey,
        belt: "#333",
        eyes: citadelPaint.layer.MephistonRed,
        chapterName: "Salamanders"
      },
      currentlyEditing: "base"
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleColourClick = this.handleColourClick.bind(this);
  }

  handleButtonClick(event) {
    this.setState({ currentlyEditing: event.target.id });
    console.log(this.state);
  }

  handleColourClick(event) {
    this.setState({
      data: {
        base: this.state.data.base,
        chestPlate: this.state.data.chestPlate,
        aquila: this.state.data.aquila,
        leftPauldren: this.state.data.leftPauldren,
        rightPauldren: this.state.data.rightPauldren,
        pauldrenBorder: this.state.data.rightPauldren,
        belt: this.state.data.belt,
        eyes: this.state.data.eyes,
        chapterName: this.state.data.chapterName,
        [this.state.currentlyEditing]: event.target.style.backgroundColor
      }
    });

    // this.setState({
    //   data: {...prevState.data,
    //     [this.state.currentlyEditing]: event.target.style.backgroundColor
    //   }
    // });
    console.log(event.target.style.backgroundColor);
  }

  render() {
    const paintSwatchValues = Object.values(citadelPaint.layer);
    const paintSwatches = paintSwatchValues.map(value => (
      <div
        onClick={this.handleColourClick}
        colour={value}
        class="editor__swatch"
      >
        <PaintSwatch colour={value} />
      </div>
    ));

    return (
      <div class="editor">
        <div class="editor__column">
          <SpaceMarine data={this.state.data} width="400" height="600" />
        </div>
        <div class="editor__column">
          <div class="editor__tabs">
            <button onClick={this.handleButtonClick} id="base">
              Base
            </button>
            <button onClick={this.handleButtonClick} id="aquila">
              Aquila
            </button>
            <button onClick={this.handleButtonClick} id="leftPauldren">
              Left Pauldren
            </button>
            <button onClick={this.handleButtonClick} id="rightPauldren">
              Right Pauldren
            </button>
            <button onClick={this.handleButtonClick} id="pauldrenBorder">
              Pauldren Border
            </button>
            <button onClick={this.handleButtonClick} id="eyes">
              Eyes
            </button>
          </div>

          <div class="editor__swatches">{paintSwatches}</div>
        </div>
      </div>
    );
  }
}

export default Creator;
