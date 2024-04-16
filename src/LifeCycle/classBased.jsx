import React, { Component } from 'react';

class LifecycleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello!'
        };
    }

    componentWillMount() {
        console.log('Component will mount');
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default LifecycleExample;
