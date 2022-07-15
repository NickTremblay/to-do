import React, { useState } from "react";
import {AiFillDelete} from "react-icons/ai";

interface Props{
    onClick: () => void; 
}

export const DeleteButton:React.FC<Props> = ({onClick}) =>  {
    return  <button className="Button" onClick={onClick}><AiFillDelete /></button>;
}