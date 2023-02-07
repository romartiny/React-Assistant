import React, {useState} from "react";

class ClassCounter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.inc = this.inc.bind(this);
        this.deinc = this.deinc.bind(this);

    }

    inc() {
        this.setState({count: this.state.count + 1})
    }

    deinc() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.inc}>Increment</button>
                <button onClick={this.deinc}>Increment</button>
            </div>
        );
    }
}

export default ClassCounter;