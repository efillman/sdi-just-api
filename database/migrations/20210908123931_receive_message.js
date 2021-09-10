exports.up = function(knex) {
  return knex.schema.createTable('receive_message', (table) => {
    table.increments('receive_message_id').primary();
    table.integer('compatibility_id').references('compatibility.compatibility_id');
    table.integer('message_id').references('message.message_id');
    table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('receive_message');
};
