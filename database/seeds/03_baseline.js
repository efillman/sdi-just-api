
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('baseline').del()
    .then(function () {
      // Inserts seed entries
      return knex('baseline').insert([
        {baseline_name: 'USMTF 2000'},
        {baseline_name: 'USMTF 2004'},
        {baseline_name: 'USMTF(B)'}
      ]);
    });
};
