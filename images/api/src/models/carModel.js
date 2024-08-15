const knex = require('../db/seeds/knexfile')

exports.getAll = () => {
    return knex('cars').select('*');
};

exports.getById = (id) => {
    return knex('cars').where({ id }).first();
};

exports.add = (car) => {
    return knex('cars').insert(car).returning('*');
};

exports.update = (id, car) => {
    return knex('cars').where({ id }).update(car).returning('*');
};

exports.remove = (id) => {
    return knex('cars').where({ id }).del();
};