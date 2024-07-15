const express = require('express');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');
const knex = require('./db/knex'); // Import knex for database connection

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/cars', carRoutes);

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});