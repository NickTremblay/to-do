import React, { SyntheticEvent, useState } from 'react';
import {ListItem} from './ListItem';
import { NewTaskButton } from './NewTaskButton';

interface Task {
    content: string, 
    complete?: boolean,
    ID: number
}

export const TaskList:React.FC = () => {
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
                tasks.map(task => (<ListItem content={task.content} ID={task.ID} complete={task.complete} handleDelete={() => handleDelete(task.ID)} />))
            }
            <NewTaskButton onClick={handleNewTask} />
        </ul>
    )
}