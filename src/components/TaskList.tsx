import React, { useState } from 'react';
import {ListItem} from './ListItem';
import {Button, iconName} from './Button';
import Task from '../types/Task';
import User from '../types/User';
import { useQuery } from '@apollo/client';
import GET_TASKS from '../gql/getTasks';

export const TaskList:React.FC<{user:User}> = ({user}) => {
    // Init hook to query all tasks owned by user 
    const {loading, error, data} = useQuery<{todo_task: Task[]}, {owner:number}>(GET_TASKS, {
        variables: {owner: user.id}
    })

    if(loading) return <p>Loading...</p>;
    if(error) throw error;     

    const handleDelete = (id: number) => {

    }

    const handleNewTask = () =>{
        let content:string = window.prompt("Enter your new task name") || "";

        // Override state update and terminate if no content
        if(!content || content === "") return;

        
    }

    return (
        <ul className="TaskList">
            {
                // Convert each task to ListItem and render
                data ? data.todo_task.map(task => (<ListItem content={task.content} key={task.ID} complete={task.complete} handleDelete={() => handleDelete(task.ID)} />)) : ""
            }
            <Button icon={iconName.add} className="NewTaskButton" onClick={handleNewTask} />
        </ul>
    )
}