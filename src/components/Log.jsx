import React from 'react';

function Log({ log }) {
  return (
    <div
      key={log._id}
      className='border-b-2 border-less-dark inline-flex w-full'>
      <p className='shrink-0 text-teal'>{log.timestamp}</p>
      <p className='mx-3 text-red'>{log.level}</p>
      <p className='text-lighter-blue'>{log.message}</p>
    </div>
  );
}

export default Log;
