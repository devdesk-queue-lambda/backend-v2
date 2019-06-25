exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'admin', password: "admin", authType: "admin"},
        {id: 2, username: 'helper', password: "12346789", authType: "helper"}
      ]);
    });
};
