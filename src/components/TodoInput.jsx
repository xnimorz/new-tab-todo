import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { add } from "../actions/todos";

import { ENTER_KEY } from "../constants/keyboard";
import { ACTIVE, COMPLETE, ARCHIVE } from "../constants/view";

import FlatButton from "./FlatButton";
import Icon from "./icon";

const El = styled.div`
  border-bottom: 1px solid #979797;
  padding-left: 5px;
  display: flex;
  align-items: center;
  font-size: 0;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  flex: 1 0 auto;
`;

class TodoInput extends PureComponent {
  addTodo = () => {
    const { add, view } = this.props;

    const value = this.input.value.trim();

    if (!value) {
      return false;
    }

    add({
      text: value,
      status: view === COMPLETE ? COMPLETE : ACTIVE,
      isArchive: view === ARCHIVE
    });

    this.input.value = "";

    return true;
  };

  addTodoOrFocus = () => {
    if (!this.addTodo()) {
      this.input.focus();
    }
  };

  addTodoOnEnter = e => {
    if (e.which === ENTER_KEY) {
      this.addTodo();
    }
  };

  getInput = el => {
    this.input = el;
  };

  render() {
    return (
      <El>
        <FlatButton onClick={this.addTodoOrFocus}>
          <Icon kind="add" />
        </FlatButton>
        <Input
          innerRef={this.getInput}
          onKeyDown={this.addTodoOnEnter}
          placeholder="I want to..."
          autoFocus={true}
        />
      </El>
    );
  }
}

export default connect(
  state => ({
    view: state.view
  }),
  {
    add
  }
)(TodoInput);
