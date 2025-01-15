import React, { useState } from "react";
import "./app.css";

const data = [
  { name: "Liam", age: 25, gender: "Male" },
  { name: "Sophia", age: 32, gender: "Female" },
  { name: "Noah", age: 28, gender: "Male" },
  { name: "Olivia", age: 21, gender: "Female" },
  { name: "Ethan", age: 36, gender: "Male" },
  { name: "Isabella", age: 29, gender: "Female" },
  { name: "James", age: 41, gender: "Male" },
  { name: "Mia", age: 26, gender: "Female" },
  { name: "Benjamin", age: 39, gender: "Male" },
  { name: "Charlotte", age: 23, gender: "Female" },
  { name: "Lucas", age: 31, gender: "Male" },
  { name: "Amelia", age: 28, gender: "Female" },
  { name: "Henry", age: 34, gender: "Male" },
  { name: "Ava", age: 27, gender: "Female" },
  { name: "William", age: 38, gender: "Male" },
  { name: "Ella", age: 22, gender: "Female" },
  { name: "Elijah", age: 30, gender: "Male" },
  { name: "Harper", age: 25, gender: "Female" },
  { name: "Sebastian", age: 37, gender: "Male" },
  { name: "Grace", age: 33, gender: "Female" },
  { name: "Jack", age: 29, gender: "Male" },
  { name: "Lily", age: 20, gender: "Female" },
  { name: "Mason", age: 35, gender: "Male" },
  { name: "Chloe", age: 24, gender: "Female" },
  { name: "Logan", age: 27, gender: "Male" },
  { name: "Victoria", age: 31, gender: "Female" },
  { name: "Daniel", age: 42, gender: "Male" },
  { name: "Hannah", age: 28, gender: "Female" },
  { name: "Matthew", age: 33, gender: "Male" },
  { name: "Sophie", age: 26, gender: "Female" },
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1>Pagination</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
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

export default App;
