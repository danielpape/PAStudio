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
        successor: "unknown",
        chapterName: ""
      },
      currentlyEditing: "base"
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleColourClick = this.handleColourClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      data: {
        base: this.state.data.base,
        chestPlate: this.state.data.chestPlate,
        aquila: this.state.data.aquila,
        leftPauldren: this.state.data.leftPauldren,
        rightPauldren: this.state.data.rightPauldren,
        pauldrenBorder: this.state.data.pauldrenBorder,
        belt: this.state.data.belt,
        eyes: this.state.data.eyes,
        chapterName: this.state.data.chapterName,
        successor: this.state.data.successor,
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit(event) {
    console.log("Submitted " + JSON.stringify(this.state.data));
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
        pauldrenBorder: this.state.data.pauldrenBorder,
        belt: this.state.data.belt,
        eyes: this.state.data.eyes,
        chapterName: this.state.data.chapterName,
        successor: this.state.data.successor,
        [this.state.currentlyEditing]: event.target.style.backgroundColor
      }
    });
  }

  render() {
    const baseSwatchValues = Object.values(citadelPaint.base);
    const baseSwatches = baseSwatchValues.map(value => (
      <div
        onClick={this.handleColourClick}
        colour={value}
        class="editor__swatch"
      >
        <PaintSwatch colour={value} />
      </div>
    ));

    const layerSwatchValues = Object.values(citadelPaint.layer);
    const layerSwatches = layerSwatchValues.map(value => (
      <div
        onClick={this.handleColourClick}
        colour={value}
        class="editor__swatch"
      >
        <PaintSwatch colour={value} />
      </div>
    ));

    const metalSwatchValues = Object.values(citadelPaint.metal);
    const metalSwatches = metalSwatchValues.map(value => (
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
          <div class="editor__tabs">
            <button onClick={this.handleButtonClick} id="base">
              Main Colour
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
            <button onClick={this.handleButtonClick} id="belt">
              Belt
            </button>
            <button onClick={this.handleButtonClick} id="eyes">
              Eyes
            </button>
          </div>
        </div>
        <div class="editor__column">
          <h2>Armour Colour</h2>
          <h3>Base</h3>
          <div class="editor__swatches">{layerSwatches}</div>
          <h3>Layer</h3>
          <div class="editor__swatches">{baseSwatches}</div>
          <h3>Metal</h3>
          <div class="editor__swatches">{metalSwatches}</div>
          <h2>Chapter Info</h2>
          <h3>Chapter Name</h3>
          <input
            type="text"
            value={this.state.data.chapterName}
            name="chapterName"
            placeholder="Your chapter's name"
            onChange={this.handleChange}
          />
          <h3>Successor</h3>
          <select
            value={this.state.data.successor}
            onChange={this.handleChange}
            name="successor"
          >
            <option value="unknown">Unknown</option>
            <option value="darkAngels">Dark Angels</option>
            <option value="whiteScars">WhiteScars</option>
            <option value="spaceWolves">Space Wolves</option>
            <option value="imperialFists">Imperial Fists</option>
            <option value="bloodAngels">Blood Angels</option>
            <option value="ironHands">Iron Hands</option>
            <option value="ultramarines">Ultramarines</option>
            <option value="salamanders">Salamanders</option>
            <option value="ravenGuard">Raven Guard</option>
          </select>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Creator;
