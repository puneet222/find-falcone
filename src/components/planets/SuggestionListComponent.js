import React from "react";
import { List, Avatar } from "antd";
import PropTypes from "prop-types";
import { ImageMap } from "./imageMap";
import "./Planet.css";

const SuggestionListComponent = ({ suggestions, selectOption }) => {
  const onClick = item => {
    selectOption(item);
  };

  return (
    <List
      className="suggestion-list"
      itemLayout="horizontal"
      dataSource={suggestions}
      renderItem={item => (
        <List.Item className="suggestion-list-item">
          <List.Item.Meta
            style={{ paddingLeft: "2%" }}
            avatar={<Avatar src={ImageMap[item.name]} />}
            title={
              <a
                href="#!"
                style={{ color: "white" }}
                onClick={() => onClick(item)}
              >
                <span style={{ color: "black" }}>{item.name}</span>
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
