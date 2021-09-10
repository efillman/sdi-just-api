
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('receive_message').del()
    .then(function () {
      // Inserts seed entries
      return knex('receive_message').insert([
        {compatibility_id: 1, message_id: 4},
        {compatibility_id: 1, message_id: 5},
        {compatibility_id: 1, message_id: 6}
      ]);
    });
};