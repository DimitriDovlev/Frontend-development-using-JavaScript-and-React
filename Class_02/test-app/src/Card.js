import React, { Component } from "react";


class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>TITLE</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Card;