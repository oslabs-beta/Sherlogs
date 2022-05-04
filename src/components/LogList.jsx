import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Log from './Log.jsx';
import Searchbar from './Searchbar.jsx';
import LogFilter from './LogFilter.jsx';
import Pagination from './Pagination.jsx';

function LogList() {
  const [logs, setLogs] = useState([]);
  const [query, setQuery] = useState('');
  const [state, setState] = useState({
    time: '',
    levels: [],
    keyword: '',
    queryTime: new Date(),
    startSearch: '',
    logOrigin: '',
  });

  const getAllLogs = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/apiv1/log/getAllLogs'
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
        'http://localhost:8080/apiv1/log/filter',
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

  return (
    <div className='inline-flex flex-col items-center bg-slate w-full h-max pb-5'>
      <LogFilter
        state={state}
        setState={setState}
        fetchFilteredLogs={fetchFilteredLogs}
      />
      <Searchbar setQuery={setQuery} />

      <div className='w-11/12'>
        {filtered.length > 0 ? (
          <Pagination
            data={filtered}
            RenderComponent={Log}
            pageLimit={5}
            dataLimit={20}
          />
        ) : (
          <p className='text-gray text-xl m-4 text-center'>No results found</p>
        )}
      </div>
    </div>
  );
}

export default LogList;
