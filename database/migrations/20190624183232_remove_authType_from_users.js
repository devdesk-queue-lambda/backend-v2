exports.up = function(knex, Promise) {
  knex.schema.table('users', function(table) {
    table.dropColumn('authType')
  })
}

exports.down = function(knex, Promise) {
  knex.schema.table('users', function(table) {
    table.string('authType').notNull()
  })
}