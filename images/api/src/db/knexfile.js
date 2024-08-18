require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.POSTGRES_HOST || "127.0.0.1",
            user: process.env.POSTGRES_USER || "example",
            password: process.env.POSTGRES_PASSWORD || "example",
            database: process.env.POSTGRES_DB || "test",
            port: process.env.POSTGRES_PORT || 5432

        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/db/migrations',
        },
        seeds: {
            directory: './src/db/seeds',
        },
        useNullAsDefault: true,
    },

    test: {
        client: 'pg',
        connection: {
            host: process.env.POSTGRES_HOST || "127.0.0.1",
            user: process.env.POSTGRES_USER || "example",
            password: process.env.POSTGRES_PASSWORD || "example",
            database: process.env.POSTGRES_DB || "test",
            port: process.env.POSTGRES_PORT || 5432
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/db/migrations',
        },
        seeds: {
            directory: './src/db/seeds',
        },
        useNullAsDefault: true,
    }

};


