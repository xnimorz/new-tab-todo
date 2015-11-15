import React, { Component } from 'react'
import * as states from '../constants/States'

var items = [
    {name: 'All', state: states.ALL},
    {name: 'Active', state: states.INCOMPLETE},
    {name: 'Complete', state: states.COMPLETE},
    {name: 'Archive', state: states.ARCHIVE}
];

class View extends Component {
    constructor(props, context) {
        super(props, context);
    }

    changeView(e) {
        var view = e.currentTarget.getAttributes('data-view');
        this.props.changeView(view);
    }

    render() {
        const { view } = this.props;

        return (
            <div className='view-block'>
                {items.map((item) => {
                    return (
                        <span className='control-group__item'>
                            <button data-view={item.state}
                                    onClick={this.changeView}
                                    className={'link-button' + (item.name == view ? 'link-button_active' : '')} >
                            </button>
                        </span>
                    );
                })}
            </div>
        )
    }
}

export default View;
