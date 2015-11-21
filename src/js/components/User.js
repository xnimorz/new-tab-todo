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
            <input onKeyDown={this.acceptChanges.bind(this)}
                   onBlur={this.handleBlur.bind(this)}
                   defaultValue={name}
                   ref={(c) => setTimeout(() => {c && c.focus();}, 0)}
                   autofocus={ true }/>
        )
    }

    renderLink(name) {
        return (
            <span className='link'
                  onClick={this.handleLinkClick.bind(this)}>{name}</span>
        )
    }

    render() {
        const { user } = this.props;
        var inputPart;
        if (this.state.type === 'text') {
            inputPart = this.renderLink(user || 'user');
        } else {
            inputPart = this.renderText(user === 'user' ? '' : user);
        }

        return (
            <div className="user">
                Hello, <span className='user__name'>{inputPart}</span>
            </div>
        )
    }
}

export default User;
