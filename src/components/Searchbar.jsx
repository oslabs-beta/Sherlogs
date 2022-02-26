import React, { useState, useEffect } from 'react';

const Searchbar = ({setQuery}) => {

  const onChange = (event) => {
    setQuery(event.target.value);
  };
  return(
    <div className='m-5 w-1/2'>
      <input placeholder='Search log messages' type='text' className='border-2 w-full' onChange={onChange}></input>
    </div>
  );
};

export default Searchbar;