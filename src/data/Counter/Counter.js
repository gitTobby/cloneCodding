import React from "react";
import { Fragment } from "react";

// const Counter = () => {}

class Counter extends React.Component {
    state = {
        count: 0,
    }

    // add = () => {
    //     this.setState({ count : this.state.count + 1 });
    // }
    add = () => {
        this.setState(current => ({
            count: this.state.count + 1,
        }));
    };


    // minus = () => {
    //     this.setState({ count : this.state.count - 1 });
    // }
    minus = () => {
        this.setState(current => ({
            count: this.state.count - 1,
        }));
    }

    render() {
        return (
            <Fragment>
                <h1>The number is: {this.state.count}</h1>
                <button type="button" onClick={this.add}>Add</button>
                <button type="button" onClick={this.minus}>Minus</button>
            </Fragment>
        );
    }
}

export default Counter;