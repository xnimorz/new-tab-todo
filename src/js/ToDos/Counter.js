/** @jsx React.DOM */
(function() {
    'use strict';

    var Counter = React.createClass({

        getInitialState: function() {
            return {
                count: this.props.manager.getIncompleteTasksCount()
            };
        },

        update: function() {
            this.setState({
                count: this.props.manager.getIncompleteTasksCount()
            });
        },

        componentDidMount: function() {
            this.props.manager.on('change', this.update.bind(this));
            this.props.manager.on('add', this.update.bind(this));
            this.props.manager.on('remove', this.update.bind(this));
        },

        render: function() {
            var count = this.state.count;
            return (
                <span className="counter">
                    { count }
                    { count === 1 ? ' task ' : ' tasks ' }
                    left
                </span>
            );
        }
    });

    module.exports = Counter;
})();
