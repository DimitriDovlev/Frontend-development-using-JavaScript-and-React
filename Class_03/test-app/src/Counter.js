import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, firstName: "Name" }
    }

    handleCounterClick = () => {
        this.setState((prevState, prevProps) => ({
            counter: prevState.counter + 1,
        }))
    }


    render() {
        // console.log(this.state);
        return (
            <div>
                <h4>Counter: {this.state.counter}</h4>
                <button onClick={this.handleCounterClick}>Increase</button>
            </div>
        );
    }
}

export default Counter;