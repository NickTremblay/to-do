import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import COMPLETE_TASK from '../gql/completeTask';
import RENAME_TASK from '../gql/renameTask';
import {Button, iconName} from './Button';

interface Props{
    content: string, 
    complete?: boolean,
    ID: number
    handleDelete: () => void; 
}

export const ListItem:React.FC<Props> = ({content, complete = false, handleDelete, ID}: Props) =>  {

    const [isComplete, setComplete] = useState(complete); 
    const [taskContent, setTaskContent] = useState(content);

    const [completeTask, taskCompletion] = useMutation(COMPLETE_TASK);
    const [renameTask, taskRenaming] = useMutation(RENAME_TASK);

    if(taskCompletion.error) throw taskCompletion.error; 
    if(taskRenaming.error) throw taskRenaming.error; 

    const handleComplete = () => {
        // Toggle complete status in state 
        completeTask({
            variables: {
                ID,
                complete: !isComplete
            }
        })
        setComplete(!isComplete);
    }

    const handleEdit = () => {
        // Prompt for new value and update state 
        const newContent: string = prompt("Edit task:", taskContent) || "";

        // Override state update and terminate if no change
        if(newContent === "" || newContent === taskContent) return;

        setTaskContent(newContent);
        renameTask({
            variables: {
                ID, 
                content: newContent
            }
        });
    }

    return (
        <li className={"ListItem" + (isComplete ? " strikethrough" : "")}>
            {taskContent}
            <Button onClick={handleComplete} icon={isComplete ? iconName.undo : iconName.complete} />
            <Button onClick={handleEdit} icon={iconName.edit} />
            <Button onClick={handleDelete} icon={iconName.delete} />
        </li>
    );
}