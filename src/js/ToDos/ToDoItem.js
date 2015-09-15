/** @jsx React.DOM */
(function() {
    'use strict';

    var states = require('./../Managers/States');

    var ToDoItem = React.createClass({
        getInitialState: function () {
            return {
                status: this.props.task.status
            };
        },

        componentDidMount: function() {
            this.props.task.on('change', this.handleChange.bind(this));
        },

        handleRemove: function () {
            this.props.task.remove();
        },

        handleChange: function() {
            this.setState({
                status: this.props.task.status
            });
        },

        handleCheck: function () {
            this.props.task.toggleComplete();
        },

        render: function () {
            function urlify(text) {
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
                    urls.forEach(function(item) {
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

            var data = urlify(this.props.task.text);

            return (
                <div className="todo-item">
                    <label className="todo-item__label">
                        <input type="checkbox"
                               className="checkbox todo-item__input"
                               onChange={ this.handleCheck }
                               checked={ this.props.task.status ===  states.COMPLETE ? 'checked' : '' }/>
                               { data }
                    </label>
                    <span className="todo-item__remove"
                          onClick={ this.handleRemove }>
                    </span>
                </div>
            );
        }
    });

    module.exports = ToDoItem;

})();