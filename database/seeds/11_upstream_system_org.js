
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('upstream_system_org').del()
    .then(function () {
      // Inserts seed entries
      return knex('upstream_system_org').insert([
        {system_id: 1, system_organization_id: 1},
        {system_id: 2, system_organization_id: 2},
        {system_id: 3, system_organization_id: 2}
      ]);
    });
};
