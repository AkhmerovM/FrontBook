var pgp = require('pg-promise')(/* options */);

var cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'postgres',
    user: 'test',
    password: 'test'
};

module.exports = pgp(cn);
