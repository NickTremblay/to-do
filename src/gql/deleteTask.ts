import { gql } from "@apollo/client"

const DELETE_TASK = gql `
    mutation DeleteTasks($ID: Int!) {
        delete_todo_task(where: {ID: {_eq: $ID}}) {
            returning {
                ID
            }
        }
    }
`

export default DELETE_TASK; 