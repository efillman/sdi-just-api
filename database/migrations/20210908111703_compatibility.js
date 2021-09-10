
exports.up = function(knex) {
  return knex.schema.createTable('compatibility', (table) => {
    table.increments('compatibility_id').primary();
    table.integer('system_id').references('system.system_id');
    table.integer('baseline_id').references('baseline.baseline_id');
    table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('compatibility');
};