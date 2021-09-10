
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact').insert([
        {system_id: 1, contact_name: 'Evan Fillman', contact_email: 'evan.fillman.1@us.af.mil', contact_office_name: 'ALSA', contact_office_purpose: 'SPO'}
      ]);
    });
};
