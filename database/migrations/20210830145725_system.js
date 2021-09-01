
exports.up = function (knex) {
  return knex.schema.createTable('system', (table) => {
    table.increments('system_id').primary();
    table.integer('service_id');
    table.string('system_short_name').notNullable();
    table.string('system_long_name').notNullable();
    table.integer('system_importance').defaultTo(0).notNullable();
    table.string('system_note');
    table.foreign('service_id').references('services.service_id');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('system');
};
