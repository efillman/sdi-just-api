
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('organization').del()
    .then(function () {
      // Inserts seed entries
      return knex('organization').insert([
        {service_id: 1, organization_short_name: '420SBS', organization_long_name: '420th Super Battle Squadron', organization_echelon: 'Squadron', organization_tactical: true, organization_operational: true, organization_strategic: false},
        {service_id: 1, organization_short_name: '69RDW', organization_long_name: '69th Rubber Ducky Wing', organization_echelon: 'Wing', organization_tactical: false, organization_operational: true, organization_strategic: true}
      ]);
    });
};
