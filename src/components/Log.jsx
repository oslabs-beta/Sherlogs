import React from 'react';

function Log({ log }) {
  return(
    <div key={log._id} className = 'border-b-2 inline-flex w-full'>
      <p className='shrink-0'>{log.timestamp}</p>
      <p className='mx-3'>{log.level}</p>
      <p>{log.message}</p>
    </div>
  );
}

export default Log;
