// backend/queries/taskQuery.js
const Task = require('../models/Task');

const createTask = async (taskData) => {
    try {
        const newTask = await Task.create(taskData);
        return newTask;
    } catch (error) {
        throw error;
    }
};

const getAllTasks = async () => {
    try {
        return await Task.findAll();
    } catch (error) {
        throw error;
    }
};

const markTaskCompleted = async (taskId) => {
    try {
        const task = await Task.findByPk(taskId);
        if (!task) return null;
        task.completed = true;
        await task.save();
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
