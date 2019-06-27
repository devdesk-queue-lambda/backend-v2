const knex = require('knex');
const config = require('../knexfile.js');

const environment = /*process.env.DB_ENV || "development"*/ "testing";
  
module.exports = knex(config[environment]);
