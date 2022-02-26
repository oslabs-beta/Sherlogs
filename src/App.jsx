import React from 'react';
import './App.css';
import LogsDisplay from './components/LogsDisplay.jsx';

function App() {
  return (
    <div className='App'>
      <h1 className='font-bold text-2xl text-blue-900'>Sherlogs</h1>
      <LogsDisplay></LogsDisplay>
    </div>
  );
}

export default App;
