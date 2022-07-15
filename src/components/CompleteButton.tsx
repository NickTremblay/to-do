import React, { useState } from "react";
import {AiOutlineCheck} from "react-icons/ai";

interface Props{
    ID: number, 
    onClick: () => void; 
}

export const CompleteButton:React.FC<Props> = ({ID, onClick}) =>  {
    return  <button className="CompleteButton" onClick={onClick}><AiOutlineCheck /></button>;
}