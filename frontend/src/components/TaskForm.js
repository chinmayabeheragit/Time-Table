import React, { useState } from 'react';
import { createTask } from '../services/taskService';

const TaskForm = ({ onTaskCreated }) => {
    const [topic, setTopic] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { topic, day, time };
        try {
            const createdTask = await createTask(newTask);
            onTaskCreated(createdTask);
            setTopic('');
            setDay('');
            setTime('');
        } catch (error) {
            console.error('Error creating task', error);
        }
    };

    return (
        <div>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Topic:</label>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Day:</label>
                    <input
                        type="text"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Time:</label>
                    <input
                        type="text"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
