import React from 'react';

function Pagination({ totalCount, currentPage, perPage, onPageChange }) {
    const totalPages = Math.ceil(totalCount / perPage);

    const handlePrevPage = () => {
        if(currentPage > 1){
           onPageChange(currentPage - 1);
        }
    };
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };


    return (
       <div className="flex justify-center mt-4">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className={`px-4 py-2 bg-blue-300 hover:bg-blue-500 text-white rounded mr-2 disabled:opacity-50`}>
              Previous
           </button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`px-4 py-2 bg-blue-300 hover:bg-blue-500 text-white rounded ml-2 disabled:opacity-50`}>
              Next
           </button>
        </div>
    )

}
export default Pagination;