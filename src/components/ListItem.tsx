import React, { useState } from 'react';
import {Button, iconName} from './Button';

interface Props{
    content: string, 
    complete?: boolean,
    key: number
    handleDelete: () => void; 
}

export const ListItem:React.FC<Props> = ({content, complete = false, handleDelete}: Props) =>  {

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
        <li className={"ListItem" + (isComplete ? " strikethrough" : "")}>
            {taskContent}
            <Button onClick={handleComplete} icon={isComplete ? iconName.undo : iconName.complete} />
            <Button onClick={handleEdit} icon={iconName.edit} />
            <Button onClick={handleDelete} icon={iconName.delete} />
        </li>
    );
}