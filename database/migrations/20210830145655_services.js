
exports.up = function(knex) {
    return knex.schema.createTable('services', (table) => {
      table.increments('service_id').primary();
      table.string('service_short_name').notNullable();
      table.string('service_long_name').notNullable();
    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('services');
  };