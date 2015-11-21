import React, { Component } from 'react'

class Counter extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { count } = this.props;

        return (
            <span className="counter">
                { count }
                { count === 1 ? ' task ' : ' tasks '}
                left
            </span>
        )
    }
}

export default Counter;
