import React, { useState } from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";

interface Props{
    onClick: () => void; 
}

export const NewTaskButton:React.FC<Props> = ({onClick}) => {
    return  <li><button className="NewTaskButton" onClick={onClick}><AiOutlinePlusCircle /></button></li>;
}