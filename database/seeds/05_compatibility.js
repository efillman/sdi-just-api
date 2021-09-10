
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('compatibility').del()
      .then(function () {
        // Inserts seed entries
        return knex('compatibility').insert([
          {system_id: 1, baseline_id: 1},
          {system_id: 2, baseline_id: 1}
        ]);
      });
  };