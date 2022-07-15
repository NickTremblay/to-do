import React, { useState } from 'react';
import {CompleteButton} from './CompleteButton';
import { DeleteButton } from './DeleteButton';
import {EditButton} from './EditButton';

interface Props{
    content: string, 
    complete?: boolean,
    ID: number
    handleDelete: () => void; 
}

export const ListItem:React.FC<Props> = ({content, complete = false, ID, handleDelete}: Props) =>  {

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

    if(isComplete){
        return (
            <li className="ListItem strikethrough" id={ID.toString()}>
                {taskContent}
                <EditButton onClick={handleEdit} />
                <DeleteButton onClick={handleDelete} />
            </li>
        )
    }else{ 
        return (
            <li className="ListItem" id={ID.toString()}>
                {taskContent}
                <CompleteButton onClick={handleComplete}/>
                <EditButton onClick={handleEdit} />
                <DeleteButton onClick={handleDelete} />
            </li>
        )
    }
}