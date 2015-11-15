import React, { Component } from 'react'

var ENTER_KEY = 13;

class User extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            type: 'text'
        };
    }

    handleLinkClick() {
        this.setState({
            type: 'input'
        });
    }

    acceptChanges(e) {
        if (e.which === ENTER_KEY) {
            var newName = e.target.value;
            this.setState({
                type: 'text'
            });
            const { changeNameUser } = this.props;
            changeNameUser(newName);
        }
    }

    handleBlur(e) {
        var newName = e.target.value;
        this.setState({
            type: 'text'
        });
        const { changeNameUser } = this.props;
        changeNameUser(newName);
    }

    renderText(name) {
        return (
            <input onKeyUp={this.acceptChanges} onBlur={this.handleBlur} value={name} autofocus={ true }/>
        )
    }

    renderLink(name) {
        return (
            <span className='link' onClick={this.handleLinkClick}>{name}</span>
        )
    }

    render() {
        const { name } = this.props;
        var inputPart;
        if (this.state.type === 'text') {
            inputPart = this.renderText(name === 'user' ? '' : name);
        } else {
            inputPart = this.renderLink(name);
        }

        return (
            <div className="user">
                Hello, <span className='user__name'>{inputPart}</span>
            </div>
        )
    }
}

export default User;
