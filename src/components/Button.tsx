import React from "react";
import {AiFillDelete, AiOutlineCheck, AiFillEdit, AiOutlinePlusCircle} from "react-icons/ai";
import {BiUndo} from "react-icons/bi";

interface Props{
    onClick: () => void; 
    icon: "delete" | "complete" | "edit" | "add" | "undo";
    className?: string; 
}

export const Button:React.FC<Props> = ({onClick, icon, className = "Button"}) =>  {
    let iconComponent; 
    switch(icon){
        case "delete":
            iconComponent = <AiFillDelete />; 
            break;

        case "complete":
            iconComponent = <AiOutlineCheck />; 
            break; 

        case "edit":
            iconComponent = <AiFillEdit />;
            break; 

        case "add":
            iconComponent = <AiOutlinePlusCircle />;
            break; 
        
        case "undo":
            iconComponent = <BiUndo />;
            break; 

        default: 
            console.error(`Error: unknown icon name "${icon}"`); 
            iconComponent = <AiFillDelete />;
    }

    return  <button className={className} onClick={onClick}>{iconComponent}</button>;
}