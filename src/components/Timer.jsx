import React, { PureComponent } from "react";
import styled from "styled-components";

const El = styled.div`
  color: #666;
`;

class Timer extends PureComponent {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate() {
    this.tick();
  }

  tick = () => {
    setTimeout(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  };

  static formatNumber = time => (time > 9 ? time : `0${time}`);

  render() {
    const { time } = this.state;

    return (
      <El>
        {`${Timer.formatNumber(time.getHours())}:${Timer.formatNumber(
          time.getMinutes()
        )}`}
        <span>{`:${Timer.formatNumber(time.getSeconds())}`}</span>
      </El>
    );
  }
}

export default Timer;
