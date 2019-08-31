import React from "react";
import { List, Avatar } from "antd";
import PropTypes from "prop-types";
import { ImageMap } from "./imageMap";

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
    color: "black"
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={suggestions}
      renderItem={item => (
        <List.Item style={listStyle}>
          <List.Item.Meta
            avatar={<Avatar src={ImageMap[item.name]} />}
            title={
              <a style={{ color: "white" }} onClick={() => onClick(item)}>
                <span style={{ color: "black" }}>{item.name}</span>
                <span style={{ color: "grey" }}>{item.distance}</span>
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
