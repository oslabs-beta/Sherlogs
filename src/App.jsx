import React from 'react';
import './App.css';
import LogList from './components/LogList.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <div className='App inline-flex flex-col items-center'>
      <h1 className='font-bold text-2xl text-blue-900'>Sherlogs</h1>
      {/* <LogList /> */}
      <Login />
    </div>
  );
}

export default App;
