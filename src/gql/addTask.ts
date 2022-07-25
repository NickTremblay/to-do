import { gql } from "@apollo/client"

const ADD_TASK = gql`
    mutation CreateTask($complete: Boolean!, $content: String!, $owner: Int!) {
        insert_todo_task(objects: {complete: $complete, content: $content, owner: $owner}) {
            returning {
                ID
            }
        }
    }
`;

export default ADD_TASK; 