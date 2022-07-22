import React, { useContext, useState } from 'react';
import { TaskList } from './components/TaskList';
import SignIn from "./components/SignIn";
import User from './types/User';
import './App.css';

function App() {
  const [user, setUser] = useState({})

  const handleSignIn = (u: User) =>{
    setUser(u); 
    // Persist user instance to localStorage
    localStorage.setItem("user", JSON.stringify(u));
  }

  // Override main app render with sign in page when no persisted user instance
  if(!window.localStorage.getItem("user")) return <SignIn handleSignIn={handleSignIn} />;

  return (
      <div className="App">
        <h1>To Do:</h1>
        <TaskList />
      </div>
  );
}

export default App;
