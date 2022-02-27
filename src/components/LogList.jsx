import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Log from './Log.jsx';
import Searchbar from './Searchbar.jsx';

function LogList() {
  const [logs, setLogs] = useState([]);
  const [query, setQuery] = useState('');

  const getAllLogs = async () => {
    try{
      const response = await axios.get('http://localhost:3300/apiv1/log/getAllLogs');
      const data = response.data;
      console.log(response.data.all);
      if(data.status){
        setLogs(data.all.reverse());
      }
    }
    catch(err){
      console.log(err);
    }
  };
  
  useEffect(getAllLogs, []);

  const filtered = logs.filter(log => {
    if(query === ''){
      return log;
    }
    else if(log.message.toLowerCase().includes(query.toLowerCase())){
      return log;
    }
    else return false;
  });

  const logList = filtered.map(log => <Log key={log._id} log={log}/>);

  return(
    <div className='inline-flex flex-col items-center'>
      <Searchbar setQuery={setQuery}/>
      <div className='w-11/12 border-2'>
        {logList}
        {logList.length === 0 && <p>No results found</p>}
      </div>
    </div>
  );
}

export default LogList;
