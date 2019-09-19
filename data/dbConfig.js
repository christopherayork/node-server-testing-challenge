const knex = require('knex');
const knexConfig = require('../knexfile');

const branch = process.env.DB_ENV || 'development';

const db = knex(knexConfig[branch]);

module.exports = db;