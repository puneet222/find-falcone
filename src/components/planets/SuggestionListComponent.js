import React from "react";
import { List, Avatar } from "antd";
import PropTypes from "prop-types";

const SuggestionListComponent = ({ suggestions, selectOption }) => {
  const onClick = item => {
    selectOption(item);
  };

  const listStyle = {
    margin: "0 auto",
    height: "3.5em",
    border: "black 2px solid",
    background: "white",
    borderRadius: "11px",
    width: "49%",
    color: "black"
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={suggestions}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={
              <a style={{ color: "white" }} onClick={() => onClick(item)}>
                {item.name}
              </a>
            }
          />
        </List.Item>
      )}
    />
  );
};

SuggestionListComponent.propTypes = {
  suggestions: PropTypes.array,
  selectOption: PropTypes.func.isRequired
};

export default SuggestionListComponent;
