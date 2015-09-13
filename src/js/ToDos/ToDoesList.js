/** @jsx React.DOM */
(function() {
    'use strict';

    var states = require('./../Managers/States');
    var ToDoItem = require('./ToDoItem');
    var Counter = require('./Counter');
    var ToDoInput = require('./ToDoInput');

    var ToDoesList = React.createClass({

        getInitialState: function() {
            var state = localStorage.getItem('state');
            var isArchive = localStorage.getItem('isArchive') === 'true';
            if ([states.ALL, states.INCOMPLETE, states.COMPLETE].indexOf(state) === -1) {
                state = states.ALL;
            }
            return {
                type: state,
                isArchive: isArchive
            };
        },

        componentDidMount: function() {
            this.props.manager.on('change', function(task) {
                if (this.state.type !== states.ALL && this.state.type !== task.status) {
                    this.forceUpdate();
                }
                if (this.state.isArchive !== task.isArchive) {
                    this.forceUpdate();
                }
            }.bind(this));
            this.props.manager.on('add', function() {this.forceUpdate()}.bind(this));
            this.props.manager.on('remove', function() {this.forceUpdate()}.bind(this));
        },

        handleAll: function() {
            this.setState({
                type: states.ALL,
                isArchive: false
            });
            localStorage.setItem('state', states.ALL);
            localStorage.setItem('isArchive', 'false');
        },

        handleActive: function() {
            this.setState({
                type: states.INCOMPLETE,
                isArchive: false
            });
            localStorage.setItem('state', states.INCOMPLETE);
            localStorage.setItem('isArchive', 'false');
        },

        handleComplete: function() {
            this.setState({
                type: states.COMPLETE,
                isArchive: false
            });
            localStorage.setItem('state', states.COMPLETE);
            localStorage.setItem('isArchive', 'false');
        },

        handleArchive: function() {
            this.setState({
                isArchive: true
            });
            localStorage.setItem('isArchive', 'true');
        },

        render: function() {
            var tasks = this.props.manager.filter(this.state.type, this.state.isArchive);
            var tasksItems = tasks.map(function(item) {
                return (
                    <ToDoItem key={ item.id } task={ item }/>
                );
            });

            var main;
            if (tasks.length) {
                main = (
                    <div className="tasks-list">
                        {tasksItems}
                    </div>
                );
            }

            return (
                <div>
                    <ToDoInput manager={this.props.manager}/>
                    { main }
                    <div className="control-group">
                        <Counter manager={this.props.manager}/>
                        <span className="control-group__buttons">
                            <span className="control-group__item">
                                <button className={'link-button ' + (this.state.type === states.ALL && !this.state.isArchive ? 'link-button_active' : '')}
                                        onClick={this.handleAll}>
                                    All
                                </button>
                            </span>
                            <span className="control-group__item">
                                <button className={'link-button ' + (this.state.type === states.INCOMPLETE && !this.state.isArchive ? 'link-button_active' : '')}
                                        onClick={this.handleActive}>
                                    Active
                                </button>
                            </span>
                            <span className="control-group__item">
                                <button className={'link-button ' + (this.state.type === states.COMPLETE && !this.state.isArchive ? 'link-button_active' : '')}
                                        onClick={this.handleComplete}>
                                    Complete
                                </button>
                            </span>
                            <span className="control-group__item">
                                <button className={'link-button ' + (this.state.isArchive ? 'link-button_active' : '')}
                                        onClick={this.handleArchive}>
                                    Archive
                                </button>
                            </span>
                        </span>
                    </div>
                </div>
            );
        }
    });

    module.exports = ToDoesList;
})();
