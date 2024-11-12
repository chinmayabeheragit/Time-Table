const { Sequelize } = require('sequelize');
require('dotenv').config(); // Ensure .env is loaded

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  logging: false, // Optional, disable Sequelize logging
});

module.exports = sequelize;