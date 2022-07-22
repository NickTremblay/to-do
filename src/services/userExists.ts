import User from "../types/User"

// Returns User if found or do not return 
const userExists = async(username: string) => {
        // Generate custom gql query to fetch 
        const query =  `
        query GetUser {
            todo_user(where: {username: {_eq: "${username}"}}) {
                id
                username
                displayname
            }
        }`; 

        // Store raw gql response 
        const rawRes = await fetch("https://blessed-bear-22.hasura.app/v1/graphql", {
            method: "POST",
            headers: {
                // Assume hasura admin secret exists in localStorage to supplement real authentication
                "x-hasura-admin-secret": localStorage.getItem("secret") || "",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query,
                variables: {},
                operationName: "GetUser"
            })
        });
        
        // Parse raw response into json
        const res = await (rawRes as Response).json();

        // If user exists 
        if(res.data.todo_user.length > 0){
            return {
                ...res.data.todo_user[0]
            } as User;
        }
}

export default userExists;