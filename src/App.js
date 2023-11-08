import React from 'react';
import './App.css';
import BoardList from './component/BoardList';

function App() {
  return (
    <div className="App">
      <h1>Kanban Board App</h1>
      <BoardList />
    </div>
  );
}

export default App;
