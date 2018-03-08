import React, { PureComponent } from "react";
import styled from "styled-components";

import Counter from "./Counter";
import ViewsSwitcher from "./ViewsSwitcher";

const El = styled.div`
  margin-top: 10px;
  padding-left: 5px;
  font-size: 18px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;

class Footer extends PureComponent {
  render() {
    const { todos } = this.props;

    return (
      <El>
        <Counter count={todos && todos.length} />
        <ViewsSwitcher />
      </El>
    );
  }
}

export default Footer;
