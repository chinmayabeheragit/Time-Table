const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.UUID,   // Use UUID type instead of STRING
        defaultValue: DataTypes.UUIDV4,  // Automatically generate UUIDs
        primaryKey: true,
    },
    topic: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    day: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Task;
