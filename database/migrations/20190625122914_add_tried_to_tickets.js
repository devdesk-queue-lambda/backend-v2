exports.up = function(knex, Promise) {
  return knex.schema.table('tickets', function(t) {
      t.string('tried');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tickets', function(t) {
      t.dropColumn('tried');
  });
};