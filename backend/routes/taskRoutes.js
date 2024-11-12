// backend/routes/taskRoutes.js
const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topic:
 *                 type: string
 *               day:
 *                 type: string
 *               time:
 *                 type: string
 *             example:
 *               topic: "Math Homework"
 *               day: "Monday"
 *               time: "10:00 AM"
 *     responses:
 *       200:
 *         description: Task created successfully
 */
router.post('/', taskController.createTask);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: List of all tasks
 */
router.get('/', taskController.getAllTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   patch:
 *     summary: Mark task as completed
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: Task marked as completed
 *       404:
 *         description: Task not found
 */
router.patch('/:id', taskController.markTaskCompleted);

module.exports = router;
