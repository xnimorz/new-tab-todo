import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import FlatButton from "./FlatButton";

import { ENTER_KEY } from "../constants/keyboard";

import { rename } from "../actions/user";

const El = styled.div``;

const Name = styled.span`
  display: inline-block;
  margin-left: 5px;
`;

const Input = styled.input`
  padding-left: 0;
`;

class User extends PureComponent {
  state = { type: "text" };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.type === "text" && this.state.type === "input") {
      this.input.focus();
    }
  }

  changeType = () => {
    this.setState({ type: "input" });
  };

  saveName = () => {
    this.props.rename(this.input.value);
    this.setState({
      type: "text"
    });
  };

  saveNameOnEnter = e => {
    if (e.which === ENTER_KEY) {
      this.saveName();
    }
  };

  getInput = el => {
    this.input = el;
  };

  renderInput() {
    const { user } = this.props;

    const defaultValue = user === "user" ? "" : user;

    return (
      <Input
        onKeyDown={this.saveNameOnEnter}
        onBlur={this.saveName}
        defaultValue={defaultValue}
        innerRef={this.getInput}
        autoFocus={true}
      />
    );
  }

  renderFlatButton() {
    const { user } = this.props;
    return (
      <FlatButton onClick={this.changeType} type="button">
        {user}
      </FlatButton>
    );
  }

  render() {
    const { user } = this.props;
    const { type } = this.state;

    let inputPart;
    if (type === "input") {
      inputPart = this.renderInput();
    } else {
      inputPart = this.renderFlatButton();
    }

    return (
      <El>
        Hello,
        <Name>{inputPart}</Name>
      </El>
    );
  }
}

export default connect(state => ({ user: state.user }), { rename })(User);
