import React, { useState } from "react";
import debounce from "lodash.debounce";

export const SearchTask = ({ filteredTasks, setFilteredTasks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = debounce((term) => {
    const filtered = filteredTasks.filter((task) =>
      task.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, 2000);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <div>
      <h2>SearchTask</h2>
      <input
        id="searchTerm"
        name="searchTerm"
        type="text"
        onChange={handleSearchChange}
        value={searchTerm}
        placeholder="Search tasks..."
      />
    </div>
  );
};
