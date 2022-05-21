import React from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
  function handleSearchChange(event){
    onSearchChange(event.target.value.toLowerCase())
  }
  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={handleSearchChange} value={search}/>
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
