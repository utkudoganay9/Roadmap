import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Classes = () => {
  const cardsData = [
 
  ];

  const cardsPerPage = 5;

 
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const currentCards = cardsData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='groups'>
      <h3 className="text-4xl font-bold  ml-60 mt-20">Dersler</h3>
      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg mt-12 ml-60">
        <table className="w-full text-xs sm:text-sm text-left rtl:text-right text-black dark:text-black">
        </table>
        <div className="flex justify-end mt-4">
          <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <FaAngleLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => changePage(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === index + 1 ? 'bg-indigo-600 text-white' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <FaAngleRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Classes;
