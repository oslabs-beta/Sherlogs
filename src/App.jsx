import React from 'react';
import './App.css';
import LogList from './components/LogList.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
      {/* <div className='App inline-flex flex-col items-center bg-dark w-full h-max'> */}

      {/* <h1 className='font-bold text-2xl text-red mt-3'>Sherlogs</h1> */}
      <Navbar />
      <LogList />
    </div>
  );
}

export default App;
