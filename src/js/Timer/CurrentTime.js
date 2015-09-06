/** @jsx React.DOM */
(function() {
    'use strict';

    var CurrentTime = React.createClass({
        getInitialState: function () {
            return {date: new Date()};
        },

        componentDidMount: function() {
            this.timer = setInterval(this.tick, 1000);
        },

        componentWillUnmount: function() {
            clearInterval(this.timer);
        },

        tick: function() {
            this.setState({date: new Date()});
        },

        formatNumber: function(time) {
            return time > 9 ? time : '0' + time;
        },

        render: function() {

            var minutes = this.formatNumber(this.state.date.getMinutes());
            var hours = this.formatNumber(this.state.date.getHours());


            var currentTime = hours + ':' + minutes;
            var seconds = this.formatNumber(this.state.date.getSeconds());

            return <div className="time">{currentTime}<span className="time__seconds">: {seconds}</span></div>
        }
    });

    module.exports = CurrentTime;
})();
