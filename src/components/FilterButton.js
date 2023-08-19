import React from "react";

function FilterButton({ filterGoodDogs, setFilterGoodDogs }) {
  return (
    <div id="filter-div">
      <button
        id="good-dog-filter"
        onClick={() => setFilterGoodDogs(!filterGoodDogs)}
      >
        {`Filter good dogs: ${filterGoodDogs ? "ON" : "OFF"}`}
      </button>
    </div>
  );
}

export default FilterButton;
