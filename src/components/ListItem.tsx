import React, { useState } from 'react';
import {CompleteButton} from './CompleteButton';

interface Props{
    content: string, 
    complete?: boolean,
    ID: number
}

export const ListItem:React.FC<Props> = ({content, complete = false, ID}: Props) =>  {

    const [isComplete, setComplete] = useState(complete); 

    const handleComplete = () => {
        // Toggle complete status in state 
        setComplete(!isComplete);
    }

    

    return (
        <li className={"ListItem" + (isComplete ? " strikethrough" : "")} id={ID.toString()}>
            {content}
            <CompleteButton onClick={handleComplete}/>
        </li>
    )
}