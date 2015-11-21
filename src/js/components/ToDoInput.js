import React, { Component } from 'react'
import { INCOMPLETE } from '../constants/States'

var ENTER_KEY = 13;

class ToDoInput extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleClick() {
        if (!this.addTodo()) {
            this._input.focus();
        }
    }

    addTodo() {
        var val = this._input.value.trim();
        if (val) {
            const { addTodo } = this.props;
            addTodo({
                name: val,
                groupId: 0,
                status: INCOMPLETE,
                dueTime: null,
                isArchive: false
            });
            this._input.value = '';
            return true;
        }
        return false;
    }

    handleInput(e) {
        if (e.which === ENTER_KEY) {
            this.addTodo();
        }
    }

    render() {
        return (
            <div className='tasks-input'>
                <button className='tasks-input__add' onClick={this.handleClick.bind(this)}></button>
                <input className='tasks-input__input'
                       ref={(c) => this._input = c}
                       onKeyDown={this.handleInput.bind(this)}
                       placeholder="I want to..."
                       autoFocus={ true } />
            </div>
        )
    }
}

export default ToDoInput;
