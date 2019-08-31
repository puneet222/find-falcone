import React, { useState, Fragment } from "react";
import SuggestionListComponent from "./SuggestionListComponent";
import { Input } from "antd";

const AutoComplete = ({ suggestions, onPlanetSelect }) => {
  const [activeSuggestions, setActiveSuggestions] = useState(0);
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
    setActiveSuggestions(0);
  };

  const selectOption = planet => {
    setFilteredSuggestions([]);
    setUserInput("");
    setShowSuggestions(false);
    setActiveSuggestions(0);
    onPlanetSelect(planet);
  };

  return (
    <Fragment>
      <Input type="text" onChange={onChange} value={userInput} />
      {showSuggestions && userInput && (
        <SuggestionListComponent
          suggestions={filteredSuggestions}
          selectOption={selectOption}
        />
      )}
    </Fragment>
  );
};

export default AutoComplete;
