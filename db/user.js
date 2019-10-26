var connection = require('./connection');

module.exports = {
    getUsers: function () {
        connection.one('SELECT email FROM users', 123)
            .then(user => {
                console.log(user); // print user name;
            })
            .catch(error => {
                console.log(error); // print the error;
            });
    }
};
