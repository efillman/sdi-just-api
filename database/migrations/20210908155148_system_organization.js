exports.up = function(knex) {
  return knex.schema.createTable('system_organization', (table) => {
    table.increments('system_organization_id').primary();
    table.integer('system_id').references('system.system_id');
    table.integer('organization_id').references('organization.organization_id');
    table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('system_organization');
};
