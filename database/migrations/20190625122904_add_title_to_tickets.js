exports.up = function(knex, Promise) {
  return knex.schema.table('tickets', function(t) {
      t.string('title');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tickets', function(t) {
      t.dropColumn('title');
  });
};