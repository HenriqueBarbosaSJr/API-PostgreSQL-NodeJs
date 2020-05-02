const knexfile = require('../../knexfile');
const knex = require('kenx')(knexfile['develoment']);

module.exports = knex;