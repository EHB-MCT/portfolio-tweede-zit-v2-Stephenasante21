const express = require('express');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');
const knex = require('../src/db/knexfile');

const app = express();

app.use(bodyParser.json());
app.use('/cars', carRoutes);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

module.exports = app;