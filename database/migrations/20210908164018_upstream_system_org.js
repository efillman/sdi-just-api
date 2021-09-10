exports.up = function(knex) {
  return knex.schema.createTable('upstream_system_org', (table) => {
    table.increments('upstream_id').primary();
    table.integer('system_id').references('system.system_id');
    table.integer('system_organization_id').references('system_organization.system_organization_id');
    table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('upstream_system_org');
};
