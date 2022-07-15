import React, { useState } from 'react';
import {CompleteButton} from './CompleteButton';
import {EditButton} from './EditButton';

interface Props{
    content: string, 
    complete?: boolean,
    ID: number
}

export const ListItem:React.FC<Props> = ({content, complete = false, ID}: Props) =>  {

    const [isComplete, setComplete] = useState(complete); 
    const [taskContent, setTaskContent] = useState(content);

    const handleComplete = () => {
        // Toggle complete status in state 
        setComplete(!isComplete);
    }

    const handleEdit = () => {
        // Prompt for new value and update state 
        const newContent: string = prompt("Edit task:", taskContent) || "";

        // Override state update and terminate if no change
        if(newContent === "" || newContent === taskContent) return;

        setTaskContent(newContent);
    }

    return (
        <li className={"ListItem" + (isComplete ? " strikethrough" : "")} id={ID.toString()}>
            {taskContent}
            <CompleteButton onClick={handleComplete}/>
            <EditButton onClick={handleEdit} />
        </li>
    )
}