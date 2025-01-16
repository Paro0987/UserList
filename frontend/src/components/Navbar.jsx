import React, { useState } from "react";
import '../App.css'; 

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-home">
          <a href="/" className="navbar-link">
            Home
          </a>
        </div>
        <h1>User List</h1>
        {/* Search Bar */}
        <div className="navbar-search">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by name"
            className="search-input"
          />
          <button
            onClick={handleSearchClick}
            className="search-button"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
