import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HomePage = ({ userData }) => {
  const navigate = useNavigate();
  const [sortData, setSortData] = useState(userData || []); // Ensure it's initialized as an empty array
  const [searchQuery, setSearchQuery] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // Handle sorting
  const handleSort = (order) => {
    let sortedData = [...(userData || [])]; // Default to empty array if userData is undefined
    if (order === "asc") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "desc") {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }
    setSortData(sortedData);
    setCurrentPage(1); // Reset to page 1 after sorting
  };

  // Paginate data
  const paginateData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const filteredData = (sortData.length > 0 ? sortData : userData || []).filter((ele) =>
    ele.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1) newPage = 1;
    if (newPage > totalPages) newPage = totalPages;
    setCurrentPage(newPage);
  };

  const currentData = paginateData(filteredData);

  return (
    <div>
      {/* Navbar */}
      <Navbar onSearch={(query) => setSearchQuery(query)} />
      
      {/* Sorting Section */}
      <div className="sort-container">
        <select
          name="sort"
          id="sort"
          onChange={(e) => handleSort(e.target.value)}
          className="sort-select"
        >
          <option value="">Sort by Name</option>
          <option value="asc">Name: A to Z</option>
          <option value="desc">Name: Z to A</option>
        </select>
      </div>

      {/* User Table */}
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user) => (
              <tr
                key={user.id}
                onClick={() => navigate(`/user/${user.id}`, { state: user })}
                style={{ cursor: "pointer" }}
              >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
