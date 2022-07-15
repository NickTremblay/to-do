import React, { useState } from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";

interface Props{
    onClick: () => void; 
}

export const NewTaskButton:React.FC<Props> = ({onClick}) =>  {
    return  <button className="Button" onClick={onClick}><AiOutlinePlusCircle /></button>;
}