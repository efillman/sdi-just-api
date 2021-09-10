
exports.up = function(knex) {
  return knex.schema.createTable('organization', (table) => {
    table.increments('organization_id').primary();
    table.integer('service_id');
    table.string('organization_short_name').notNullable();
    table.string('organization_long_name').notNullable();
    table.string('organization_echelon');
    table.boolean('organization_tactical');
    table.boolean('organization_operational');
    table.boolean('organization_strategic');
    table.foreign('service_id').references('services.service_id');
    table.timestamps(true, true);
  });

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('organization');
};
