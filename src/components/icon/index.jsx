import React, { PureComponent } from "react";
import styled from "styled-components";

import add from "./add.svg";
import remove from "./remove.svg";

export default styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;

  background-image: url(${props => (props.kind === "add" ? add : remove)});
`;
