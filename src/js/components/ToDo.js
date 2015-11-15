import React, { Component } from 'react'
import * as states from '../constants/States'

class ToDo extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleCheck() {
        const { todo, completeTodo, incompleteTodo } = this.props;
        if (todo.status === states.COMPLETE) {
            incompleteTodo(todo.key);
        } else {
            completeTodo(todo.key);
        }
    }

    handleRemove() {
        const { todo, archiveTodo } = this.props;
        archiveTodo(todo.key);
    }

    urlify(text) {
        var urls = [];
        text.replace(/(https?:\/\/[^\s]+)/g, function(url) {
            urls.push({
                text: url,
                type: 'url'
            });
        });
        var parts = [{
            text: text,
            type: 'text'
        }];
        if (urls.length > 0) {
            urls.forEach(function (item) {
                var index = parts.length - 1;
                if (parts[index].type === 'text') {
                    var text = parts[index].text;
                    var urlOffset = text.indexOf(item.text);
                    var cashedText = parts[index].text;
                    parts[index].text = cashedText.slice(0, urlOffset);
                    parts.push(item);
                    parts.push({
                        text: cashedText.slice(urlOffset + item.text.length),
                        type: 'text'
                    });
                }
            });
        }

        return (
            <span className="todo-item__text">
                { parts.map(function(item) {
                    if (item.type === 'text') {
                        return (
                            <span>{ item.text }</span>
                        );
                    }
                    return (
                        <a target="_blank" href={item.text}>{item.text}</a>
                    );
                })}
            </span>
        )
    }

    render() {
        const { todo } = this.props;

        var data = urlify(todo.name);

        return (
            <div className="todo-item">
                <label className="todo-item__label">
                    <input type="checkbox"
                           className="checkbox todo-item__input"
                           onChange={ this.handleCheck }
                           checked={ todo.status ===  states.COMPLETE ? 'checked' : '' }/>
                    { data }
                </label>
                <span className="todo-item__remove"
                      onClick={ this.handleRemove }>
                </span>
            </div>
        );
    }
}

export default ToDo;
