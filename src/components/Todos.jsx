import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { complete, incomplete, remove, archive } from "../actions/todos";
import { ACTIVE, ALL, COMPLETE, ARCHIVE } from "../constants/view";

import Todo from "./Todo";
import Footer from "./Footer";
import TodoInput from "./TodoInput";

const El = styled.div`
  border-bottom: 1px solid #979797;
`;

class Todos extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = { todos: this.computeVisibleTodos(props) };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.todos !== nextProps.todos ||
      this.props.view !== nextProps.view
    ) {
      this.setState({ todos: this.computeVisibleTodos(nextProps) });
    }
  }

  computeVisibleTodos = props => {
    const { todos, view } = props;

    switch (view) {
      case ARCHIVE: {
        return todos.filter(todo => todo.isArchive);
      }
      case COMPLETE: {
        return todos.filter(
          todo => !todo.isArchive && todo.status === COMPLETE
        );
      }
      case ACTIVE: {
        return todos.filter(todo => !todo.isArchive && todo.status === ACTIVE);
      }
      default: {
        return todos.filter(todo => !todo.isArchive);
      }
    }
  };

  render() {
    const { todos } = this.state;
    const { complete, incomplete, remove, archive } = this.props;

    return (
      <div>
        <TodoInput />
        <El>
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              complete={complete}
              incomplete={incomplete}
              remove={remove}
              archive={archive}
            />
          ))}
        </El>
        <Footer todos={todos} />
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos,
    view: state.view
  }),
  {
    complete,
    incomplete,
    remove,
    archive
  }
)(Todos);
