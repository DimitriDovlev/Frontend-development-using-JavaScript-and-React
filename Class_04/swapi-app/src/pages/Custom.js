import React, { Component } from "react";

class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "INIT",
      isVisible: true,
    };
  }

  handleShowClick = () => {
    // console.log(something);
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.isVisible && <h2>{this.state.title}</h2>}
        <button onClick={() => this.handleShowClick()}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
        <input
          type="text"
          onChange={this.handleTitleChange}
          value={this.state.title}
        />
      </div>
    );
  }
}

export default Custom;
