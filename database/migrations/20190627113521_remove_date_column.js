exports.up = function(knex, Promise) {
  return knex.schema.table('tickets', function(t) {
    t.dropColumn('date');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tickets', function(t) {
    t.date('date');
});
};