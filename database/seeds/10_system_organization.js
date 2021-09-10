
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('system_organization').del()
    .then(function () {
      // Inserts seed entries
      return knex('system_organization').insert([
        {system_id: 1, organization_id: 1},
        {system_id: 2, organization_id: 1},
        {system_id: 3, organization_id: 1}
      ]);
    });
};
