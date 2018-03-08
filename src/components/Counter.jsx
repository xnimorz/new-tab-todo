import React, { PureComponent } from "react";
import styled from "styled-components";

const El = styled.div``;

class Counter extends PureComponent {
  render() {
    const { count } = this.props;
    return <El>{`${count} task${count > 1 ? "s" : ""} left`}</El>;
  }
}

export default Counter;
