import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks', error);
        throw error;
    }
};

export const createTask = async (task) => {
    try {
        const response = await axios.post(API_URL, task);
        return response.data;
    } catch (error) {
        console.error('Error creating task', error);
        throw error;
    }
};

export const completeTask = async (taskId) => {
    try {
        const response = await axios.patch(`${API_URL}/${taskId}`);
        return response.data;
    } catch (error) {
        console.error('Error completing task', error);
        throw error;
    }
};
