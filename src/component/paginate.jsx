import "../index.css";
import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <Link
            className="prev"
            to={currentPage - 1}
            onClick={() => paginate(currentPage - 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="paginationItem">
            <Link
              onClick={() => paginate(number)}
              to={number}
              className={`page-link ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link
            className="next"
            to={currentPage + 1}
            onClick={() => paginate(currentPage + 1)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
