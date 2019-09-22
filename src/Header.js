import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Power Armour Studio</h1>
        <button onClick={this.props.logInButton}>Create</button>
      </header>
    );
  }
}

export default Header;
