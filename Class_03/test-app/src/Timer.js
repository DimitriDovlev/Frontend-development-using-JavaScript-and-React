import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { isDone: false, firstName: props.firstName }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (Math.floor(new Date(this.props.dateTime).getTime() / 1000) > Math.floor(new Date("Sat Jun 19 2022 11:50:00").getTime() / 1000)) {
    //         console.log("GREATER");

    //         if (!this.state.isDone) {
    //             this.setState({ isDone: true });
    //         }
    //     }
    // }
    render() {
        return (
            <div>
                <h1>{this.props.firstName}</h1>
                <p>
                    {!this.state.isDone
                        ? this.props.dateTime.toLocaleTimeString()
                        : "FINISHED"}
                </p>
            </div>
        );
    }
}

export default Timer;