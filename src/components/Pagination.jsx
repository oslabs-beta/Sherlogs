import React, { useState } from 'react';

function Pagination({data, RenderComponent, pageLimit, dataLimit}) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(page => page + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(page => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return(
    <div>
      {/* pagination menu */}
      <div className='pagination'>
        <div className='flex justify-end'>
          <p>Showing results {currentPage * dataLimit - dataLimit + 1} to {currentPage * dataLimit}</p>
          
          {currentPage === 1 ? '' : (
            <button 
              onClick={goToPrevPage}
              className='px-2'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
              </svg>
            </button>    
          )}
        
          {/* show page numbers */}
          {/* {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))} */}

          {currentPage === pages ? '' : (
            <button
              onClick={goToNextPage}
              className='mx-2'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
            </button>
          )}

        </div>
      </div>
      
      <div className='dataContainer border-2 border-ltGray bg-white'>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} log={d}/>
        ))}
      </div>
    </div>
  );
}

export default Pagination;