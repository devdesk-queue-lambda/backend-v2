exports.up = function(knex) {
  return knex.schema.createTable("tickets", tickets => {
    tickets.increments();

    tickets.string("type", 255).notNullable();

    tickets.string("description", 5000).notNullable();

    tickets
      .integer("owner")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tickets
      .integer("assigned")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tickets.date("date");

    tickets.boolean("resolved");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tickets");
};