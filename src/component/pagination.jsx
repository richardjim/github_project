import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) {
  return (
    <div className="py-2 mt-5">
      <div>
        <p className="text-md text-gray-500">
          Showing
          <span className="font-medium m-1">
            {currentPage * postsPerPage - 10}
          </span>
          to
          <span className="font-medium m-1">
            {" "}
            {currentPage * postsPerPage}{" "}
          </span>
          of
          <span className="font-medium m-1"> {totalPosts} </span>
          results
        </p>
      </div>
      <br />
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            onClick={() => {
              paginateBack();
            }}
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Previous</span>
          </a>

          <a
            onClick={() => {
              paginateFront();
            }}
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Next</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
