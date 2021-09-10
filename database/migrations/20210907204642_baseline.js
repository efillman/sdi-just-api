
exports.up = function(knex) {
  return knex.schema.createTable('baseline', (table) => {
    table.increments('baseline_id').primary();
    table.string('baseline_name').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('baseline');
};