import React, { useState } from "react"; 
import User from "../types/User";

interface Props{
    handleSignIn: (u: User) => void; 
}

const SignIn:React.FC<Props> =  ({handleSignIn}) =>{
    const [inputs, setInputs] = useState({
        username:"",
        displayname: "",
        newUsername:""
    });

    const handleChange = (e: React.SyntheticEvent) => {
        // Cast event target to HTMLInputElement type before reading
        const name = (e.target as HTMLInputElement).name; 
        const value = (e.target as HTMLInputElement).value;

        // Update state of form data 
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSignInSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
    }

    const handleSignUpSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
    }

    return (
        <div className="App SignIn">
            <form onSubmit={handleSignInSubmit}>
                <h2> Sign In</h2>
                <h4>Username:</h4>
                <input type="text" name="username" onChange={handleChange} value={inputs.username} />
                <button type="submit" className="Button">Go!</button>
            </form>
            <br />
            <hr />
            <form onSubmit={handleSignUpSubmit}>
                <h2> Sign Up</h2>
                <h4>Displayname:</h4>
                <input type="text" name="displayname" value={inputs.displayname} />
                <h4>Username:</h4>
                <input type="text" name="newUsername" value={inputs.newUsername} />
                <br />
                <button type="submit" className="Button">Go!</button>
            </form>

        </div>
    );
}

export default SignIn;