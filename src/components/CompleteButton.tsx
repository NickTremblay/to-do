import React, { useState } from "react";
import {AiOutlineCheck} from "react-icons/ai";

interface Props{
    onClick: () => void; 
}

export const CompleteButton:React.FC<Props> = ({onClick}) =>  {
    return  <button className="CompleteButton" onClick={onClick}><AiOutlineCheck /></button>;
}