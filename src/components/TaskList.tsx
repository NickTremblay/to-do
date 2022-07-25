import React, { useState } from 'react';
import {ListItem} from './ListItem';
import {Button, iconName} from './Button';
import Task from '../types/Task';
import User from '../types/User';
import { useMutation, useQuery } from '@apollo/client';
import GET_TASKS from '../gql/getTasks';
import ADD_TASK from '../gql/addTask';

export const TaskList:React.FC<{user:User}> = ({user}) => {
    // Init hook to query all tasks owned by user 
    const {loading, error, data} = useQuery<{todo_task: Task[]}, {owner:number}>(GET_TASKS, {
        variables: {owner: user.id}
    })

    // Init hook to create tasks 
    const [addTask, taskSubmission] = useMutation(ADD_TASK, {
        refetchQueries: [
            {
                query: GET_TASKS,
                variables: {owner: user.id}
            }
        ]
    })

    if(loading || taskSubmission.loading) return <p>Loading...</p>;
    if(error) throw error;     
    if(taskSubmission.error) throw taskSubmission.error; 

    const handleDelete = (id: number) => {

    }

    const handleNewTask = () =>{
        let content:string = window.prompt("Enter your new task name") || "";

        // Override state update and terminate if no content
        if(!content || content === "") return;

        addTask({variables:{
            complete: false,
            content,
            owner: user.id
        }
        })
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