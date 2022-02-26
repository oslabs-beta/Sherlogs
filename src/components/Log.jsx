import React, { Component } from 'react';

function Log({ log }) {
  return(
    <div key={log._id} className = 'log-item'>
      <p>{log.timestamp}</p>
      <p>{log.level}</p>
      <p>{log.message}</p>
    </div>
  );
}

export default Log;
