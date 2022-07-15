import React from 'react';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To Do:</h1>
      <TaskList />
    </div>
  );
}

export default App;
