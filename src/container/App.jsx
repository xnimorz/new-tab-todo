import React, { Component } from "react";
import styled from "styled-components";

import Timer from "../components/Timer";
import User from "../components/User";
import Todos from "../components/Todos";

const El = styled.div`
  max-width: 800px;
  margin: 5px auto;
`;

const Greeting = styled.div`
  display: flex;
  color: #333;
  font-size: 24px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

class App extends Component {
  render() {
    return (
      <El>
        <Greeting>
          <User />
          <Timer />
        </Greeting>
        <Todos />
      </El>
    );
  }
}

export default App;
