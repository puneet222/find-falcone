import React, { useState, Fragment } from "react";
import SuggestionListComponent from "./SuggestionListComponent";
import { Input } from "antd";
import PropTypes from "prop-types";

const AutoComplete = ({ suggestions, onPlanetSelect }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const onChange = e => {
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setFilteredSuggestions(filteredSuggestions);
    setUserInput(userInput);
    setShowSuggestions(true);
  };

  const selectOption = planet => {
    setFilteredSuggestions([]);
    setUserInput("");
    setShowSuggestions(false);
    onPlanetSelect(planet);
  };

  return (
    <Fragment>
      <Input
        placeholder="Search Planets..."
        type="text"
        onChange={onChange}
        value={userInput}
      />
      {showSuggestions && userInput && (
        <SuggestionListComponent
          suggestions={filteredSuggestions}
          selectOption={selectOption}
        />
      )}
    </Fragment>
  );
};

AutoComplete.propTypes = {
  suggestion: PropTypes.array,
  onPlanetSelect: PropTypes.func.isRequired
};

export default AutoComplete;
