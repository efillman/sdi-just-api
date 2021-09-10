
exports.up = function(knex) {
    return knex.schema.createTable('message', (table) => {
      table.increments('message_id').primary();
      table.string('message_designator').notNullable();
      table.string('message_short_name').notNullable();
      table.string('message_long_name').notNullable();
      table.timestamps(true, true);
      });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('message');
  };