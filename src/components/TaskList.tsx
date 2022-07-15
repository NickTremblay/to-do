import React, { useState } from 'react';
import {ListItem} from './ListItem';

interface Task {
    content: string, 
    complete?: boolean,
    ID: number
}

export const TaskList:React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <ul className="TaskList">
            {
                // Convert each task to ListItem and render
                tasks.map(task => (<ListItem content={task.content} ID={task.ID} complete={task.complete} />))
            }
        </ul>
    )
}