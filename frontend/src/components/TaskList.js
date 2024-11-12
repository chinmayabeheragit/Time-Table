import React, { useState, useEffect } from 'react';
import { getTasks, completeTask } from '../services/taskService';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const taskData = await getTasks();
                setTasks(taskData);
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };

        fetchTasks();
    }, []);

    const handleCompleteTask = async (taskId) => {
        try {
            const updatedTask = await completeTask(taskId);
            setTasks(tasks.map(task => task.id === taskId ? updatedTask : task));
        } catch (error) {
            console.error('Error completing task', error);
        }
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.topic} - {task.day} - {task.time}
                        {!task.completed && (
                            <button onClick={() => handleCompleteTask(task.id)}>Mark as Completed</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
