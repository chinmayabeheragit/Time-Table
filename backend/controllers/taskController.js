// backend/controllers/taskController.js
const taskService = require('../services/taskService');
const response = require('../utils/response');

const createTask = async (req, res) => {
    try {
        const result = await taskService.createTask(req.body);
        return response.handleSuccessResponse(
            { result },
            res,
            'Task created successfully',
            'Task created successfully'
        );
    } catch (error) {
        return response.handleErrorResponse(error, res);
    }
};

const getAllTasks = async (req, res) => {
    try {
        const result = await taskService.getAllTasks();
        return response.handleSuccessResponse(
            { result },
            res,
            'Tasks fetched successfully',
            'Tasks fetched successfully'
        );
    } catch (error) {
        return response.handleErrorResponse(error, res);
    }
};

const markTaskCompleted = async (req, res) => {
    try {
        const result = await taskService.markTaskCompleted(req.params.id);
        return response.handleSuccessResponse(
            { result },
            res,
            'Task marked as completed',
            'Task marked as completed'
        );
    } catch (error) {
        return response.handleErrorResponse(error, res);
    }
};

module.exports = {
    createTask,
    getAllTasks,
    markTaskCompleted,
};
