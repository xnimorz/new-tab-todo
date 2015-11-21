import React, { Component } from 'react'
import View from './View'
import Counter from './Counter'

class Footer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { view, count, changeView } = this.props;

        return (
            <div className="control-group">
                <Counter count={count} />

                <View view={view} changeView={changeView} />
            </div>
        )
    }
}

export default Footer
