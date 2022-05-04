import React from 'react';

function Log({ log }) {
  return (
    <div key={log._id} className='grid grid-cols-10 border-b-2 border-ltGray'>
      <p className='shrink-0 text-gray col-span-2 pl-2 text-sm'>
        {log.timestamp}
      </p>
      <div className='justify-center content-center'>
        <p className='text-white bg-secondary inline-block px-3 rounded-full text-sm'>
          {log.level}
        </p>
      </div>
      <p className='text-gray col-span-7 text-sm'>{log.message}</p>
    </div>
  );
}

export default Log;
