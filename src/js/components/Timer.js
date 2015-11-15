import React, { Component } from 'react'

class Timer extends Component {
    constructor(props, context) {
        super(props, context);
        setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        const { tickTimer } = this.props;
        tickTimer(new Date());
    }

    formatNumber(time) {
        return time > 9 ? time : '0' + time;
    }

    render() {
        const { timer } = this.props;
        return (
            <div className="time">
                {this.formatNumber(timer.getHours())}:{this.formatNumber(timer.getMinutes())}
                <span className="time__seconds">: {this.formatNumber(timer.getSeconds())}</span>
            </div>
        )
    }
}

export default Timer;
