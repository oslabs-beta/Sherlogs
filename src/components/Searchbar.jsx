import React, { useState, useEffect } from 'react';

const Searchbar = ({ setQuery }) => {
  const onChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div className='m-5 w-1/2'>
      <input
        placeholder='Search logs'
        type='text'
        className='w-full bg-white h-9  rounded-md shadow shadow-dark placeholder:text-gray placeholder:pl-3'
        onChange={onChange}></input>
    </div>
  );
};

export default Searchbar;
