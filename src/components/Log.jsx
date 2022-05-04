import React from 'react';

function Log({ log }) {

  let levelColor = 'bg-secondary';
  if(log.level === 'error' || log.level === 'crit' || log.level === 'alert' || log.level === 'emerg') levelColor = 'bg-red';
  if(log.level === 'warn') levelColor = 'bg-yellow';
  if(log.level === 'debug') levelColor = 'main';

  return (
    <div key={log._id} className='grid grid-cols-10 border-b-2 border-ltGray'>
      <p className='shrink-0 text-gray col-span-2 pl-2 text-sm'>
        {log.timestamp}
      </p>
      <div className='flex justify-center items-start'>
        <p className={`${levelColor} text-white inline-block px-3 rounded-full text-sm my-1`}>
          {log.level}
        </p>
      </div>
      <p className='text-gray col-span-7 text-sm'>{log.message}</p>
    </div>
  );
}

export default Log;
