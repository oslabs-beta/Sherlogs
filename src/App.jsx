import React from 'react';
import './App.css';
import LogList from './components/LogList.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <div className='App inline-flex flex-col items-center'>
      <h1 className='font-bold text-2xl text-blue-900'>Sherlogs</h1>
      <LogList />
      {/* <Signup /> */}
    </div>
  );
}

export default App;
