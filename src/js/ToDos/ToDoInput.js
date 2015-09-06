/** @jsx React.DOM */
(function() {
    'use strict';

    var ENTER_KEY = 13;

    var ToDoInput = React.createClass({
        getInitialState: function () {
            return {};
        },

        handleAddButton: function() {
            this.addTodo();
        },

        handleKeyDown: function(event) {
            if (event.keyCode !== ENTER_KEY) {
                return;
            }

            event.preventDefault();

            this.addTodo();
        },

        addTodo: function() {
            var val = React.findDOMNode(this.refs.todoInput).value.trim();
            if (val) {
                this.props.manager.addTodo(val);
                React.findDOMNode(this.refs.todoInput).value = '';
            }
        },

        render: function () {
            return (
                <div className="tasks-input">
                    <button className="tasks-input__add"
                            onClick={ this.handleAddButton }></button>
                    <input className="tasks-input__input"
                           ref="todoInput"
                           placeholder="I want to..."
                           onKeyDown={ this.handleKeyDown }
                           autoFocus={ true }/>
                </div>
            );
        }
    });

    module.exports = ToDoInput;

})();
