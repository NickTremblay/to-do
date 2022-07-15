import React, { useState } from "react";
import {AiFillEdit} from "react-icons/ai";

interface Props{
    onClick: () => void; 
}

export const EditButton:React.FC<Props> = ({onClick}) =>  {
    return  <button className="Button" onClick={onClick}><AiFillEdit /></button>;
}