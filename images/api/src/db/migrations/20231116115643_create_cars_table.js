exports.up = function(knex) {
    return knex.schema.createTable('cars', function(table) {
        table.increments('id').primary();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.integer('year').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cars');
};