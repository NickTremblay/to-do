import React from "react";
 
const SignIn =  () =>{

    const handleSignIn = (e:React.SyntheticEvent) => {
        e.preventDefault();
    }

    const handleSignUp = (e:React.SyntheticEvent) => {
        e.preventDefault();
    }

    return (
        <div className="App SignIn">
            <form onSubmit={handleSignIn}>
                <h2> Sign In</h2>
                <h4>Username:</h4>
                <input type="text" />
                <button type="submit" className="Button">Go!</button>
            </form>
            <br />
            <hr />
            <form onSubmit={handleSignUp}>
                <h2> Sign Up</h2>
                <h4>Displayname:</h4>
                <input type="text" />
                <h4>Username:</h4>
                <input type="text" />
                <br />
                <button type="submit" className="Button">Go!</button>
            </form>

        </div>
    );
}

export default SignIn;