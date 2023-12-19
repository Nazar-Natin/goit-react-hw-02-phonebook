import React from 'react';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
};

export default Filter;
