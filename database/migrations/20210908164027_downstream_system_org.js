exports.up = function(knex) {
  return knex.schema.createTable('downstream_system_org', (table) => {
    table.increments('downstream_id').primary();
    table.integer('system_id').references('system.system_id');
    table.integer('system_organization_id').references('system_organization.system_organization_id');
    table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('downstream_system_org');
};