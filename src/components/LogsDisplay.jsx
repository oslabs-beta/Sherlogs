import React, { useState, useEffect } from 'react';

function LogsDisplay() {
  const [logs, setLogs] = useState('');

  const getAllLog = async () => {
    const data = await fetch('http://localhost:3300/apiv1/log/getAllLogs', {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    });
    const allLogs = await data.json();
    console.log(allLogs);

    if (allLogs.status === true) {
      setLogs(allLogs.all);
    }
  };

  useEffect(getAllLog, []);

  return <div className='display-all-log'>{/* <p>{logs}</p> */}</div>;
}

export default LogsDisplay;
