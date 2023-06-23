const getUsersHandler = require('./getUsersHandler');
const getUsersByNameHandler = require('./getUsersByNameHandler');
const getUserByEmailHandler = require('./getUserByEmailHandler');
const postUserHandler = require('./postUserHandler');
const putUserHandler = require('./putUserHandler');
const deleteUserHandler = require('./deleteUserHandler');


module.exports = {
    getUsersHandler,
    getUserByEmailHandler,
    getUsersByNameHandler,
    postUserHandler,
    putUserHandler,
    deleteUserHandler
}