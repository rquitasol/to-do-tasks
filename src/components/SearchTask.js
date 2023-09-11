import React, { useState } from "react";
import debounce from "lodash.debounce";

export const SearchTask = ({
  filteredTasks,
  setFilteredTasks,
  openCreateTask,
  storedTasks,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = debounce((term) => {
    if (term !== "") {
      const filtered = filteredTasks.filter((task) =>
        task.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(storedTasks);
    }
  }, 1000);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const openCreateModal = () => {
    openCreateTask(true);
  };

  return (
    <div>
      <input
        id="searchTerm"
        name="searchTerm"
        type="text"
        onChange={handleSearchChange}
        value={searchTerm}
        placeholder="Search tasks..."
      />
      <button className="btn" onClick={openCreateModal}>
        Create
      </button>
    </div>
  );
};
