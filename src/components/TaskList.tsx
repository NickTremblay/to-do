import React, { useState } from 'react';
import {ListItem} from './ListItem';
import {Button, iconName} from './Button';
import Task from '../types/Task';
import User from '../types/User';

export const TaskList:React.FC<{user:User}> = ({user}) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleDelete = (id: number) => {
        setTasks(
            tasks.filter(task => task.ID !== id)
        );
    }

    const handleNewTask = () =>{
        let content:string = window.prompt("Enter your new task name") || "";

        // Override state update and terminate if no content
        if(!content || content === "") return;

        setTasks(
            [
                ...tasks,
                {
                    content, 
                    // ID of new task is ID of last task + 1 or 0 
                    ID: (tasks.length === 0 ? 0 : tasks[tasks.length - 1].ID + 1)
                }
            ]
        );
    }

    return (
        <ul className="TaskList">
            {
                // Convert each task to ListItem and render
                tasks.map(task => (<ListItem content={task.content} key={task.ID} complete={task.complete} handleDelete={() => handleDelete(task.ID)} />))
            }
            <Button icon={iconName.add} className="NewTaskButton" onClick={handleNewTask} />
        </ul>
    )
}