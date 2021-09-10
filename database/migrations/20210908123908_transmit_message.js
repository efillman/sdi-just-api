exports.up = function(knex) {
  return knex.schema.createTable('transmit_message', (table) => {
    table.increments('transmit_message_id').primary();
    table.integer('compatibility_id').references('compatibility.compatibility_id');
    table.integer('message_id').references('message.message_id');
    table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('transmit_message');
};
