import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import "./SearchableDropdown.css";

const SearchableDropdown = ({ apiEndpoint, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const loadOptions = async (inputValue) => {
    if (inputValue.length < 2) {
      return [];
    }
    try {
      const response = await axios.get(`${apiEndpoint}?q=${inputValue}`);
      return response.data.map((item) => ({
        label: item.title,
        value: item.title,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const handleChange = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="search-dropdown ">
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        value={selectedOption}
        onChange={handleChange}
        placeholder="Enter a minimum of 2 letters"
        className="search-dropdown"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default SearchableDropdown;
