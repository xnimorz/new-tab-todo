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
        var view = e.currentTarget.getAttribute('data-view');
        this.props.changeView(view);
    }

    render() {
        const { view } = this.props;

        return (
            <div className='view-block'>
                {items.map((item, index) => {
                    return (
                        <span key={index} className='control-group__item'>
                            <button data-view={item.state}
                                    onClick={this.changeView.bind(this)}
                                    className={'link-button ' + (item.state == view ? 'link-button_active' : '')} >
                                { item.name }
                            </button>
                        </span>
                    );
                })}
            </div>
        )
    }
}

export default View;
