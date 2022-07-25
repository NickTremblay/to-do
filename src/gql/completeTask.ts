import { gql } from "@apollo/client"

const COMPLETE_TASK = gql `
    mutation CompleteTask($ID: Int!, $complete: Boolean!) {
        update_todo_task(where: {ID: {_eq: $ID}}, _set: {complete: $complete}) {
            returning {
                complete
            }
        }
    }
`;

export default COMPLETE_TASK;