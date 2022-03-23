import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Log from './Log.jsx';
import Searchbar from './Searchbar.jsx';
import LogFilter from './LogFilter.jsx';

function LogList() {
  const [logs, setLogs] = useState([]);
  const [query, setQuery] = useState('');
  const [state, setState] = useState({
    time: '',
    levels: [],
    keyword: '',
    queryTime: new Date(),
    startSearch: '',
  });

  const getAllLogs = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3300/apiv1/log/getAllLogs'
      );
      const data = response?.data;
      if (data?.status) {
        setLogs(data?.all.reverse());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchFilteredLogs = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3300/apiv1/log/filter',
        {
          data: state,
        }
      );
      const data = response?.data;

      if (data?.status) {
        setLogs(data?.filtered.reverse());
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(getAllLogs, []);

  const filtered = logs.filter((log) => {
    if (query === '') {
      return log;
    } else if (log.message.toLowerCase().includes(query.toLowerCase())) {
      return log;
    } else return false;
  });

  const logList = filtered.map((log) => <Log key={log._id} log={log} />);

  return (
    <div className='inline-flex flex-col items-center bg-dark w-full h-max pb-5'>
      <LogFilter
        state={state}
        setState={setState}
        fetchFilteredLogs={fetchFilteredLogs}
      />
      <Searchbar setQuery={setQuery} />
      <div className='w-11/12 border-2 border-less-dark'>
        {logList}
        {logList.length === 0 && <p className='text-lighter-blue'>No results found</p>}
      </div>
    </div>
  );
}

export default LogList;
