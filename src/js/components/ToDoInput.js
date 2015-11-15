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
            var newName = e.target.value;
            this.setState({
                type: 'text'
            });
            const { changeNameUser } = this.props;
            changeNameUser(newName);
        }
    }

    render() {
        return (
            <div className='task-input'>
                <button className='task-input__add' onClick={this.handleClick}></button>
                <input className='tasks-input__input'
                       ref={(c) => this._input = c}
                       onKeyDown={this.handleInput}
                       placeholder="I want to..."
                       autoFocus={ true } />
            </div>
        )
    }
}

export default ToDoInput;
