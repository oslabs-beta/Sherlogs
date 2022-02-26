import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Log from './Log.jsx';

function LogList() {
  const [logs, setLogs] = useState('');

  const getAllLogs = async () => {
    try{
      const response = await axios.get('http://localhost:3300/apiv1/log/getAllLogs');
      const data = response.data;
      console.log(response.data.all);
      if(data.status){
        setLogs(data.all);
      }
    }
    catch(err){
      console.log(err);
    }
  };

  const logList = logs.map(log => (
    <Log key={log._id} log={log}/>
  ));

  useEffect(getAllLogs, []);

  return(
    <div>
      {logList}
    </div>
  );
}

export default LogList;
