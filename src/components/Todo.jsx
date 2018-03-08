import React, { PureComponent } from "react";
import styled from "styled-components";

import { COMPLETE } from "../constants/view";

import Icon from "./icon";
import Checkbox from "./checkbox";
import FlatButton from "./FlatButton";

const TodoRemove = styled.div`
  display: none;
`;

const El = styled.div`
  font-size: 16px;
  border-bottom: 1px solid #e7e0e0;
  position: relative;
  min-height: 45px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }

  &:hover ${TodoRemove} {
    display: block;
  }
`;

const Text = styled.span`
  word-wrap: break-word;
  position: relative;
  top: -1px;
`;

class Todo extends PureComponent {
  toggleTodo = () => {
    const { todo, incomplete, complete } = this.props;

    if (todo.status === COMPLETE) {
      incomplete(todo.id);
    } else {
      complete(todo.id);
    }
  };

  removeTodo = () => {
    const { todo, remove, archive } = this.props;

    if (todo.isArchive) {
      remove(todo.id);
    } else {
      archive(todo.id);
    }
  };

  urlify(text) {
    var urls = [];
    text.replace(/(https?:\/\/[^\s]+)/g, function(url) {
      urls.push({
        text: url,
        type: "url"
      });
    });
    var parts = [
      {
        text: text,
        type: "text"
      }
    ];
    if (urls.length > 0) {
      urls.forEach(function(item) {
        var index = parts.length - 1;
        if (parts[index].type === "text") {
          var text = parts[index].text;
          var urlOffset = text.indexOf(item.text);
          var cashedText = parts[index].text;
          parts[index].text = cashedText.slice(0, urlOffset);
          parts.push(item);
          parts.push({
            text: cashedText.slice(urlOffset + item.text.length),
            type: "text"
          });
        }
      });
    }

    return (
      <Text>
        {parts.map(function(item, index) {
          if (item.type === "text") {
            return <span key={index}>{item.text}</span>;
          }
          return (
            <a key={index} target="_blank" href={item.text}>
              {item.text}
            </a>
          );
        })}
      </Text>
    );
  }

  render() {
    const { todo } = this.props;

    const data = this.urlify(todo.text);

    return (
      <El>
        <Checkbox checked={todo.status === COMPLETE} onChange={this.toggleTodo}>
          {data}
        </Checkbox>
        <TodoRemove>
          <FlatButton onClick={this.removeTodo}>
            <Icon kind="remove" />
          </FlatButton>
        </TodoRemove>
      </El>
    );
  }
}

export default Todo;
