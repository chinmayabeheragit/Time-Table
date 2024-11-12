// backend/services/taskService.js
const taskQuery = require('../queries/taskQuery');

const createTask = async (taskData) => {
    try {
        return await taskQuery.createTask(taskData);
    } catch (error) {
        throw error;
    }
};

const getAllTasks = async () => {
    try {
        return await taskQuery.getAllTasks();
    } catch (error) {
        throw error;
    }
};

const markTaskCompleted = async (taskId) => {
    try {
        const task = await taskQuery.markTaskCompleted(taskId);
        if (!task) {
            throw {
                errorCode: 404,
                message: 'Task not found',
            };
        }
        return task;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createTask,
    getAllTasks,
    markTaskCompleted,
};
