import React, { Component } from 'react'

class Timer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            timer: new Date()
        };
        setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        this.setState({timer: new Date()});
    }

    formatNumber(time) {
        return time > 9 ? time : '0' + time;
    }

    render() {
        const { timer } = this.state;
        return (
            <div className="time">
                {this.formatNumber(timer.getHours())}:{this.formatNumber(timer.getMinutes())}
                <span className="time__seconds">: {this.formatNumber(timer.getSeconds())}</span>
            </div>
        )
    }
}

export default Timer;
