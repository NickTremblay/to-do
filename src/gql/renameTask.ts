import { gql } from "@apollo/client";

const RENAME_TASK = gql `
    mutation RenameTask($ID: Int!, $content: String!) {
        update_todo_task(where: {ID: {_eq: $ID}}, _set: {content: $content}) {
            returning {
                content
            }
        }
    }
`;

export default RENAME_TASK;