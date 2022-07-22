import React from 'react';
import { TaskList } from './components/TaskList';
import SignIn from "./components/SignIn";
import './App.css';

function App() {
  if(!window.localStorage.getItem("uid")) return <SignIn />

  return (
    <div className="App">
      <h1>To Do:</h1>
      <TaskList />
    </div>
  );
}

export default App;
