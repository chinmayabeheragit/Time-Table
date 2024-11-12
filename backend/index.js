// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
const setupSwagger = require('./config/swagger');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Test and sync database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connected to PostgreSQL');
        return sequelize.sync();  // Sync models after connection is established
    })
    .then(() => console.log('Database synced'))
    .catch((error) => console.error('Unable to connect to PostgreSQL:', error));

// Routes
app.use('/api/tasks', taskRoutes);

// Setup Swagger
setupSwagger(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API Docs available at http://localhost:${PORT}/api-docs`);
});
