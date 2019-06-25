const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'admin', password: bcrypt.hashSync('password', 10), authType: "admin"},
        {id: 2, username: 'helper', password: bcrypt.hashSync('password', 10), authType: "helper"}
      ]);
    });
};
