const knexConfig = require('../db/knexfile')["development"];
const knex = require('knex')(knexConfig);

exports.getAll = () => {
    return knex('cars').select('*');
};

exports.getById = (id) => {
    return knex('cars').where({ id }).first();
};

exports.add = (car) => {
    return knex('cars').insert(car).returning('*').then(rows => rows[0]);
};

exports.update = (id, car) => {
    return knex('cars')
        .where({ id })
        .update(car)
        .returning('*')
        .then(rows => rows[0]);  
};

exports.remove = (id) => {
    return knex('cars').where({ id }).del();
};