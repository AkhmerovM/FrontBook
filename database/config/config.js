require('dotenv').config();

module.exports = {
    development: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
        host: 'localhost', // server name or IP address;
        port: 5432,
        database: 'frontbook',
        user: 'postgres',
        password: 'postgres'
    },
    test: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
    }
};
