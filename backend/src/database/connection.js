const knex = require('knex');
const configuration = require('../../knexfile');

const connfig = process.env.NODE_ENV ? configuration.test : configuration.development;

const connection = knex(connfig);

module.exports = connection;