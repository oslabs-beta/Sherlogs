import React from 'react';

function Log({ log }) {
  return (
    <div
      key={log._id}
      className='grid grid-cols-10 border-b-2 border-less-dark'
    >
      <p className='shrink-0 text-lighter-blue col-span-2 pl-2'>{log.timestamp}</p>
      <div className='justify-center content-center'>
        <p className='text-dark bg-lighter-blue inline-block px-3 rounded-full text-sm'>{log.level}</p>
      </div>
      <p className='text-lighter-blue col-span-7'>{log.message}</p>
    </div>
  );
}

export default Log;
