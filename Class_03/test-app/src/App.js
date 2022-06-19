import "./App.css";
import React, { Component } from "react";
import Counter from "./Counter"
import Timer from "./Timer";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      newDate: new Date(),
      firstName: "Name"
    };
  }

  // componentWillMount() { } // DEPRECATED

  componentDidMount() {
    console.log(this);
    this.dateInterval = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000);
  }

  // componentWillUpdate() { } //DEPRECATED

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState);
  //   if (prevProps.date !== this.props.date) {
  //     return true;
  //   }
  //   console.log("SNAPSHOT BEFORE UPDATE");
  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   // console.log("PrevProps: ", prevProps, "prevState", prevState);
  //   // console.log("SnapShot", snapshot);
  //   // if (snapshot) {
  //   //   console.log("DATE HAS CHANGED");
  //   // }
  //   // console.log("COMPONENT DID UPDATE");
  // } // will execute after every render except first (state or props changes)

  componentWillUnmount() {
    clearInterval(this.dateInterval);
  } // will execute right before removing the component from the UI


  render() {
    return (
      <div>
        <Timer dateTime={this.state.date} firstName={this.state.firstName} />
        <Counter />
      </div>
    );
  }
}

export default App;

