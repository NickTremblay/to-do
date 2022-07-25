import { gql } from "@apollo/client"

const GET_TASKS = gql`
    query GetTasks($owner: Int!) {
        todo_task(where: {owner: {_eq: $owner}}, order_by: {ID: asc}) {
            complete
            content
            ID
        }
    }
`;

export default GET_TASKS; 