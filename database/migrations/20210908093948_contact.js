
exports.up = function(knex) {
  return knex.schema.createTable('contact', (table) => {
    table.increments('contact_id').primary();
    table.integer('system_id');
    table.string('contact_name').notNullable();
    table.string('contact_email').notNullable();
    table.string('contact_office_name');
    table.string('contact_office_purpose');
    table.foreign('system_id').references('system.system_id');
    table.timestamps(true, true);
  });

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contact');
};
