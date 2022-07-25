import React, { useState } from "react"; 
import User from "../types/User";
import userExists from "../services/userExists"
import createUser from "../services/createUser";

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

    const handleSignInSubmit = async(e:React.SyntheticEvent) => {
        e.preventDefault();

        if(inputs.username == "") return alert("Username cannot be blank");

        const user = await userExists(inputs.username);
        if(!user) return alert("Incorrect username");

        // Sign in success
        handleSignIn(user);
    }

    const handleSignUpSubmit = async(e:React.SyntheticEvent) => {
        e.preventDefault();

        if(inputs.newUsername == "") return alert("Username cannot be blank");
        if(inputs.displayname == "") return alert("Displayname cannot be blank");

        let u = await userExists(inputs.newUsername);
        if(u) return alert("Username already exists");

        const user = await createUser(inputs.newUsername, inputs.displayname);

        // Sign in newly created user
        handleSignIn(user)
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
                <input type="text" name="displayname" onChange={handleChange} value={inputs.displayname} />
                <h4>Username:</h4>
                <input type="text" name="newUsername" onChange={handleChange} value={inputs.newUsername} />
                <br />
                <button type="submit" className="Button">Go!</button>
            </form>

        </div>
    );
}

export default SignIn;