import User from "../types/User"

// Returns User if found or do not return 
const createUser = async(username: string, displayname: string) => {
        // Generate custom gql query to fetch 
        const query  =  `
        mutation createUser {
            insert_todo_user(objects: {displayname: "${displayname}", username: "${username}"}) {
              returning {
                id
              }
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
                operationName: "createUser"
            })
        }).catch(e => {throw (e || "Unknown occoured trying to create user " + username)});
        
        // Parse raw response into json
        const res = await (rawRes as Response).json();

        const id = res.data.insert_todo_user.returning[0].id; 

        // Return newly created user 
        return {
            id, 
            displayname,
            username
        } as User; 
}

export default createUser;