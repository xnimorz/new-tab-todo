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
            return (
                <div className="todo-item">
                    <label className="todo-item__label">
                        <input type="checkbox"
                               className="checkbox todo-item__input"
                               onChange={ this.handleCheck }
                               checked={ this.props.task.status ===  states.COMPLETE ? 'checked' : '' }/>
                               <span className="todo-item__text">
                                   { this.props.task.text }
                               </span>
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