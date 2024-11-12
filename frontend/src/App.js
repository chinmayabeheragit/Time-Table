// src/App.js
import React, { useState, useEffect } from 'react';
import { getTasks, createTask, markTaskCompleted } from './services/taskService';
import './styles/App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);  // To store tasks from backend
    const [taskInput, setTaskInput] = useState({ topic: '', day: '', time: '' });

    // Fetch tasks when the component loads
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasks = await getTasks();
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };
        fetchTasks();
    }, []);

    // Handle task creation
    const handleTaskSubmit = async (e) => {
        e.preventDefault();

        try {
            const newTask = await createTask(taskInput);
            setTasks([...tasks, newTask]);  // Add new task to the list
            setTaskInput({ topic: '', day: '', time: '' });  // Reset input fields
        } catch (error) {
            console.error('Error creating task', error);
        }
    };

    // Handle task completion toggle
    const handleTaskCompletion = async (taskId) => {
        try {
            const updatedTask = await markTaskCompleted(taskId);
            setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));  // Update task in list
        } catch (error) {
            console.error('Error marking task as completed', error);
        }
    };

    return (
        <div className="App">
            <h1>Task List</h1>

            {/* Task Form */}
            <form onSubmit={handleTaskSubmit}>
                <input
                    type="text"
                    value={taskInput.topic}
                    onChange={(e) => setTaskInput({ ...taskInput, topic: e.target.value })}
                    placeholder="Topic"
                    required
                />
                <input
                    type="text"
                    value={taskInput.day}
                    onChange={(e) => setTaskInput({ ...taskInput, day: e.target.value })}
                    placeholder="Day"
                    required
                />
                <input
                    type="text"
                    value={taskInput.time}
                    onChange={(e) => setTaskInput({ ...taskInput, time: e.target.value })}
                    placeholder="Time"
                    required
                />
                <button type="submit">Add Task</button>
            </form>

            {/* Task List */}
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <div>
                            <h3>{task.topic}</h3>
                            <p>{task.day} - {task.time}</p>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleTaskCompletion(task._id)}  // Toggle completion
                                />
                                Mark as completed
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
