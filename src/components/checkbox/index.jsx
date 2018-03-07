import React, { PureComponent } from "react";
import styled from "styled-components";

import checkbox from "./checkbox.svg";
import complete from "./complete.svg";

const El = styled.label`
  cursor: pointer;
  display: block;
  padding: 8px 0;
  display: flex;
  align-items: baseline;
`;

const Input = styled.input`
  background: url(${props => (props.checked ? complete : checkbox)}) 100% 100%
    no-repeat;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  position: relative;
  top: 2px;
  cursor: pointer;
  margin-right: 10px;
  vertical-align: top;
  flex: 0 0 auto;
`;

class Checkbox extends PureComponent {
  render() {
    const { children, checked, onChange } = this.props;

    return (
      <El>
        <Input type="checkbox" onChange={onChange} checked={checked} />
        {children}
      </El>
    );
  }
}

export default Checkbox;
