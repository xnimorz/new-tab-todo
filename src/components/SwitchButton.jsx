import React, { PureComponent } from "react";
import styled from "styled-components";

import FlatButton from "./FlatButton";

const El = styled.span`
  display: inline-block;
  margin-right: 10px;
`;

const Text = styled.span`
  color: ${props => (props.active ? "#333" : "#9B9B9B")};
`;

class SwitchButton extends PureComponent {
  changeView = () => {
    const { kind, active, changeView } = this.props;

    if (active) {
      return;
    }

    changeView(kind);
  };

  render() {
    const { children, active } = this.props;

    return (
      <El>
        <FlatButton onClick={this.changeView}>
          <Text active={active}>{children}</Text>
        </FlatButton>
      </El>
    );
  }
}

export default SwitchButton;
