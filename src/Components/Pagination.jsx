// src/components/Pagination.jsx
import React from 'react';

function Pagination({ currentPage, totalResults, onPageChange }) {
  const totalPages = Math.ceil(totalResults /12);  

  return (
    <div className="flex items-center justify-center mt-6 space-x-4 text-white">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'
        }`}
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
