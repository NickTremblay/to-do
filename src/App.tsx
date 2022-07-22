import React, { useContext, useState } from 'react';
import { TaskList } from './components/TaskList';
import SignIn from "./components/SignIn";
import User from './types/User';
import './App.css';

function App() {
  const [user, setUser] = useState({
    id: -1, 
    displayname: "",
    username: ""
  } as User);

  const handleSignIn = (u: User) =>{
    setUser(u); 
    // Persist user instance to localStorage
    localStorage.setItem("user", JSON.stringify(u));
  }

  // Override main app render with sign in page when no persisted user instance
  if(!window.localStorage.getItem("user")) return <SignIn handleSignIn={handleSignIn} />;

  // Derive user instance from localStorage if it does not exist in state 
  if(user.id === -1) setUser(JSON.parse(localStorage.getItem("user") || "") as User);

  return (
      <div className="App">
        <h1>{user.displayname}'s To Do:</h1>
        <TaskList />
      </div>
  );
}

export default App;
